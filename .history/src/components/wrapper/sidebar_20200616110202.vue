<template>
      <!-- aside 侧边导航栏 -->
      <el-menu style="height:100%; overflow-y:auto; height:100%;"
        class="aside aside-menu refuseCopy" default-active="1-4-1" class="el-menu-vertical-demo" :collapse="unfold">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
</el-menu>
      <!-- <el-menu style="height:100%; overflow-y:auto; height:100%;"
        class="aside aside-menu refuseCopy"
        text-color="#909399"
        active-text-color="#39f"
        unique-opened
        :collapse="unfold"
        :router="true"
        :default-active="activeIndex"
      >
          <el-submenu
          v-for="(v,i) in getRouter"
          :key="i"
          :index="i + ''"
        >
          <template slot="title">
            <i :class="v.meta.icon" />
            <span slot="title" style="font-size:12px;">{{ v.meta.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(child,id) in v.children"
              :key="id"
              :index="v.path + '/' + child.path"
            >
              <i :class="child.meta.icon" />{{ child.meta.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <i
          id="showHidden"
          :class="unfold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
          @click="unfold = !unfold"
        />
      </el-menu> -->
      
</template>

<script>
export default {
    name: 'sidebar',
    data() {
        return {
            unfold: false,      //导航栏是否展开
            activeIndex: '',
            index: ''
        }
    },
    computed: {
        getRouter() {
          console.log(this.$store.getters.getRouter)
            return this.$store.getters.getRouter;
        }
    }
}
</script>

<style lang="scss" scoped>
// #sidebar{
//     height:100%;
//     width:300px;
//     overflow:hidden;
    li{
    overflow:hidden;
    // background:#39f;
    .is-active{
        background:rgb(236, 245, 255);
    }
      .is-active::after{
        content:'';
        position:absolute;
        width: 2px;
        height:50px;
        right:0;
        background:#39f;
      }
    }
    .aside{
      // box-shadow:-2px 0px 4px #aaa;
      font-size: 12px ;
    //   width: 100px;
    }
    .el-submenu__title{
      font-size:12px;
    }
    // .el-submenu .el-menu-item{
    //   font-size:12px;
    //   width:100% !important;
    //   min-width: auto !important;
    //   padding:0 auto !important;
    // }
    .el-menu-item{
      font-size:12px;
    //   width:100% !important;
      min-width: auto !important;
    //   padding:0 0 0 45px !important;
    }
    .aside-menu{
    //   height:100%;
    }
    .aside-menu:not(.el-menu--collapse){
      // transition-delay: 0.38s;
      width: 200px;
      min-width: auto;
      // height:100%;
    }
    #showHidden{
    color:#909399;
    font-size:24px;position:fixed;bottom:20px;left:20px;
    transition: all .4s linear !important;
  }
// }
</style>