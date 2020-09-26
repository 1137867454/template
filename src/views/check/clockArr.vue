<template>
<section style="padding:16px;">
   <p>已选日期：{{date2}}</p>
    <date-picker1 :date.sync="date2" :is-show.sync="showDate2"></date-picker1>
</section>
</template>

<script>
Date.prototype.format = function(fmt)
{ //author: meizz
  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}
import DatePicker from "../../components/table/datePicker";
export default {
name:"DatePicker",
components:{
  'date-picker1':DatePicker,
},
data:()=>({
  showDate2:false,
  date2:new Date().format("yyyy-MM-dd"),
})
}
</script>
<style lang="scss" scoped>

</style>