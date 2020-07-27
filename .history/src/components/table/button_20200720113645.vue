<template>
  <span>
    <el-button @click="selectName" size="small">
			<i class="el-icon-search"></i>
		{{$t('m.button.select')}}</el-button>
		<el-button type="success" @click="addAction" size="small">
			<i class="el-icon-circle-plus-outline"></i>
			{{$t('m.button.add')}}</el-button>
		<el-button type="warning" @click="updateAction" size="small">
			<i class="el-icon-edit"></i>
			{{$t('m.button.update')}}</el-button>
		<el-button type="danger" @click="deleteAction" size="small">
			<i class="el-icon-delete"></i>
			{{$t('m.button.delete')}}</el-button>
  </span>
</template>
<script>
export default {
  name: 'button',
  props: [
    ''
  ],
  data () {
    return {
      addVisible: true,     //添加框控制器
      updateVisible: true,  //修改框控制器
      expands: [],
      selection: [],        //选中的条目
      getRowKey(row) {      //
          return row.id;
      },
      // page: {
      //   currentPage: 1,
      //   pageSize: 20,
      //   roleName: '',
      //   total: 0,
      //   nameOrMacId: ''
      // },
    }
  },
  computed: {
      getInfo() {
          if(this.tableInfo.get){
              return this.$store.getters[this.tableInfo.get];
          }
      }
  },
  mounted() {
      console.log(this.tableInfo)
      console.log(this.$store.getters[this.tableInfo.get])
  },
  methods: {
      select (selection, row) { // 单选
      this.selection = selection;
      console.log(this.selection)
    //   console.log(row)
      this.$emit('select', selection)
    },
    selectAll (selection) { // 多选
      // console.log(selection)
      this.selection = selection
      this.$emit('selectAll', selection)
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
      // console.log(this.tableInfo)
        return (this.tableInfo.currentPage - 1) * this.tableInfo.pageSize + index + 1
    },
//     handleSizeChange (val) { // 分页数量改变
//       console.log(`每页 ${val} 条`)
//       this.$emit('sizeChange', val)
//     },
//     handleCurrentChange (val) { // 当前页切换
//       console.log(`当前页: ${val}`)
//       this.labelInfo.currentPage = val;
//       this.$emit('currentChange', val)
//     }
//   }
    }
}
</script>
<style lang="scss" scoped>
#tableComponent{
    height:calc(100% - 36px);
    // border:solid 1px;
}
</style>
