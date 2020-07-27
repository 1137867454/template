<template>
  <div class="home">
    <Header></Header>
    <Sidebar></Sidebar>
    <Main></Main>
    
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
