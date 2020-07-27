<template>
  <div class="height_100 eg1">
    <div class="buttonGroup" v-if="addVisible && updateVisible">
		<el-input size="small" v-model="page.roleName"
      @keydown.enter.native="selectName" clearable
      @clear="selectName" :placeholder="$t('m.placeholder.roleName')"
    style="width:180px;margin-right:10px;"></el-input>
    <buttonList v-bind:permissionArr="$route.meta.arr" @buttonEvents="buttonEvents"></buttonList>
		<!-- <el-button @click="selectName" size="small">
			<i class="el-icon-search"></i>
		{{$t('m.button.select')}}</el-button>
		<el-button type="success" @click="addVisible=false;" size="small">
			<i class="el-icon-circle-plus-outline"></i>
			{{$t('m.button.add')}}</el-button>
		<el-button type="warning" @click="updateAction" size="small">
			<i class="el-icon-edit"></i>
			{{$t('m.button.update')}}</el-button>
		<el-button type="danger" @click="deleteAction" size="small">
			<i class="el-icon-delete"></i>
			{{$t('m.button.select')}}</el-button> -->
      
	</div>
    <!-- <div class="chest">
      <div class="heart left sided top"></div>
      <div class="heart center"></div>
      <div class="heart right sided"></div>
    </div> -->
    <!-- {{get_Userlist.records[get_Userlist.records.length -1 ]}} -->
    <el-table v-if="addVisible && updateVisible"
    ref="multipleTable"
    :data="get_RoleList.records"
    tooltip-effect="dark"
    height="calc(100% - 70px)"
    style="width: 100%;margin-bottom:6px;" 
    :row-key="getRowKey"
    :expand-row-keys="expands"
    @row-dblclick="dblclick"
    @select="select"
    @select-all="selectAll">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column type="index" :index="table_index" align="center" width="60" label="序数" />
    <el-table-column type="expand" width="24">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="Id">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="姓名">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
    <el-table-column
      prop="role"
      label="角色名"
      >
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述"
      >
    </el-table-column>
    <!-- <el-table-column
      prop="password"
      label="密码"
      >
    </el-table-column> -->
    <!-- <el-table-column
      prop="remark"
      label="备注"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column> -->
  </el-table>
  <labelTop v-if="addVisible && updateVisible"
      @sizeChange="sizeChange" :label-info="page"
      @currentChange="currentChange"></labelTop>
  <el-card v-show="!addVisible || !updateVisible" class="box-card"
  shadow="always" style="height:99%;overflow-y:auto;">
  <!-- <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div> -->
  <div slot="header" class="clearfix">
    <span v-text="addVisible ? '角色修改' : '角色添加' " style="color:#0c6">账号添加</span>
    <el-switch v-if="!addVisible" style="float:right;font-size:12px !important;"
      active-color="#13ce66"
      inactive-color=""
      v-model="switchStatus"
      active-text="连续添加"
      >
      </el-switch>
  </div>
  <!-- {{bottomArr}} 
  <br>
  {{Array.from(new Set(menuArr))}}
  <br>
  {{defaultKey}} -->
  <el-form  style="margin-left:60px;"
        class="form refuseCopy" :rules="rules" ref="addAction"
        size="small" label-position="left"
        :model="permission"
        label-width="80px"
      >
        <el-form-item label="角色名称" prop="role">
          <el-input clearable placeholder="请输入角色名称"
            v-model="permission.role"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input clearable
            v-model="permission.description"
            class="input_260"
            autocomplete="off"
          />
        <!-- :default-checked-keys="defaultKey" -->
        </el-form-item>
        <el-tree ref="tree" @check-change="getKey"
        :data="data" @check="nodeKey"
        show-checkbox
        node-key="id"
        :default-expand-all="true"
        :props="defaultProps">
        <!-- 默认选择 -->
        <!-- :check-on-click-node="true" -->
        <!-- :default-expanded-keys="[1, 2, 3]" -->
        <!-- :default-checked-keys="[5]" -->
        </el-tree>
        <el-form-item label-width="0" style="">
          <el-button
            type="primary"
            @click="addAction('addAction', permission)"
          >
            确 定
          </el-button>
          <el-button @click="cancel()">
            取 消
          </el-button>
        </el-form-item>
      </el-form>
      </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import labelTop from '../../components/page/label'
