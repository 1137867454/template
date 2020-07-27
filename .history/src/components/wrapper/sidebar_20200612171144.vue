<template>
  <div id="sidebar">
      <!-- aside 侧边导航栏 -->
      <el-menu style="height:100%; overflow-y:auto; height:93%;"
        class="aside aside-menu refuseCopy"
        text-color="#909399"
        active-text-color="#39f"
        unique-opened
        :collapse="unfold"
        :router="true"
        :default-active="activeIndex"
      >
        <el-submenu>
            <template slot="title">
            <i class="" />
            <span slot="title" style="font-size:12px;"> 考勤管理</span>
          </template>
            123s
        </el-submenu>
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
              :index="v.path + '/' + child.path" @click.native="isActive"
            >
              <i :class="child.meta.icon" />{{ child.meta.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- <div class="asideCopy" 
        style="border:solid 1px;position:absolute;
        top:0; z-index:1;
        width:100%;height:93%;overflow-y:auto;">
        </div> -->
        <!-- <el-button size="mini" @click="unfold = !unfold">展&收</el-button> -->
      <!-- <div style="height:7%;width:16%;position:absolute;bottom:-10px;border:solid 1px;"></div> -->
        <i
          id="showHidden"
          :class="unfold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
          @click="unfold = !unfold"
        />
      </el-menu>
  </div>
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
            return this.$store.getters.getRouter;
        }
    }
}
</script>

<style lang="scss" scoped>
#sidebar{
    height:100%;
    // width:100%;
    // width:300px;
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
      width:100% !important;
      min-width: auto !important;
      padding:0 0 0 45px !important;
    }
    // .asideCopy,.aside-menu{
    //   height:100%; width:200px;
    // }
    // .asideCopy:not(.el-menu--collapse),.aside-menu:not(.el-menu--collapse){
    //   // transition-delay: 0.38s;
    //   width: 16%;
    //   min-width: auto;
    //   // height:100%;
    // }
    #showHidden{
    color:#909399;
    font-size:24px;position:fixed;bottom:20px;left:20px;
    transition: all .4s linear !important;
  }
}
</style>