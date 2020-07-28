<template>
  <div class="height_100 leader">
    <div class="buttonGroup" v-if="tableInfo.addVisible && tableInfo.updateVisible">
		<!-- <el-input size="small" v-model="page.roleName"
      @keydown.enter.native="selectName" clearable
      @clear="selectName" placeholder="请输入用户名"
    style="width:180px;margin-right:10px;"></el-input> -->
    <el-select @change="corporationChange"
      style="width:180px;margin-right:10px;" size="small"
      :autofocus="true" clearable
       v-model="page.corpId" filterable
      :placeholder="$t('m.placeholder.corporation')">
    <el-option
      v-for="item in get_CorporationList.records"
      :key="item.id"
      :label="item.name"
      :value="item.id">
    </el-option>
  </el-select>
    <el-select @change="departmentChange" @clear="selectName"
      style="width:180px;margin-right:10px;" size="small"
      :autofocus="true" clearable
      v-model="page.departmentId" filterable
      :placeholder="$t('m.placeholder.department')">
    <el-option
      v-for="item in department"
      :key="item.id"
      :label="item.departmentName"
      :value="item.id">
    </el-option>
  </el-select>
		<el-input size="small" v-model="page.nameOrPhone"
      @keydown.enter.native="selectName" clearable
      @clear="selectName" :placeholder="$t('m.placeholder.nameOrPhone')"
    style="width:190px;margin-right:10px;"></el-input>
    <buttonList v-bind:permissionArr="permissionArr" @buttonEvents="buttonEvents"></buttonList>
		<!-- <el-button @click="selectName" size="small">
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
      @currentChange="currentChange"></labelTop> -->
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
    <labelTop v-if="tableInfo.addVisible && tableInfo.updateVisible" :label-info="page"
      @sizeChange="sizeChange"
      @currentChange="currentChange"></labelTop>
    <!-- {{tableInfo}} -->
  <el-card v-show="!tableInfo.addVisible || !tableInfo.updateVisible" class="box-card"
  shadow="always" style="height:99%;">
  <!-- <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div> -->
  <div slot="header" class="clearfix">
    <span class="cardHeader" v-text="tableInfo.addVisible ? $t('m.header.leaderAdd') : $t('m.header.leaderAdd')"></span>
    <el-switch v-if="!tableInfo.addVisible" style="float:right;font-size:12px !important;"
      active-color="#13ce66"
      inactive-color=""
      v-model="switchStatus"
      :active-text="$t('m.header.addContinue')"
      >
    </el-switch>
  </div>
  <el-form label-width="82px" style="margin-left:60px;"
        class="form refuseCopy" :rules="rules" ref="addAction"
        size="small" label-position="left"
        :model="form"
      >
         <!-- <el-form-item label="职业" prop="delivery">
          <el-input v-model="form.delivery"></el-input>
        </el-form-item> -->
        <el-form-item :label="$t('m.label.jobNumber')" prop="jobNumber">
          <el-input clearable :autofocus="true"
            v-model="form.jobNumber"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item :label="$t('m.label.name')" prop="name">
          <el-input clearable :autofocus="true"
            v-model="form.name"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item :label="$t('m.label.gender')" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio :label="$t('m.label.male')"></el-radio>
          <el-radio :label="$t('m.label.female')"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="$t('m.label.company')" prop="corporationId">
         <el-select
            class="input_260" size="small"
            v-model="form.corporationId" filterable
            @change="formChange"
            :placeholder="$t('m.placeholder.corporation2')">
          <el-option
            v-for="item in get_CorporationList.records"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
        </el-form-item>
        <el-form-item :label="$t('m.label.department')" prop="departmentId">
         <el-select clearable
          class="input_260" size="small"
              :autofocus="true"
              v-model="form.departmentId" filterable
                :placeholder="$t('m.placeholder.department2')">
            <el-option
              v-for="item in departmentList"
              :key="item.id"
              :label="item.departmentName"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('m.label.job')" prop="post">
          <el-input clearable :autofocus="true"
            v-model="form.post"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>
        
        
        <el-form-item :label="$t('m.label.description')" prop="leadPersonalDesc">
          <el-input clearable :autofocus="true"
            v-model="form.leadPersonalDesc"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>

        <!-- <el-form-item label="紧急联系人" prop="patriarch">
          <el-input clearable :autofocus="true"
            v-model="form.patriarch"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item> -->
        <el-form-item :label="$t('m.label.phone')" prop="phone">
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
            <el-button size="small" type="primary">{{$t('m.label.uploadImg')}}</el-button>
            <div slot="tip" class="el-upload__tip" style="width:340px;font-size:14px;">{{$t('m.label.uploadMessage')}}</div>
          </el-upload>
          <!-- {{form.pictureUrl}} -->
          <div  v-show="form.pictureUrl">
            <p style="transition: all 0.5s linear;color:#42b9a0;font-size:13px;margin-top:20px;">当前照片</p>
            <img class="originalPicture" :src="form.pictureUrl">
          </div>
        </el-form-item>
        <el-form-item label="" >
          <el-button
            type="primary"
            @click="addAction('addAction', form)"
          >
            {{$t('m.button.confirm')}}
          </el-button>
          <el-button type="danger" @click="cancel">
            {{$t('m.button.cancel')}}
          </el-button>
        </el-form-item>
      </el-form>
      </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import labelTop from '../../components/page/label'
