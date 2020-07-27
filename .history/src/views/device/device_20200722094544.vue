<template>
  <div class="height_100 eg1">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import labelTop from '../../components/page/label'
import tables from '../../components/table/table'
import buttonList from '../../components/table/button'
export default {
  name: 'eg1',
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
      getRowKey(row) {      //隐藏栏id设置(不能唯一)
          return row.id;
      },
      permissionArr: [],
      tableInfo: {
        addVisible: true,     //添加框控制器
        updateVisible: true,  //修改框控制器
        currentPage: 1,
        pageSize: 20,
        // add: 'addAction',
        // update: 'updateDevice',
        // delete: 'deleteAction',
        get: 'get_DeviceList',
        parameter: {
          'name': '设备名',
          'macId': 'mac地址',
          'equipmentDesc': '设备描述'
        }
      },
      page: {
        currentPage: 1,
        pageSize: 20,
        roleName: '',
        total: 0,
        nameOrMacId: ''
      },
      device: {},
      rules:{
        name: { required: true, message: '设备名称为必填项', trigger: 'blur'},
        equipmentDesc: { required: true, message: '设备描述', trigger: 'blur'},
        macId: { required: true, message: 'mac地址为必填项', trigger: 'blur'},
      },
    }
  },
  computed: {
    ...mapGetters([
      'get_DeviceList',
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
    // this.$store.dispatch('getUserListPage', this.page);
    // let arr = JSON.parse(localStorage.getItem('permissionArr'));
    // console.log(arr)
    this.$store.dispatch('getDeviceList', this.page)
    // this.$store.dispatch('getRoleList');
    this.permissionArr = this.$route.meta.arr;
    // console.log(this.$router)
  },
  methods: {
    select (selection) { // 单选
      this.selection = selection;
      console.log(this.selection);
    },
    selectAll (selection) { // 多选
      // console.log(selection)
      this.selection = selection;
      console.log(this.selection);
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
    // 添加与修改
		addAction(form, device) {
			this.$refs[form].validate(valid => {
				if(valid) {
          console.log(device)
          if(this.tableInfo.updateVisible){ //账号添加、修改判别
            this.$store.dispatch('addDevice', device)
            .then(res => {
              console.log('addDeviceSuccess')
              this.tableInfo.addVisible = true;
              this.device = {};
            })
          }else{
            this.$store.dispatch('updateDevice', device)
            .then(res => {
              this.device = {};
              this.tableInfo.updateVisible = true;
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
        let arr =[];
        this.selection.forEach(v => {
          arr.push(v.id * 1);  //隐式转换
        })
        this.$store.dispatch('deleteDevice', arr)
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
        // 从table列表中获取当前信息。
        this.device = JSON.parse(JSON.stringify(this.selection[0]));;
        if(this.device.tenantId) {  //后端问题,传这个参数报错
          delete this.device.tenantId;
        }
        console.log(this.selection)
        // this.device.id = this.user.id;
      }else{
         this.$notify.warning({
          title: '错误提示',
          message: '请先选择一条信息'
        });
      }
    },
    selectName() {
      this.$store.dispatch('getDeviceList', this.page);
    },
    
    cancle() {
      if(!this.tableInfo.updateVisible) {
        this.device = {};
        this.selection = [];
      }
      this.tableInfo.addVisible = true;this.tableInfo.updateVisible = true
      
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