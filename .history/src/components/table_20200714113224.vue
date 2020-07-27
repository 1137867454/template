<template>
  <div id="tableComponent" class="refuseCopy">
  </div>
</template>
<script>
export default {
  name: 'table',
  props: [
    'labelInfo'
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
</script>
<style lang="scss" scoped>
#tableComponent{
    margin:0;
}
</style>