import buttonList from '../../components/table/button'
export default {
  name: 'eg1',
  components: {
    labelTop,
    buttonList
  },
  data() {
    return {
      addVisible: true,     //添加框控制器
      updateVisible: true,  //修改框控制器
      expands: [],
      selection: [],        //选中的条目
      defaultKey: [],
      getRowKey(row) {      //
          return row.roleId;
      },
      page: {
        currentPage: 1,
        pageSize: 20,
        roleName: '',
        total: 0
      },
      switchStatus: false,
      permission: {
        permissionId:[]
      },
      permissionArr: [],
      menuArr: [],
      bottomArr: [],
      rules:{
        role: { required: true, message: '姓名为必填项', trigger: 'blur'},
        // userName: { required: true, message: '姓名为必填项', trigger: 'blur'},
        // password: { required: true, message: '密码为必填项', trigger: 'blur'},
        // gender: { required: true, message: '性别为必填项', trigger: 'blur'},
        // phone: { required: true, message: '联系方式为必填项', trigger: 'blur'},
      },
      data: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    ...mapGetters([
      'get_RoleList',
      'get_Userlist'
    ]),
    // get_RoleList() {
    //   return this.$store.getters.get_RoleList;
    // }
    getCatalogue() {
      return JSON.parse(localStorage.getItem('catalogue'));
    }
  },
  mounted() {
    this.$store.dispatch('getRoleList', this.page);
    // this.$store.dispatch('getRoleList');
    this.permissionArr = this.$route.meta.arr;
    let tree;
    if(!localStorage.getItem('tree')){
      this.$store.commit('treeMenu');
    }else{
    }
    this.data = JSON.parse(localStorage.getItem('tree'));
    
    // console.log(tree);
    // this.data = tree;
    // this.$refs['tree'].setCheckedKeys(["442479847252561903"]);
    // this.bottomArr = [4]
  },
  methods: {
    nodeKey(x,y) {
      // console.log(Array.prototype.delete)
      // console.log(x, y)
      if(x.menu) {

      }
    },
    getKey(obj, v, t) {
      // 过滤一级菜单
      if(obj.children){
        return ;
      }
      if(v) {
        this.bottomArr.push(obj.id);
        this.menuArr.push(obj.parentId);
        //   if( this.menuArr.indexOf(obj.parentId) == -1 ) {
        // }
      }else{
        // var needDeleteId = this.bottomArr.indexOf(obj.id)
        // this.bottomArr.splice(needDeleteId, 1);
        var i = 0,
            parentId = 0;
        this.bottomArr.find(a => {
          if(a == obj.id){
            this.menuArr.delete(obj.parentId);
            return ;
          }
        })
        console.log(i, parentId)
        this.bottomArr.delete(obj.id);
        // if()
      }
      // this.permission.permissionId = Array.from(new Set(this.permission.permissionId));
      // console.log(obj);
      // console.log(v);
      // console.log(t);
    },
     select (selection, row) { // 单选
      this.selection = selection
      console.log(this.selection)
    },
    selectAll (selection) { // 多选
      // console.log(selection)
      this.selection = selection
      console.log(this.selection)
    },
    dblclick(row, cloumn, event) {
      // console.log(row)
      // if (this.expands.includes(row.id)) {
      //   this.expands = this.expands.filter(val => val !== row.id);
      // } else {
      //   this.expands.splice(0,1,row.id)
      // }
    },
     //翻页后序号连续
    table_index(index){
        return (this.page.currentPage-1) * this.page.pageSize + index + 1
    },
    sizeChange(val) {
      this.page.pageSize = val;
      this.selectName()
      console.log('sizeChange: ' + val)
    },
    currentChange (val) {
      console.log('currentChage ' + val)
      this.page.currentPage = val
      this.selectName()
    },
    buttonEvents(operation) {
      switch(operation) {
        case 'add': this.addVisible = false; break;
        case 'delete': this.deleteAction(); break;
        case 'update': this.updateAction(); break;
        case 'select': this.selectName(); break;
      }
    },
    // 添加与修改
		addAction(form, permission) {
			this.$refs[form].validate(valid => {
				if(valid) {
          // console.log(permission)
          let menuId = Array.from(new Set(this.menuArr));
          this.permission.permissionId = this.bottomArr.concat(menuId)
          console.log(this.permission.permissionId)
          if(this.updateVisible){ //账号添加、修改判别
            this.$store.dispatch('addRole', permission)
            .then(res => {
              console.log('addActionSuccess')
              if(!this.switchStatus) {
                this.addVisible = true;
                this.cancel();
              }
              this.permission = {};
            })
          }else{
            this.$store.dispatch('updateRole', permission)
            .then(res => {
              this.permission = {};
              this.updateVisible = true;
              // this.$store.dispatch('getUserListPage', this.page)
            })
          }
				}else{
					return false;
				}
			})
    },
    deleteAction() {
      if(this.selection.length) {
        console.log(this.selection)
        let id = this.selection[0].roleId;
        let arr = [];
        this.selection.forEach(v => {
          arr.push(v.roleId);
        })
        this.$store.dispatch('deleteRole', arr)
        .then(res => {

        })
      }else{
         this.$notify.warning({
          title: '错误提示',
          message: '请至少选择一条信息'
        });
      }
    },
    updateAction() {
      if(this.selection.length == 1) {
        console.log(this.selection)
        this.updateVisible = false;
        this.permission = this.selection[0];
        this.permission.id = this.permission.roleId;
        this.$store.dispatch('getRoleById', this.permission.id)
        .then(res => {
          res.forEach(v => {
            console.log(v)
            this.defaultKey.push(v.permissionId)
          })
        console.log(this.data)
        let menu = [];
        this.data.forEach(r => {
          r.children.forEach(c => {
            menu.push(c.id);
          })
        })
        console.log(menu)
        this.defaultKey = this.defaultKey.filter((d, i) => {
          return !menu.includes(d)
        })
        this.$refs['tree'].setCheckedKeys(this.defaultKey);
        
        // this.$refs['tree'].setCheckedKeys(["442479847252561903", "442479847252561904", "442479847252561905"]);
        })
      }else{
         this.$notify.warning({
          title: '错误提示',
          message: '请先选择一条信息'
        });
      }
    },
    selectName() {
      this.$store.dispatch('getRoleList', this.page);
    },
    cancel() {
      if(!this.updateVisible) {
        this.permission = {};
        this.selection = [];
        this.menuArr = [];
        this.bottomArr = [];
        this.defaultKey = []
        this.$refs['tree'].setCheckedKeys([]);
      }
      this.addVisible = true;this.updateVisible = true
      
    }
	}
}
</script>

<style scoped>
.eg1 {
  margin:0 8px;	
  text-align: left;

	/* background:#ffa5a5; */
}
.chest {
	width:500px;
	height:500px;
	margin:0 auto;
	position:relative;
}
.heart {
	position:absolute;
	z-index:2;
	background:linear-gradient(-90deg,#F50A45 0%,#d5093c 40%);
	animation:beat 2s ease 0s infinite normal;
}
.heart.center {
	background:linear-gradient(-45deg,#B80734 0%,#d5093c 40%);
}
.heart.top {
	z-index:3;
}
.sided {
	top:100px;
	width:220px;
	height:220px;
	border-radius:110px;
}
.center {
	width:210px;
	height:210px;
	bottom:100px;
	left:145px;
	transform:rotateZ(225deg);
}
.left {
	left:62px;
}
.right {
	right:62px;
}
@keyframes beat {
	0% {
	transform:scale(1) rotate(225deg);
	box-shadow:0 0 40px #d5093c;
}
50% {
	transform:scale(1.1) rotate(225deg);
	box-shadow:0 0 70px #d5093c;
}
100% {
	transform:scale(1) rotate(225deg);
	box-shadow:0 0 40px #d5093c;
}
}
.input_260{
  width:260px;
}
</style>