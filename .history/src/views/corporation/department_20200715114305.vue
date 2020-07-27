<template>
  <div class="height_100 department">
    <div class="buttonGroup" v-if="tableInfo.addVisible && tableInfo.updateVisible">
		<!-- <el-input size="small" v-model="page.roleName"
      @keydown.enter.native="selectName" clearable
      @clear="selectName" placeholder="请输入用户名"
    style="width:180px;margin-right:10px;"></el-input> -->
		<el-input size="small" v-model="page.nameOrMacId"
      @keydown.enter.native="selectName" clearable
      @clear="selectName" placeholder="输入设备名或mac地址"
    style="width:180px;margin-right:10px;"></el-input>
		<el-button @click="selectName" size="small">
			<i class="el-icon-search"></i>
		查询</el-button>
		<el-button type="success" @click="tableInfo.addVisible=false;" size="small">
			<i class="el-icon-circle-plus-outline"></i>
			添加</el-button>
		<el-button type="warning" @click="updateCorporation" size="small">
			<i class="el-icon-edit"></i>
			修改</el-button>
		<el-button type="danger" @click="deleteCorporation" size="small">
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
    <el-select @change="corporationChange"
      style="width:180px;" size="small"
       v-model="page.corpId" filterable
        placeholder="请选择部门所属公司">
    <el-option
      v-for="item in get_CorporationList.records"
      :key="item.id"
      :label="item.name"
      :value="item.id">
    </el-option>
  </el-select>
  {{page}}
    <!-- {{get_CorporationList.records}} -->
    <tables v-bind:tableInfo="tableInfo" @select="select" @selectAll="selectAll"></tables>
    <!-- {{tableInfo}} -->
    <!-- <el-table v-if="addVisible && updateVisible"
    ref="multipleTable"
    :data="get_corporationList.records"
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
              </el-form>
            </template>
          </el-table-column>
    <el-table-column
      prop="name"
      label="设备名"
      >
    </el-table-column>
    <el-table-column
      prop="macId"
      label="mac地址"
      >
    </el-table-column>
    <el-table-column
      prop="equipmentDesc"
      label="描述"
      show-overflow-tooltip>
    </el-table-column>
  </el-table> -->
  <!-- {{get_RoleList}} -->
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
  <el-form  style="margin-left:60px;"
        class="form refuseCopy" :rules="rules" ref="addAction"
        size="small" label-position="left"
        :model="corporation"
        label-width="80px"
      >
        <el-form-item label="公司名称" prop="name">
          <el-input clearable :autofocus="true"
            v-model="corporation.name"
           style="width:180px;"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input clearable
            v-model="corporation.address"
            class="input_260"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="电话号码" prop="phone">
          <el-input clearable maxlength="11"
            v-model="corporation.phone"
            class="input_260" show-word-limit
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="负责人" prop="principal">
          <el-input clearable
            v-model="corporation.principal"
            class="input_260"
            autocomplete="off"
            @keydown.native.enter="addAction('addAction', corporation)"
          />
        </el-form-item>
        <el-form-item label-width="0" style="">
          <el-button
            type="primary"
            @click="addAction('addAction', corporation)"
          >
            确 定
          </el-button>
          <el-button @click="cancle('addAction')">
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
        // delete: 'deletecorporation',
        get: 'get_DepartmentList', //vuex中获取当前table列表的getter函数
        parameter: {    //el-table 循环展示的属性列表
          'name': '公司',
          'principal': '负责人',
          'phone': '电话',
          'address': '地址',
          // 'equipmentDesc': '设备描述'
        }
      },
      page: { 
        currentPage: 1,
        pageSize: 20,
        name: '',
        total: 0,
        corpId: ''
        // nameOrMacId: ''
      },
      corporation: {},
      rules:{ // 过滤规则
        name: { required: true, message: '公司名称为必填项', trigger: 'blur'},
        address: { required: true, message: '公司地址为必填项', trigger: 'blur'},
        principal: { required: true, message: '负责人为必填项', trigger: 'blur'},
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
    this.$store.dispatch('getCorporationList',this.page);

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
      this.$store.dispatch('getDepartmentList', this.page);
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
		addAction(form, corporation) {
			this.$refs[form].validate(valid => {
				if(valid) {
          console.log(corporation)
          if(this.tableInfo.updateVisible){ //账号添加、修改判别
            this.$store.dispatch('addCorporation', corporation)
            .then(res => {
              console.log('addActionSuccess')
              this.tableInfo.addVisible = true;
              this.corporation = {};
            })
          }else{
            this.$store.dispatch('updateCorporation', corporation)
            .then(res => {
              this.selection = [];
              this.corporation = {};
              this.tableInfo.updateVisible = true;
              // this.$store.dispatch('getUserListPage', this.page)
            })
          }
				}else{
					return false;
				}
			})
    },
    deleteCorporation() { //删除公司
      if(this.selection.length) {
        console.log(this.selection)
        // let id = this.selection[0].userId;
        let arr =[];
        this.selection.forEach(v => {
          arr.push(v.id * 1);  
        })
          console.log(arr);
        this.$store.dispatch('deleteCorporation', arr)
        .then(res => {

        })
      }else{
         this.$notify.warning({
          title: '错误提示',
          message: '请至少选择一条信息'
        });
      }
    },
    updateCorporation() {
      if(this.selection.length == 1) {
        console.log(this.selection)
        this.tableInfo.updateVisible = false;
        this.corporation = this.selection[0];
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
      this.$store.dispatch('getCorporationList', this.page);
    },
    
    cancle(form) {
      if(!this.tableInfo.updateVisible) {
        this.corporation = {};
        this.selection = [];
      }
      this.tableInfo.addVisible = true;this.tableInfo.updateVisible = true
      
    }
	}
}
</script>

<style scoped>
.department {
  margin:0 8px;	
  text-align: left;

	/* background:#ffa5a5; */
}
.input_260{
  width:260px;
}
</style>