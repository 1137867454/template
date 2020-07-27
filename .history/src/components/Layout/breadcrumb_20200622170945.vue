<template>
  <ul id="breadcrumb" class="refuseCopy relative">
    <router-link tag="li" to="/" 
    :class="[{'is-active':activePath == '/' }, 'bread']">
      首页
      <!-- <i class="el-icon-error"></i> -->
    </router-link>
    <router-link :class="[{'is-active':activePath == v.path }, 'bread']"
     tag="li" :to="v.path" v-for="(v, i) in getBreadList" :key="i">
      {{v.name}}
      <i class="el-icon-close" style="" @click="deleteBread(i)
      "></i>
    </router-link>
    <li style="position:absolute;right:20px;top:-6px;">
      <el-color-picker
        class="theme-picker"
        popper-class="theme-picker-dropdown"
        v-model="theme"
        size="mini"
    >
    </el-color-picker>
    </li>
    </ul>
</template>

<script>
export default {
    name: 'breadcrumb',
    data() {
        return {
            infoVisible: false,
            theme: '#409eff',
            activePath: ''
        }
    },
    watch: {
      $route: {
        handler: function(val, oldVal) {
          console.log('breadCrumb')
          console.log(val);
          this.activePath = val.path;
          console.log(this.activePath)
          console.log(oldVal);
        }
      }
    },
    computed: {
      getBreadList() { //获得面包屑列表
        return this.$store.getters.getBreadList;
      }
    },
    mounted() {
      this.activePath = window.location.pathname;
      console.log(this.$route);
      if(window.location.pathname != '/'){

        let bread = {
          name: this.$route.meta.title,
          path: this.$route.path
        }
        this.$store.commit('set_breadList', bread);
      }
    },
    methods: {
      deleteBread(index) {
        console.log(index)
        this.$store.commit('delete_breadList', index);
        let breadList = this.getBreadList;
        console.log(breadList)
        if(breadList.length) {
          if(breadList.length == index){
            
            console.log('last')
            this.activePath = breadList[index - 1].path;       
            console.log(this.activePath);
            this.$route.push(this.activePath)
          }else{
            console.log('in')
            this.activePath = breadList[index].path;
          }
          // this.activePath = breadList[index].path;
        }else{
          this.activePath = '/'
        }
      }
    }
}
</script>
<style lang="scss" scoped>
#breadcrumb{
  margin:6px 10px;
  padding:0 4px;
  border-bottom:solid 1px #438eb9;
  text-align:left;
  .bread{
    display:inline-block;
    position:relative;
    padding:2px 20px;
    margin-right:4px;
    line-height:19px;
    background:#f0f0f0;
    // box-shadow: 2px 2px 2px #aaa;
    // border:solid 1px #bbb;
    font-size:12px;
    color:#444;

    &:hover{
      background:#49adff;
      color:#fff;
      cursor:pointer;
    }
    i{
      position:absolute;
      right:4px;top:4px;
    }
  }
  .is-active{
    background:#39f;
    color:#fff;
  }
}
</style>
