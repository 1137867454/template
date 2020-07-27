<template>
  <div id="tableComponent" class="refuseCopy">
      <!-- v-if="addVisible && updateVisible" -->
      <el-table 
    ref="multipleTable"
    :data="get_DeviceList.records"
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
    <el-table-column v-for="(v, i) in tableInfo" :key="i"
      prop="name"
      label="设备名"
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
      // currentPage: 2
    }
  },
  methods: {
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
    
}
</style>
