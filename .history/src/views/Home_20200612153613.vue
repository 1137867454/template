<template>
  <div class="home height_100 border" >
    <Header></Header>
    <el-container class="container animated fadeIn slideInUp">
      <el-container class="container_">
        <Sidebar></Sidebar>
        <Main></Main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '../components/wrapper/Header';
import Sidebar from '../components/wrapper/sidebar';
import Main from '../components/wrapper/Main';
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
<style lang="scss">
#home{

  .container{
    width:100%;
    padding:8px;
    height:calc(100% - 50px);
    background:rgb(245,247,249);
    .container_ {
      height:100%;
      // border:solid 1px;
      background:#fff;
      box-shadow:-2px 0px 4px #aaa;
    }
  }
}
</style>
