<template>
  <div style="background:#fff;overflow:hidden;">
    <ul id="breadcrumb" class="refuseCopy relative">
    <router-link tag="li" to="/" 
    :class="[{'is-active':activePath == '/nav' }, 'bread']">
      首页
      <!-- <i class="el-icon-error"></i> -->
    </router-link>
    <router-link style="" :class="[{'is-active':activePath == v.path }, 'bread']"
     tag="li" :to="v.path" v-for="(v, i) in getBreadList" :key="i">
      {{v.name}}
      <i class="el-icon-close" style="" @click.stop="deleteBread(i)
      "></i>
    </router-link>
    <li style="position:absolute;right:20px;top:-3px;">
      <el-color-picker
        :predefine="predefineColors"
        class="theme-picker"
        popper-class="theme-picker-dropdown"
        v-model="theme"
        size="mini" @change="themeChange"
    >
    </el-color-picker>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  data() {
      return {
          infoVisible: false,
          theme: '#409eff',
          activePath: '',
          predefineColors: [
            '#ff4500',
            '#ff8c00',
            '#ffd700',
            // '#90ee90',
            '#00ced1',
            '#1e90ff',
            '#c71585',
            'rgba(255, 69, 0, 0.68)',
            'rgb(255, 120, 0)',
            // 'hsv(51, 100, 98)',
            // 'hsva(120, 40, 94, 0.5)',
            // 'hsl(181, 100%, 37%)',
            // 'hsla(209, 100%, 56%, 0.73)',
            '#c7158577',
            '#545c64'
          ]
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
      // console.log(this.$route);
      if(window.location.pathname != '/nav'){

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
            // this.activePath = breadList[index - 1].path;       
            console.log(breadList);
            this.$router.push(breadList[index - 1].path)
            console.log(this.$router)
          }else{
            console.log('in')
            // this.activePath = breadList[index].path;
            this.$router.push(breadList[index].path)
          }
          // this.activePath = breadList[index].path;
        }else{
           this.$router.push('/')
        }
      },
      themeChange(v) {
        if(v) {
          this.$store.commit('themeChange', v)
        }
      }
    }
}
</script>
<style lang="scss" scoped>
#breadcrumb{
  margin: 4px 10px 6px;
  padding:6px 10px 0;
  border-bottom:solid 1px #438eb9;
  text-align:left;
  
  .bread{
    display:inline-block;
    position:relative;
    // padding:4px 22px 2px 20px;
    margin-right:10px;
    background:#fff;
    box-shadow: 0 0 4px #aaa;
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
    font-size:12px;
    letter-spacing: 1px;
  }
}
</style>
