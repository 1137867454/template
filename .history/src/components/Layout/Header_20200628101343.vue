<template>
  <div id="header" class="refuseCopy relative">
      <router-link
        id="logo"
        to="/"
      >
        明进康Logo
      </router-link>
      <el-menu
        style="padding-left: 16%; height:42px;padding-bottom:4px;border:0;"
        :default-active="activeIndex"
        :background-color="getTheme"
        text-color="#eee" :router="true"
        active-text-color="#ff0"
        class="el-menu-demo"
        mode="horizontal"
      >
        <!-- @select="handleSelect" -->
        <el-menu-item class="menuItem"
          index="/nav"
        >
          首页 {{getTheme}}
        </el-menu-item>
        <el-menu-item class="menuItem"
          index="/device/wristband"
        >
          设备管理
        </el-menu-item>
        <el-menu-item class="menuItem"
          index="/classManager/class_"
        >
          班级管理
        </el-menu-item>
        <el-menu-item class="menuItem"
          index="/workAndRest"
        >
          作息列表
        </el-menu-item>
      </el-menu>
      
      <div class="removeItem">
        <el-dropdown>
          <span class="el-dropdown-link hello">
            Hi,管理员
            <!-- <img
              class="headPhoto"
              src="../../assets/img/cat.png"
            > -->
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
          to="/admin_login"
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
    computed: {
      getTheme() {
        return this.$store.getters.getTheme;
      }
    },
    methods: {
        removeLogin() {
        this.$store.dispatch('removeLogin');
      },

    }
}
</script>
<style lang="scss" scoped>
#header{
  #logo{
    position: absolute;
    z-index:1;
    top:11px;left:20px;
    color:#fff;
  }
  .menuItem{
    height:40px; line-height:40px;font-size:13px;
  }
  .removeItem{
    height:42px;
    line-height: 42px;
    position:absolute;right:20px;top:0;
    color:#fff;
    .hello{
      height:40px;
      outline:none;
      display:inline-block;padding:0 10px;
      margin-right:10px;font-size:13px;
      color:#fff;background:rgba(100,100,100,0.6);
      &:hover{
        background:rgba(60,60,60,0.6);
      }
    }
    .headPhoto{
      height:34px;
      width:34px;
      padding:1px;
      vertical-align: middle;
      border-radius:50%;
    }
  }
}
</style>
