<template>
  <div class="height_100 department">
    <div class="buttonGroup" v-if="tableInfo.addVisible && tableInfo.updateVisible">
		<!-- <el-input size="small" v-model="page.roleName"
      @keydown.enter.native="selectName" clearable
      @clear="selectName" placeholder="请输入用户名"
    style="width:180px;margin-right:10px;"></el-input> -->
    <el-select @change="corporationChange"
      style="width:180px;margin-right:10px;" size="small"
      :autofocus="true"
       v-model="page.corpId" filterable
        placeholder="请选择部门所属公司">
    <el-option
      v-for="item in get_CorporationList.records"
      :key="item.id"
      :label="item.name"
      :value="item.id">
    </el-option>
  </el-select>
    <el-select @change="departmentChange"
      style="width:180px;margin-right:10px;" size="small"
      :autofocus="true"
       v-model="page.departmentId" filterable
        placeholder="请选择部门所属公司">
    <el-option
      v-for="item in department"
      :key="item.id"
      :label="item.departmentName"
      :value="item.id">
    </el-option>
  </el-select>
		<el-input size="small" v-model="page.name"
      @keydown.enter.native="selectName" clearable
      @clear="selectName" placeholder="部门名称查询"
    style="width:180px;margin-right:10px;"></el-input>
		<el-button @click="selectName" size="small">
			<i class="el-icon-search"></i>
		查询</el-button>
		<el-button type="success" @click="tableInfo.addVisible=false;" size="small">
			<i class="el-icon-circle-plus-outline"></i>
			添加</el-button>
		<el-button type="warning" @click="updateAction" size="small">
			<i class="el-icon-edit"></i>
			修改</el-button>
		<el-button type="danger" @click="deleteAction" size="small">
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
    
  <!-- {{page}} -->
    <!-- {{get_CorporationList.records}} -->
    <tables v-bind:tableInfo="tableInfo" @select="select" @selectAll="selectAll"></tables>
    <!-- {{tableInfo}} -->
  <el-card v-show="!tableInfo.addVisible || !tableInfo.updateVisible" class="box-card"
  shadow="always" style="height:99%;">
  <!-- <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div> -->
  <div slot="header" class="clearfix">
    <span v-text="tableInfo.addVisible ? '信息修改' : '设备添加' " style="color:#0c6">账号添加</span>
    <el-button style="float: right; padding: 3px 0" type="text">
      <i class="el-icon-turn-off"></i>
      操作按钮</el-button>
  </div>
  <el-form label-width="82px" style="margin-left:60px;"
        class="form refuseCopy" :rules="rules" ref="addAction"
        size="small" label-position="left"
        :model="form"
      >
         <!-- <el-form-item label="职业" prop="delivery">
          <el-input v-model="form.delivery"></el-input>
        </el-form-item> -->
        <el-form-item label="工号" prop="departmentName">
          <el-input clearable :autofocus="true"
            v-model="form.jobNumber"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input clearable :autofocus="true"
            v-model="form.name"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="所属公司" prop="corporationId">
         <el-select
            class="input_260" size="small"
            v-model="form.corporationId" filterable
              placeholder="请选择部门所属公司">
          <el-option
            v-for="item in get_CorporationList.records"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="职业" prop="post">
          <el-input clearable :autofocus="true"
            v-model="form.post"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="隶属部门" prop="departmentId">
         <el-select @change="departmentChange"
          class="input_260" size="small"
      :autofocus="true"
       v-model="form.departmentId" filterable
        placeholder="请选择员工隶属部门">
    <el-option
      v-for="item in department"
      :key="item.id"
      :label="item.departmentName"
      :value="item.id">
    </el-option>
  </el-select>
        </el-form-item>
        
        <el-form-item label="备注" prop="personalDesc">
          <el-input clearable :autofocus="true"
            v-model="form.personalDesc"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>

        <el-form-item label="紧急联系人" prop="patriarch">
          <el-input clearable :autofocus="true"
            v-model="form.patriarch"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="联系方式" prop="phone">
          <el-input clearable :autofocus="true"
            v-model="form.phone" maxlength="11"
            class="input_260" show-word-limit
            autocomplete="off"
          />
        </el-form-item>
        
        <el-form-item label="备注" prop="departmentDesc">
          <el-input clearable
            v-model="form.departmentDesc"
            class="input_260"
            autocomplete="off"
            @keydown.native.enter="addAction('addAction', form)"
          />
        </el-form-item>
        <el-form-item style="position:absolute;">
          <el-upload
            class="upload-demo"
            action="#"
            :file-list="fileList"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label-width="0" style="">
          <el-button
            type="primary"
            @click="addAction('addAction', form)"
          >
            确 定
          </el-button>
          <el-button @click="cancel('addAction')">
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
import tables from '../../components/table'
export default {
  name: 'manage',
  components: {
    labelTop,
    tables
  },
  data() {
    return {
      addVisible: true,     //添加框控制器
      updateVisible: true,  //修改框控制器
      expands: [],
      selection: [],        //选中的条目
      // getRowKey(row) {      //
      //     return row.id;
      // },
      tableInfo: {  //当前组件向子组件table 传值
        addVisible: true,     //添加框控制器
        updateVisible: true,  //修改框控制器
        currentPage: 1,
        pageSize: 20,
        // add: 'addAction',
        // update: 'updatecorporation',
        // delete: 'deleteAction',
        get: 'get_StaffList', //vuex中获取当前table列表的getter函数
        parameter: {    //el-table 循环展示的属性列表
          // 'principal': '负责人',
          // 'phone': '电话',
          // 'address': '地址',
          'departmentName': '部门名称',
          'anotherName': '别名',
          'departmentDesc': '备注',
          // corporationId: 
        }
      },
      page: { 
        currentPage: 1,
        pageSize: 20,
        name: '',
        total: 0,
        corpId: '',
        departmentId: '',
        // nameOrMacId: ''
      },
      fileList: [],
      form: {},
      department: [],
      rules:{ // 过滤规则
        departmentName: { required: true, message: '部门名称为必填项', trigger: 'blur'},
        corporationId: { required: true, message: '隶属公司为必填项', trigger: 'blur'},
        departmentDesc: { required: true, message: '备注为必填项', trigger: 'blur'},
        phone: { required: true, message: '联系方式为必填项', trigger: 'blur'}
      }
    }
  },
  computed: {
    ...mapGetters([
      'get_CorporationList',
      // 'get_Userlist'
    ]),
    // getCatalogue() {
    //   return JSON.parse(localStorage.getItem('catalogue'));
    // }
  },
  mounted() {
    // this.$store.dispatch('getUserListPage', this.page);
    this.$store.dispatch('getCorporationList',this.page)
    // this.$store.dispatch('getStaffList',this.page);
    this.$notify.info({
      title: '通知',
      message: '请先选择公司'
    })
    // this.$store.dispatch('getRoleList');
  },
  methods: {
    select (selection) { // 单选    子组件table => 父组件传值
      this.selection = selection;
      console.log(this.selection);
    },
    selectAll (selection) { // 多选 子组件table => 父组件传值
      // console.log(selection)
      this.selection = selection
      console.log(this.selection)
    },
    dblclick(row, cloumn, event)  {
      // console.log(row)
      // if (this.expands.includes(row.id)) {
      //   this.expands = this.expands.filter(val => val !== row.id);
      // } else {
      //   this.expands.splice(0,1,row.id)
      // }
    },
     //翻页后序号连续
    // table_index(index){
    //     return (this.page.currentPage-1) * this.page.pageSize + index + 1
    // },
    corporationChange() {
      this.$store.dispatch('getDepartmentList', this.page)
      .then(res => {
        console.log(res.records);
        this.department = res.records;
      })
      console.log(this.page)
    },
    departmentChange() {
      this.$store.dispatch('getStaffList', this.page)
      // .then(res => {
      //   console.log(res.records);
      //   this.department = res.records;
      // })
      console.log(this.page)
    },
    sizeChange(val) {
      this.page.pageSize = val;
      this.tableInfo.pageSize = val;
      this.selectName()
      console.log('sizeChange: ' + val)
    },
    currentChange (val) {
      console.log('currentChage ' + val)
      this.page.currentPage = val;
      this.tableInfo.currentPage = val;
      this.selectName()
    },
    // 添加与修改
		addAction(formRef, form) {
			this.$refs[formRef].validate(valid => {
				if(valid) {
          console.log(form)
          if(this.tableInfo.updateVisible){ //账号添加、修改判别
            this.$store.dispatch('addDepartment', form)
            .then(res => {
              console.log('addActionSuccess')
              this.tableInfo.addVisible = true;
              this.form = {};
            })
          }else{
            this.$store.dispatch('updateDepartment', form)
            .then(res => {
              this.selection = [];
              this.form = {};
              this.tableInfo.updateVisible = true;
              // this.$store.dispatch('getUserListPage', this.page)
            })
          }
				}else{
					return false;
				}
			})
    },
    deleteAction() { //删除公司
      if(this.selection.length) {
        console.log(this.selection)
        // let id = this.selection[0].userId;
        let arr =[];
        this.selection.forEach(v => {
          arr.push(v.id * 1);  
        })
          console.log(arr);
        this.$store.dispatch('deleteDepartment', arr)
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
        this.tableInfo.updateVisible = false;
        this.form = JSON.parse(JSON.stringify(this.selection[0]));
        console.log(this.selection)
        // this.corporation.id = this.user.id;
      }else{
         this.$notify.warning({
          title: '错误提示',
          message: '请先选择一条信息'
        });
      }
    },
    selectName() {
      this.$store.dispatch('getDepartmentList', this.page);
    },
    
    cancel(form) {
      if(!this.tableInfo.updateVisible) {
        this.form = {};
        this.selection = [];
      }
      this.tableInfo.addVisible = true;this.tableInfo.updateVisible = true
      
    }
	}
}
</script>

<style>
.department {
  margin:0 8px;	
  text-align: left;

	/* background:#ffa5a5; */
}
.input_260{
  width:260px;
}
label{
  position:relative;
}
.el-form-item__label:before{
  font-size:16px;
  position:absolute;
  left:-10px;
}
</style>