import tables from '../../components/table/table'
import buttonList from '../../components/table/button'
export default {
  name: 'manage',
  components: {
    labelTop,
    tables,
    buttonList
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
        get: 'get_LeaderList', //vuex中获取当前table列表的getter函数
        parameter: {    //el-table 循环展示的属性列表
          jobNumber: '工号',
          name: '姓名',
          sex: '性别',
          post: '职业',
          phone: '联系方式',
          // patriarch: '紧急联系人',
          'leadPersonalDesc': '备注',
        }
      },
      page: { 
        currentPage: 1,
        pageSize: 20,
        name: '',
        total: 0,
        corpId: '',
        corporationName: '',
        departmentId: '',
        nameOrPhone: ''
      },
      permission: [],
      permissionArr: [],
      header: {
        Authorization: localStorage.getItem('token')
      },
      fileList: [],
      switchStatus: false,
      form: {},
      department: [],
      departmentList: [],
      // rules:{ // 过滤规则
      //   jobNumber: { required: true, message: '工号为必填项', trigger: 'blur'},
      //   name: { required: true, message: '姓名为必填项', trigger: 'blur'},
      //   sex: { required: true, message: '性别为必填项', trigger: 'blur'},
      //   corporationId: { required: true, message: '隶属公司为必填项', trigger: 'blur'},
      //   departmentId: { required: true, message: '所属部门为必填项', trigger: 'blur'},
      //   // leadPersonalDesc: { required: true, message: '备注为必填项', trigger: 'blur'},
      //   // phone: { required: true, message: '联系方式为必填项', trigger: 'blur'}
      // }
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
    this.$store.dispatch('getLeaderList', this.page);
    this.$store.dispatch('getCorporationList', {...this.page})
    this.permissionArr = this.$route.meta.arr;
    // this.$store.dispatch('getLeaderList',this.page);
    // this.$notify.info({
    //   title: '通知',
    //   message: '请先选择公司'
    // })
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
      console.log(id)
      this.page.corpId = id;
      this.$store.dispatch('getLeaderList', this.page)
      if(!id) {
        this.page.departmentId = '';
        this.department = [];
        // this.form.corporationId = '';
      }else{
        // this.form.corporationId = id;
        // this.form.departmentId = '';
        // this.page.cropId = id;
        this.page.departmentId = '';
        this.$store.dispatch('getLeaderList', this.page)
        this.$store.dispatch('getDepartmentList', this.page)
        .then(res => {
          console.log(res.records);
          this.department = res.records;
          // this.form.departmentId = '';
        })
      }
    },
    departmentChange(id) {
      // this.form.departmentId = id;
      // this.page.departmentId = id;
      this.$store.dispatch('getLeaderList', this.page)
      console.log(this.page)
    },
    formChange(id) {
      console.log(id);
      let page = {...this.page};
      page.corpId = id;
      delete this.form.departmentId;
      this.$store.dispatch('getDepartmentList', page)
      .then(res => {
        this.departmentList = res.records;
      })
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
    buttonEvents(operation) {
      switch(operation) {
        case 'add': this.tableInfo.addVisible = false; break;
        case 'delete': this.deleteAction(); break;
        case 'update': this.updateAction(); break;
        case 'select': this.selectName(); break;
      }
    },
    // 添加与修改行为
		addAction(formRef, form) {
			this.$refs[formRef].validate(valid => {
				if(valid) {
          console.log(form)
          if(this.tableInfo.updateVisible){ //账号添加、修改判别
            this.$store.dispatch('addLeader', form)
            .then(res => {
              console.log('addActionSuccess')
              if(!this.switchStatus) {
                this.tableInfo.addVisible = true;
              }
              this.$store.dispatch('getLeaderList', this.page);
              this.fileList = [];
              this.form = {};
            })
          }else{
            delete form.pictureUrl;
            this.$store.dispatch('updateLeader', form)
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
        let arr = [];
        this.selection.forEach(v => {
          arr.push(v.id * 1);  
        })
          console.log(arr);
        this.$store.dispatch('deleteLeader', arr)
        .then(res => {
          // console.log('0000')
          // if(this.selection.pictureId){
          //   let picture = {
          //     pictureId: this.selection.pictureId,
          //     url: ''
          //   };
          //   console.log(picture)
          //   this.$store.dispatch('delPicture', picture)
          // }
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
      console.log(this.page)
      this.$store.dispatch('getLeaderList', this.page);
    },
    
    cancel() {
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
.leader {
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
  
  max-width:260px;
  height:200px;
  border-radius:10px;
  padding:10px;
  box-shadow: 0 0 10px #999;
}
</style>