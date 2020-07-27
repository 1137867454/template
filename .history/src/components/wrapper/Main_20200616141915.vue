<template>
  <el-main id="Main">
    <breadcrumb></breadcrumb>
    <div id="router_view">
        <router-view />
    </div>
</el-main>
</template>

<script>
import breadcrumb from '@/components/wrapper/breadcrumb';
export default {
    name: 'Main',
    components: {
    breadcrumb
  },
}
</script>

<style lang="scss" scoped>
#Main{
    height:100%;
    padding:0;
    .router_view{

    }
}
</style>