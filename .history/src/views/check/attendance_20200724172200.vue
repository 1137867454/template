<template>
  <div class="height_100 attendance">
    <div class="buttonGroup" v-if="tableInfo.addVisible && tableInfo.updateVisible">
  <el-input size="small" v-model="page.corporationName"
      @keydown.enter.native="selectName" clearable
      @clear="selectName" :placeholder="$t('m.placeholder.corporation')"
    style="width:170px;margin-right:10px;"></el-input>
  <el-input size="small" v-model="page.departmentName"
      @keydown.enter.native="selectName" clearable
      @clear="selectName" :placeholder="$t('m.placeholder.department')"
    style="width:170px;margin-right:10px;"></el-input>
  <!-- {{permissionArr}} -->
  <span style="display:inline-block;margin-right:10px;" v-show="permissionArr.includes('view')">
		<el-input size="small" v-model="page.name"
      @keydown.enter.native="selectName" clearable
      @clear="selectName" :placeholder="$t('m.placeholder.name')"
    style="width:170px;"></el-input>
  </span>
    <el-date-picker size="small"
      v-model="date" @change="dateChange"
      style="width:300px;margin-right:10px;" format="yyyy-MM-dd HH:mm"
      value-format="yyyy-MM-dd HH:mm:ss"
      type="datetimerange"
      range-separator="至"
      :start-placeholder="$t('m.placeholder.startTime')"
      :end-placeholder="$t('m.placeholder.endTime')">
    </el-date-picker>
  <buttonList v-bind:permissionArr="permissionArr" @buttonEvents="buttonEvents"></buttonList>
		<el-button style="margin-left:10px" type="success" @click="downloadExcel" size="small">
			<i class="el-icon-download"></i>
			{{$t('m.button.export')}}</el-button>
		<!-- <el-button @click="selectName" size="small">
			<i class="el-icon-search"></i>
		{{$t('m.button.select')}}</el-button>
		<el-button type="warning" v-show="permissionArr.includes('upd')" @click="updateAction" size="small">
			<i class="el-icon-edit"></i>
			{{$t('m.button.update')}}</el-button>
		<el-button type="danger" v-show="permissionArr.includes('del')" @click="deleteAction" size="small">
			<i class="el-icon-delete"></i>
			{{$t('m.button.delete')}}</el-button> -->
	</div>
    <tables v-show="permissionArr.includes('view')" v-bind:tableInfo="tableInfo" @select="select" @selectAll="selectAll"></tables>
    <labelTop v-if="tableInfo.addVisible && tableInfo.updateVisible" :label-info="page"
      @sizeChange="sizeChange"
      @currentChange="currentChange"></labelTop>
  <el-card v-show="!tableInfo.addVisible || !tableInfo.updateVisible" class="box-card"
  shadow="always" style="height:99%;">
  <div slot="header" class="clearfix">
    <span class="cardHeader" v-text="tableInfo.addVisible ? $t('m.header.infoUpdate') : '考勤添加'"></span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">
      <i class="el-icon-turn-off"></i>
      操作按钮</el-button> -->
  </div>
  <el-form style="margin-left:60px;"
        class="form refuseCopy" :rules="rules" ref="addAction"
        size="small" label-position="left"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="考勤名称" prop="name">
          <el-input clearable :autofocus="true"
            v-model="form.name"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="部门名称" prop="departmentName">
          <el-input clearable :autofocus="true"
            v-model="form.departmentName"
            class="input_260"
            autocomplete="off"
          />
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
        <el-form-item label="备注" prop="departmentDesc">
          <el-input clearable
            v-model="form.departmentDesc"
            class="input_260"
            autocomplete="off"
            @keydown.native.enter="addAction('addAction', form)"
          />
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
      permissionArr: [],
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
        get: 'get_AttendanceList', //vuex中获取当前table列表的getter函数
        parameter: {    //el-table 循环展示的属性列表
          // 'principal': '负责人',
          // 'phone': '电话',
          // 'address': '地址',
          'name': '姓名',
          'corporationName': '公司名称',
          'departmentName': '部门名称',
          'deviceName': '设备名称',
          'checkingType': '考勤方式',
          'temperature': '温度',
          'attendanceTime': '考勤时间',
          'checkingDesc': '备注',
          // 'cpuId': 'cpuId',

          // corporationId: 
        }
      },
      date: '',
      page: { 
        currentPage: 1,
        pageSize: 20,
        total: 0,
        name: '',
        // corpId: '',
        corporationName: '',
        departmentName: '',
        startTime: '',
        endTime: ''
      },
      form: {},
      rules:{ // 过滤规则
        departmentName: { required: true, message: '部门名称为必填项', trigger: 'blur'},
        corporationId: { required: true, message: '隶属公司为必填项', trigger: 'blur'},
        // departmentDesc: { required: true, message: '备注为必填项', trigger: 'blur'},
        phone: { required: true, message: '联系方式为必填项', trigger: 'blur'}
      }
    }
  },
  computed: {
    ...mapGetters([
      'get_CorporationList',
      // 'get_AttendanceList'
      'get_DepartmentList'
      // 'get_Userlist'
    ]),
    // getCatalogue() {
    //   return JSON.parse(localStorage.getItem('catalogue'));
    // }
  },
  mounted() {
    this.permissionArr = this.$route.meta.arr;
    this.$store.dispatch('getAttendanceList', this.page);
    // this.$store.dispatch('getDepartmentList', this.page);
    this.$store.dispatch('getCorporationList',this.page);
    // this.$notify.info({
    //   title: '通知',
    //   message: '请先选择公司'
    // });
    // console.log(this.get_DepartmentList)
    // let records = this.get_DepartmentList.records;
    // if(records && records.length) {
    //   this.page.corpId = records[0].corporationId;
    // }
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
    dateChange(v) {
      console.log(v);
      if(v) {
        this.page.startTime = v[0];
        this.page.endTime = v[1];
      }else{
         this.page.startTime = '';
          this.page.endTime = '';
      }
      this.selectName();
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
    buttonEvents(operation) {
      switch(operation) {
        case 'add': this.tableInfo.addVisible = false; break;
        case 'delete': this.deleteAction(); break;
        case 'update': this.updateAction(); break;
        case 'select': this.selectName(); break;
      }
    },
    // 考勤记录导出
    downloadExcel() {
      let page = {...this.page};
      delete page.pageSize;
      delete page.currentPage;
      delete page.total;
      this.$store.dispatch('downloadExcel', this.page)
      .then(res => {
        this.$message.success('导出成功')
      }).catch(err => {
        this.$message.error('导出失败')
      })
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
        this.$store.dispatch('deleteAttendance', arr)
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
      this.$store.dispatch('getAttendanceList', this.page);
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
.attendance {
  margin:0 8px;	
  text-align: left;

	/* background:#ffa5a5; */
}
.input_260{
  width:260px;
}
</style>