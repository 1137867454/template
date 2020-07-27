<template>
  <div class="home">
    <Headers></Headers>
    <Sidebar></Sidebar>
    <Mains></Mains>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Headers from '../components/wrapper/header';
import Sidebar from '../components/wrapper/sidebar';
import Mains from '../components/wrapper/main';
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Headers,
    Sidebar,
    Mains
  }
}
</script>
