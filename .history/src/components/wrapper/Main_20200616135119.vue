<template>
  <el-main id="Main">
      <breadcrumb></breadcrumb>
      main
        <router-view />
</el-main>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style>
#Main{
    height:100%;
}
</style>