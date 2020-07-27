<template>
  <div id="header" class="refuseCopy relative">
      <router-link
        id="logo"
        to="/"
      >
        廉江中学
      </router-link>
      <el-menu
        style="padding-left: 16%; height:50px;font-size:12px !important;"
        :default-active="activeIndex"
        background-color="#464c5b"
        text-color="#eee" :router="true"
        active-text-color="#ff0"
        class="el-menu-demo"
        mode="horizontal"
      >
        <!-- @select="handleSelect" -->
        <el-menu-item
          style="height:48px;"
          index="/nav"
        >
          首页
        </el-menu-item>
        <el-menu-item
          style="height:48px;"
          index="/device/wristband"
        >
          设备管理
        </el-menu-item>
        <el-menu-item
          style="height:48px;"
          index="/classManager/class_"
        >
          班级管理
        </el-menu-item>
        <el-menu-item
          style="height:48px;"
          index="/workAndRest"
        >
          作息列表
        </el-menu-item>
      </el-menu>
      
      <div class="remmoveItem">
        <el-dropdown>
          <span class="el-dropdown-link">
          <img
            class="headPhoto"
            src="../../assets/img/cat.png"
            alt=""
          >
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><div @click="infoVisible = true"><i class="el-icon-setting"></i> 修改资料</div></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <router-link :to="selfPage">
          <img
            class="headPhoto"
            src="../../assets/img/cat.png"
            alt=""
          >
        </router-link> -->
        <router-link
          to="removePage"
          style="color:#eee"
          @click.native="removeLogin"
        >
          <img
            src="../../assets/img/icon/remove.png"
            style="vertical-align:middle;"
          >退出
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            infoVisible: false,
            activeIndex: ''
        }
    },
    methods: {
        removeLogin() {

        }
    }
}
</script>
<style lang="scss" scoped>
#header{
  #logo{
    position: absolute;
    z-index:1;
    top:16px;left:20px;
    color:#fff;
  }
  #removeItem{
    position:absolute;right:20px;top:6px;color:#fff;
  }
}
</style>
