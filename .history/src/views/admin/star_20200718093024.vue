<template>
  <comp-table :tableData="tableData"
        :tableHeader="tableHeader"
        :multipleSelection.sync="multipleSelection"
        @filter-events="filterEvents"
        @sort-events="sortEvents">
</comp-table>
</template>
<script>
import compTable from '../../components/tableUI';
export default {
    data () {
        return {
             tableData: [], // 请求到的表格数据
             tableHeader: [ // 表头信息
          　　　{ prop: 'fieldName',
            　　label: '领域',
            　　filters: domainTypeData,
            　　columnKey: 'fieldType',
            　　filterMultiple: false,
            　　minWidth: '150px',
           　　 fixed: true
          　　},
          　　{ prop: 'fieidDetails', label: '详情', minWidth: '180px' },
          　　{ prop: 'lawyerQuantity',
            　　label: '关联律师数量',
           　　 minWidth: '150px',
           　　 router: {path: '/'}
         　　 },
          　　{ prop: 'articlesNumber',
          　　  label: '相关文章数量',
            　　router: {path: '/case-management'},
            　　minWidth: '150px'
         　　 },
          　　{ prop: 'operation',
            　　label: '相关服务',
            　　minWidth: '260px',
            　　style: {display: 'block'},
           　　 operation: [
              　　{name: '服务方案一', clickFun: this.getServiceOne},
              　　{name: '服务方案二', clickFun: this.getServiceTwo},
              　　{name: '服务方案三', clickFun: this.getServiceThird}
            　　]
          　　},
          　　{ prop: 'gmtModified', custom: 'custom', label: '最后更新时间', minWidth: '180px', formatData: this.formatDate },
          　　{ prop: 'updater', label: '最后更新人', minWidth: '120px' },
          　　{ prop: 'operation',
            　　label: '操作',
            　　minWidth: '260px',
           　　 operation: this.fieldStatus ? [
              　　{name: '上线', disabled: true, clickFun: this.onLineField},
              　　{name: '下线', underline: true, clickFun: this.underField}
           　　 ] : [
             　　 {name: '编辑', clickFun: this.editDomain},
              　　{name: '删除', clickFun: this.delField},
              　　{name: '待审核', clickFun: this.examineField}
            　　]
          　　}
       　　 ]   
        }
    }
}
</script>
