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
        <el-form-item label="工号" prop="jobNumber">
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
        <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="所属公司" prop="corporationId">
         <el-select
            class="input_260" size="small"
            v-model="form.corporationId" filterable
            @change="corporationChange"
            placeholder="请选择部门所属公司">
          <el-option
            v-for="item in get_CorporationList.records"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
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
        <el-form-item label="职业" prop="post">
          <el-input clearable :autofocus="true"
            v-model="form.post"
            class="input_260"
            autocomplete="off"
          />
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
            autocomplete="off" @keydown.native.enter="addAction('addAction', form)"
          />
        </el-form-item>
        
        <el-form-item style="position:absolute;top:80px;left:400px;">
          <el-upload class="input_260"
            action="http://192.168.1.238:8080/media/uploadImage"
            :headers="header"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :before-upload="beforeUpload"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :on-exceed="uploadExceed"
            :limit="1" accept="image/png,image/jpg,image/jpeg"
            list-type="picture">
            <el-button size="small" type="primary">图片上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <!-- {{form.pictureUrl}} -->
          <div  v-show="form.pictureUrl">
            <p style="color:#42b9a0;font-size:13px;margin-top:20px;">当前照片</p>
            <img class="originalPicture" :src="form.pictureUrl">
          </div>
        </el-form-item>
        <el-form-item label="">
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
          jobNumber: '工号',
          name: '姓名',
          phone: '电话',
          sex: '性别',
          post: '职业',
          // 'principal': '负责人',
          patriarch: '紧急联系人',
          'personalDesc': '备注',
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
        nameOrPhone: ''
      },
      header: {
        Authorization: localStorage.getItem('token')
      },
      fileList: [],
      form: {},
      department: [],
      rules:{ // 过滤规则
        jobNumber: { required: true, message: '工号为必填项', trigger: 'blur'},
        name: { required: true, message: '姓名为必填项', trigger: 'blur'},
        sex: { required: true, message: '性别为必填项', trigger: 'blur'},
        corporationId: { required: true, message: '隶属公司为必填项', trigger: 'blur'},
        departmentId: { required: true, message: '所属部门为必填项', trigger: 'blur'},
        personalDesc: { required: true, message: '备注为必填项', trigger: 'blur'},
        // phone: { required: true, message: '联系方式为必填项', trigger: 'blur'}
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
    this.$store.dispatch('getCorporationList', {...this.page})
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
    corporationChange(id) {
      this.page.corpId = id;
      this.$store.dispatch('getDepartmentList', {...this.page})
      .then(res => {
        console.log(res.records);
        this.department = res.records;
        this.form.corporationId = id;
        // this.form.departmentId = 
      })
      console.log(this.page)
    },
    departmentChange(id) {
      this.form.departmentId = id;
      this.page.departmentId = id;
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
    handleRemove(file, fileList) {
      console.log('handleRemove')
      console.log(file, fileList);
      console.log(this.form);
      this.fileList = [];
      if(this.form.pictureId){
        this.$store.dispatch('delPicture', this.form);
        this.form.pictureId = '';
      }
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeUpload(file) {
      var testmsg=/^image\/(jpeg|png|jpg)$/.test(file.type);
      const isLt4M = file.size / 1024/1024 <=4;//图片大小不超过2MB
      if (!testmsg) {
        this.$message.error('上传图片格式不对!');
        return ;
      }
      if(!isLt4M) {
        this.$message.error('上传图片大小不能超过 4M!');
        return ;
      }
      return testmsg  && isLt4M;
    },
    uploadSuccess(res, file, fileList) { //上传图片成功的回调(UI内置)
      console.log(res);
      this.form.pictureId = res.data;
      console.log(file)
      console.log(fileList);
      if(!res.code){
        this.$message.error('图片上传失败');
        this.fileList = [];
      }
    },
    uploadError(error, file, fileList) { //上传图片失败的回调(UI内置)
      this.$message.error('图片上传失败')
      fileList = []
    },
    uploadExceed(file, fileList) { //图片上传超出数量限制
      this.$message.error('请先删除之前上传的图片')
    },
    // 添加与修改行为
		addAction(formRef, form) {
			this.$refs[formRef].validate(valid => {
				if(valid) {
          console.log(form)
          if(this.tableInfo.updateVisible){ //账号添加、修改判别
            this.$store.dispatch('addStaff', form)
            .then(res => {
              console.log('addActionSuccess')
              this.tableInfo.addVisible = true;
              this.page.corpId = form.corporationId
              this.page.departmentId = form.departmentId;
              this.$store.dispatch('getStaffList', this.page);
              this.fileList = [];
              this.form = {};
            })
          }else{
            delete form.pictureUrl;
            this.$store.dispatch('updateStaff', form)
            .then(res => {
              this.selection = [];
              this.form = {};
              this.fileList = [];
              this.tableInfo.updateVisible = true;
              // this.$store.dispatch('getUserListPage', this.page)
            })
          }
				}else{
					return false;
				}
			})
    },
    deleteAction() { //删除行为
      if(this.selection.length) {
        console.log(this.selection)
        // let id = this.selection[0].userId;
        let arr =[];
        this.selection.forEach(v => {
          arr.push(v.id * 1);  
        })
          console.log(arr);
        this.$store.dispatch('deleteStaff', arr)
        .then(res => {
          if(this.selection.pictureId){
            let picture = {
              pictureId: this.selection.pictureId,
              url: ''
            };
            this.$store.dispatch('delPicture', picture)
          }
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
      }else{
        this.handleRemove();
      }
      this.tableInfo.addVisible = true;
      this.tableInfo.updateVisible = true
      
    }
	}
}
</script>

<style>
.department {
  margin:0 8px;	
  text-align: left;
  position:relative;
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
.originalPicture{
  transition: all 0.5s linear;
  max-width:260px;
  height:200px;
  border-radius:10px;
  padding:10px;
  box-shadow: 0 0 10px #999;
}
</style>