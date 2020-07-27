<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <el-button type="primary">click</el-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '../components/wrapper/header';
import Sidebar from '../components/wrapper/sidebar';
import Main from '../components/wrapper/main';
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Header,
    Sidebar,
    Main
  }
}
</script>
