<template>
  <el-main id="Main">
    <breadcrumb></breadcrumb>
    <div id="router_view">
        <router-view />
    </div>
</el-main>
</template>

<script>
import breadcrumb from '@/components/Layout/breadcrumb';
export default {
    name: 'Main',
    components: {
    breadcrumb
  },
}
</script>

<style lang="scss">
#Main{
    height:100%;
    width:50%;
    padding:0;
    background:#f5f5f5;
    #router_view{
      // padding:4px 8px;
        height:calc(100% - 38px);
        // box-shadow: inset 0 0 10px #aaa;
        
        // border:solid 1px;
    }
}
</style>