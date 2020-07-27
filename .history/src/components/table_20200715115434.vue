<template>
  <div  v-if="tableInfo.addVisible && tableInfo.updateVisible" id="tableComponent" class="refuseCopy">
      <!-- v-if="addVisible && updateVisible" -->
      <el-table 
    ref="multipleTable"
    :data="getInfo.records"
    tooltip-effect="dark"
    height="100%"
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
                <el-form-item label="设备名">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <!--  align="center" -->
    <el-table-column
     v-for="(v, k, i) in tableInfo.parameter" :key="i"
      :prop="k"
      :label="v"
      >
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
export default {
  name: 'tables',
  props: [
    'tableInfo'
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
