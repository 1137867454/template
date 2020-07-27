<template>
  <div class="height_100 eg1">
    <div class="buttonGroup" v-if="addVisible && updateVisible">
		<el-input size="small" v-model="page.userName"
      @keydown.enter.native="selectName" clearable
      @clear="selectName" placeholder="请输入用户名"
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
			{{$t('m.button.delete')}}</el-button> -->
      <labelTop :label-info="page"
      @sizeChange="sizeChange"
      @currentChange="currentChange"></labelTop>
	</div>
    <el-table v-if="addVisible && updateVisible"
    ref="multipleTable"
    
    :data="get_Userlist.records"
    tooltip-effect="dark"
    height="calc(100% - 46px)"
    style="width: 100%" :highlight-current-row="true"
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
    <el-table-column
      label="日期" prop="date"
      sortable
      width="">
      <template slot-scope="scope">{{ scope.row.createTime.slice(0,10) }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      >
    </el-table-column>
    <el-table-column
      prop="userName"
      label="用户名"
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
  shadow="always" style="height:96%;">
  <!-- <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div> -->
  <div slot="header" class="clearfix">
    <span v-text="addVisible ? '信息修改' : '账号添加' " style="color:#0c6">账号添加</span>
    <el-button style="float: right; padding: 3px 0" type="text">
      <i class="el-icon-turn-off"></i>
      操作按钮</el-button>
  </div>
  <el-form  style="margin-left:60px;"
        class="form refuseCopy" :rules="rules" ref="addAction"
        size="small" label-position="left"
        :model="user"
        label-width="80px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input clearable
            v-model="user.name"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio style="width:58px;"
            v-model="user.gender"
            label="1"
          >
            男
          </el-radio>
          <el-radio
            v-model="user.gender"
            label="2"
          >
            女
          </el-radio>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input clearable
            v-model="user.remark"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="用户名" prop="userName">
          <el-input clearable
            v-model="user.userName"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input clearable
            v-model="user.password"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>
          
        <el-form-item label="角色列表" prop="roles">
        <el-select class="input_260"
         v-model="user.roles" multiple placeholder="请选择">
          <el-option  
            v-for="item in get_RoleList.records"
            :key="item.roleId"
            :label="item.role"
            :value="item.roleId">
          </el-option>
        </el-select>
        </el-form-item>
        <!-- <el-form-item label="角色权限" prop="roleList">
        <el-select class="input_260"
         v-model="user.roleList" multiple placeholder="请选择">
          <el-option  
            v-for="item in get_RoleList.records"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </el-form-item> -->
        <!-- <el-form-item label-width="0">
          <el-upload ref="uploadAlbum"
            class="upload-demo"
            action="" style="width:280px;margin:-10px 0 10px;"
            :on-change="photoChange"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :auto-upload="false"
            list-type="picture">
            <el-button size="small" type="primary">图片上传</el-button>
            <div slot="tip" class="el-upload__tip" style="position:absolute;top:-16px;right:100px; ">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item> -->
        <el-form-item label="联系电话" prop="phone">
          <el-input @keydown.native.enter="sda('ruleForm', user)"
            v-model="user.phone" show-word-limit
            autocomplete="off" maxlength="11" clearable
            class="input_260" 
          />
        </el-form-item>
        <el-form-item label-width="0" style="">
          <el-button
            type="primary"
            @click="addAction('addAction', user)"
          >
            确 定
          </el-button>
          <el-button @click="cancle">
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
      getRowKey(row) {      //
          return row.userId;
      },
      page: {
        currentPage: 1,
        pageSize: 20,
        userName: '',
        total: 0
      },
      permissionArr: [],
      user: {},
      rules:{
        name: { required: true, message: '姓名为必填项', trigger: 'blur'},
        userName: { required: true, message: '姓名为必填项', trigger: 'blur'},
        password: { required: true, message: '密码为必填项', trigger: 'blur'},
        gender: { required: true, message: '性别为必填项', trigger: 'blur'},
        phone: { required: true, message: '联系方式为必填项', trigger: 'blur'},
      },
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
    this.$store.dispatch('getUserListPage', this.page);
    this.$store.dispatch('getRoleList', this.page);
    // this.$store.dispatch('getRoleList');
  },
  methods: {
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
        case 'add': this.tableInfo.addVisible = false; break;
        case 'delete': this.deleteAction(); break;
        case 'update': this.updateAction(); break;
        case 'select': this.selectName(); break;
      }
    },
    // 添加与修改
		addAction(form, user) {
			this.$refs[form].validate(valid => {
				if(valid) {
          console.log(user)
          if(this.updateVisible){ //账号添加、修改判别
            this.$store.dispatch('addUser', user)
            .then(res => {
              console.log('addUserSuccess')
              this.addVisible = true;
              this.user = {};
            })
          }else{
            this.$store.dispatch('updateUser', user)
            .then(res => {
              this.user = {};
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
    updateAction() {
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
    
    cancle() {
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
.input_260{
  width:260px;
}
</style>