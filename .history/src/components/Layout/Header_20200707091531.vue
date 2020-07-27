<template>
  <div id="header" class="refuseCopy relative">
      <router-link
        id="logo"
        to="/"
      >
      {{logo}}
      </router-link>
      <el-menu
        style="padding-left:20%;height:50px;padding-bottom:10px;border:none;"
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
          首页
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
            <el-dropdown-item><div @click="dialogVisible = true"><i class="el-icon-setting"></i> 修改资料</div></el-dropdown-item>
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
      <el-dialog v-el-drag-dialog
       :visible.sync="dialogVisible" title="资料修改">

    </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            infoVisible: false,
            dialogVisible: false,
            activeIndex: '',
            logo: ''
        }
    },
    computed: {
      getTheme() {
        return this.$store.getters.getTheme;
      }
    },
    mounted() {
      this.logo = localStorage.getItem('name');
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
  font-size:16px;
  #logo{
    position: absolute;
    z-index:1;
    top:16px;left:20px;
    color:#fff;
  }
  .el-menu-demo{
    font-size:16px;
    height:50px;
    border:solid 1px;
  }
  .menuItem{
    height:49px; line-height:49px;font-size:14px;
  }
  .removeItem{
    height:50px;
    line-height: 50px;
    position:absolute;right:20px;top:0;
    color:#fff;
    .hello{
      height:50px;
      outline:none;
      display:inline-block;padding:0 20px;
      margin-right:10px;font-size:14px;
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
