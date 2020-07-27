<template>
  <div id="header" class="refuseCopy relative">
      <router-link
        tag="span"
        id="logo"
        to="/"
      >
      {{logo}}
      </router-link>
      <el-menu
        style="padding-left:20%;height:42px;padding-bottom:10px;border:none;"
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
          {{ $t('m.header.home') }}
        </el-menu-item>
        <el-menu-item class="menuItem"
          index="/system/account"
        >
          {{ $t('m.router.account') }}
        </el-menu-item>
        <el-menu-item class="menuItem"
          index="/system/role"
        >
          {{ $t('m.router.role') }}
        </el-menu-item>
        <!-- <el-menu-item class="menuItem"
          index="/workAndRest"
        >
          作息列表
        </el-menu-item> -->
      </el-menu>
      
      <div class="removeItem">
        <el-dropdown>
          <span class="el-dropdown-link hello">
            {{$t('m.header.sayHi')}},管理员
            <!-- <img
              class="headPhoto"
              src="../../assets/img/cat.png"
            > -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><div @click="dialogVisible = true"><i class="el-icon-setting"></i> 修改资料</div></el-dropdown-item>
            <el-dropdown-item><div @click="toggleLanguage"><i class="el-icon-setting"></i> 切换语言</div></el-dropdown-item>
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
          to=""
          style="color:#eee;font-size:18px;margin-left:10px;"
          @click.native="removeLogin"
        >
          <!-- <img
            src="../../assets/img/icon/remove.png"
            style="vertical-align:middle;"
          >退出 -->
          <i class="el-icon-switch-button"></i>
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
      toggleLanguage() {
        console.log(this.$i18n);
        let locale = this.$i18n.locale;
        locale === 'zh' ? (this.$i18n.locale = 'en') : (this.$i18n.locale = 'zh');
        localStorage.locale = this.$i18n.locale;
        document.title = 123
        let info = locale === 'en' ? '切换成功' : 'change language successfully';
        this.$message.success(info);
      },
      removeLogin() {
        this.$store.dispatch('removeLogin');
        window.location.href = "/login";
      },

    }
}
</script>
<style lang="scss" scoped>
#header{
  font-size:14px;
  #logo{
    position: absolute;
    z-index:1;
    top:14px;left:20px;
    color:#fff;
  }
  .el-menu-demo{
    font-size:14px;
    height:50px;
    border:solid 1px;
  }
  .menuItem{
    height:41px; line-height:42px;font-size:13px;
  }
  .removeItem{
    height:42px;
    line-height: 42px;
    position:absolute;right:20px;top:0;
    color:#fff;
    .hello{
      height:42px;
      outline:none;
      display:inline-block;padding:0 20px;
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
.el-submenu__title:hover{
    background-color: rgb(64,124,204) !important;
  }
  .el-menu-item:hover{
    background-color: rgb(64,124,204) !important;
  }
}
</style>
