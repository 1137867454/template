<template>
  <div class="height_100 eg1">
    <div class="buttonGroup" v-if="addVisible && updateVisible">
		<el-input size="small" v-model="page.userName"
      @keydown.enter.native="selectName" clearable
      @clear="selectName" placeholder="请输入用户名"
    style="width:180px;margin-right:10px;"></el-input>
		<el-button @click="selectName" size="small">
			<i class="el-icon-search"></i>
		查询</el-button>
		<el-button type="success" @click="addVisible=false;" size="small">
			<i class="el-icon-circle-plus-outline"></i>
			添加</el-button>
		<el-button type="warning" @click="updateUser" size="small">
			<i class="el-icon-edit"></i>
			修改</el-button>
		<el-button type="danger" @click="deleteUser" size="small">
			<i class="el-icon-delete"></i>
			删除</el-button>
      <labelTop :label-info="page"
      @sizeChange="sizeChange"
      @currentChange="currentChange"></labelTop>
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
    height="calc(100% - 46px)"
    style="width: 100%" 
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
                <!-- <el-form-item label="年级ID">
                  <span>{{ props.row.gradeId }}</span>
                </el-form-item>
                <el-form-item label="班级ID">
                  <span>{{ props.row.classId }}</span>
                </el-form-item> -->
                <!-- <el-form-item label="内部班级ID">
                  <span>{{ props.row.internalClassId }}</span>
                </el-form-item> -->
              </el-form>
            </template>
          </el-table-column>
    <!-- <el-table-column
      label="日期"
      width="">
      <template slot-scope="scope">{{ scope.row.createTime.slice(0,10) }}</template>
    </el-table-column> -->
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
    <el-table-column
      prop="password"
      label="密码"
      >
    </el-table-column>
    <el-table-column
      prop="remark"
      label="备注"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <!-- {{get_RoleList}} -->
  <el-card v-show="!addVisible || !updateVisible" class="box-card"
  shadow="always" style="height:96%;overflow-y:auto;">
  <!-- <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div> -->
  <div slot="header" class="clearfix">
    <span v-text="addVisible ? '角色修改' : '角色添加' " style="color:#0c6">账号添加</span>
    <el-button style="float: right; padding: 3px 0" type="text">
      <i class="el-icon-turn-off"></i>
      操作按钮</el-button>
  </div>
  {{permission}} 
  <br>
  {{menuArr}}
  <el-form  style="margin-left:60px;"
        class="form refuseCopy" :rules="rules" ref="addPermission"
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
        <el-form-item label="角色描述" prop="discription">
          <el-input clearable
            v-model="permission.discription"
            class="input_260"
            autocomplete="off"
          />
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
            @click="addPermission('addPermission', permission)"
          >
            确 定
          </el-button>
          <el-button @click="cancle('addPermission')">
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
export default {
  name: 'eg1',
  components: {
    labelTop
  },
  data() {
    return {
      addVisible: true,     //添加框控制器
      updateVisible: true,  //修改框控制器
      expands: [],
      selection: [],        //选中的条目
      getRowKey(row) {      //
          return row.roleId;
      },
      page: {
        currentPage: 1,
        pageSize: 1,
        userName: '',
        total: 0
      },
      permission: {
        permissionId:[]
      },
      menuArr: [],
      rules:{
        name: { required: true, message: '姓名为必填项', trigger: 'blur'},
        userName: { required: true, message: '姓名为必填项', trigger: 'blur'},
        password: { required: true, message: '密码为必填项', trigger: 'blur'},
        gender: { required: true, message: '性别为必填项', trigger: 'blur'},
        phone: { required: true, message: '联系方式为必填项', trigger: 'blur'},
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
    this.data = this.$store.commit('treeMenu');
    let tree = JSON.parse(localStorage.getItem('tree'))
    console.log(tree);
    this.data = tree;
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
        this.permission.permissionId.push(obj.id);
        this.menuArr.push(obj.parentId);
        //   if( this.menuArr.indexOf(obj.parentId) == -1 ) {
        // }
      }else{
        // var needDeleteId = this.permission.permissionId.indexOf(obj.id)
        // this.permission.permissionId.splice(needDeleteId, 1);
        var i = 0,
            parentId = 0;
        this.permission.permissionId.find(a => {
          if(a == obj.id){
            this.menuArr.delete(obj.parentId);
            return ;
          }
        })
        console.log(i, parentId)
        this.permission.permissionId.delete(obj.id);
        // if()
      }
      // this.permission.permissionId = Array.from(new Set(this.permission.permissionId));
      console.log(obj);
      console.log(v);
      console.log(t);
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
    // 添加与修改
		addPermission(form, permission) {
			this.$refs[form].validate(valid => {
				if(valid) {
          console.log(permission)
          let menuId = Array.from(new Set(this.menuArr));
          this.permission.permissionId = this.permission.permissionId.concat()
          console.log(this.permission.permissionId)
          // if(this.updateVisible){ //账号添加、修改判别
          //   this.$store.dispatch('addRole', permission)
          //   .then(res => {
          //     console.log('addPermissionSuccess')
          //     this.addVisible = true;
          //     this.permission = {};
          //   })
          // }else{
          //   this.$store.dispatch('updateUser', permission)
          //   .then(res => {
          //     this.permission = {};
          //     this.updateVisible = true;
          //     // this.$store.dispatch('getUserListPage', this.page)
          //   })
          // }
				}else{
					return false;
				}
			})
    },
    deleteUser() {
      if(this.selection.length) {
        console.log(this.selection)
        let id = this.selection[0].userId;
        this.$store.dispatch('deleteUser', id)
        .then(res => {

        })
      }else{
         this.$notify.warning({
          title: '错误提示',
          message: '请至少选择一条信息'
        });
      }
    },
    updateUser() {
      if(this.selection.length == 1) {
        console.log(this.selection)
        this.updateVisible = false;
        this.user = this.selection[0];
        this.user.id = this.user.userId;
      }else{
         this.$notify.warning({
          title: '错误提示',
          message: '请先选择一条信息'
        });
      }
    },
    selectName() {
      this.$store.dispatch('getUserListPage', this.page);
    },
    
    cancle(form) {
      if(!this.updateVisible) {
        this.user = {};
        this.selection = [];
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