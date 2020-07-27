<template>
  <el-main id="Main">
    <breadcrumb></breadcrumb>
    <div>
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

<style>
#Main{
    height:100%;
    padding:0;
}
</style>