<template>
  <div class="height_100 eg1">
    <div class="buttonGroup" v-if="addVisible && updateVisible">
		<el-input size="small" style="width:200px;margin-right:20px;"></el-input>
		<el-button size="small">
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
	</div>
    <!-- <div class="chest">
      <div class="heart left sided top"></div>
      <div class="heart center"></div>
      <div class="heart right sided"></div>
    </div> -->
    <el-table v-if="addVisible && updateVisible"
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
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
                  <span>{{ props.row.studentName }}</span>
                </el-form-item>
                <el-form-item label="年级ID">
                  <span>{{ props.row.gradeId }}</span>
                </el-form-item>
                <el-form-item label="班级ID">
                  <span>{{ props.row.classId }}</span>
                </el-form-item>
                <!-- <el-form-item label="内部班级ID">
                  <span>{{ props.row.internalClassId }}</span>
                </el-form-item> -->
              </el-form>
            </template>
          </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
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
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
  <el-form  style="margin-left:60px;"
        class="form refuseCopy" :rules="rules" ref="addUser"
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
          
        <el-form-item label="角色权限" prop="roleList">
        <el-select class="input_260"
         v-model="user.roleList" multiple placeholder="请选择">
          <el-option  
            v-for="item in get_RoleList.records"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </el-form-item>
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
            @click="addUser('addUser', user)"
          >
            确 定
          </el-button>
          <el-button @click="addVisible = true;updateVisible = true">
            取 消
          </el-button>
        </el-form-item>
      </el-form>
      </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'eg1',
  data() {
    return {
		addVisible: true,
    updateVisible: true,
    expands: [],
    selection: [],        //选中的条目
    getRowKey(row) {      //
        return row.id;
    },
    page: {
      currentPage: 1,
      pageSize: 50
    },
		user: {},
		rules:{
			name: { required: true, message: '姓名为必填项', trigger: 'blur'},
			userName: { required: true, message: '姓名为必填项', trigger: 'blur'},
			password: { required: true, message: '姓名为必填项', trigger: 'blur'},
			gender: { required: true, message: '性别为必填项', trigger: 'blur'},
			phone: { required: true, message: '性别为必填项', trigger: 'blur'},
		},
		tableData: [{
          id: 1,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 3,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 4,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 5,
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 6,
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 7,
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
    }
  },
  computed: {
    // get_activeIndex() {
    //   return this.$store.getters.get_activeIndex;
    // }
    get_RoleList() {
      return this.$store.getters.get_RoleList;
    }
  },
  mounted() {
    // this.$store.dispatch('getUserListPage');
    this.$store.dispatch('getRoleList');
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
		addUser(form, user) {
			this.$refs[form].validate(valid => {
				if(valid) {
          console.log(user)
          this.$store.dispatch('addUser', user)
				}else{
					return false;
				}
			})
    },
    updateUser(form) {
      if(this.selection.length == 1) {
        this.updateVisible = false;
      }else{
         this.$notify.warning({
          title: '错误提示',
          message: '请先选择一条信息'
        });
      }
    },
    deleteUser(form) {
      if(this.selection.length) {

      }else{
         this.$notify.error({
          title: '错误提示',
          message: '请至少选择一条信息'
        });
      }
    },
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