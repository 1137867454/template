<template>
  <div id="header" class="refuseCopy relative">
      <router-link
        tag="span"
        id="logo"
        to="/"
      >
      {{$t('m.header.mjk')}}
      <!-- {{logo}} -->
      </router-link>
      <el-menu
        style="padding-left:20%;height:41px;padding-bottom:10px;border:none;"
        :default-active="$route.path"
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
            {{$t('m.header.sayHi')}},{{logo}}
            <!-- <img
              class="headPhoto"
              src="../../assets/img/cat.png"
            > -->
          </span>
          <el-dropdown-menu style="margin-top:-10px !important;" slot="dropdown">
            <el-dropdown-item>
              <div @click="dialogVisible = true">
                <i class="el-icon-setting"></i> {{$t('m.header.infoUpdate')}}
                </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="toggleLanguage">
                <i class="iconfont icon-language" style=""></i> 
                {{$t('m.header.language')}}
                </div>
                </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <router-link :to="selfPage">
          <img
            class="headPhoto"
            src="../../assets/img/cat.png"
            alt=""
          >
        </router-link> -->
          <i :class="['iconfont', isFullScreen ? 'icon-anniu_xiaoping_icon' : 'icon-full-screen', 'screen']" @click="fullSCreen"></i> 
          <!-- <i class="iconfont icon-language icon" @click="toggleLanguage"></i>  -->
        <router-link
          to=""
          style="vertical-align:top;color:#eee;font-size:18px;margin-left:10px;"
          @click.native="removeLogin"
        >
          <!-- <img
            src="../../assets/img/icon/remove.png"
            style="vertical-align:middle;"
          >退出 -->
          <i class="el-icon-switch-button"></i>
        </router-link>
      </div>
      <el-dialog v-el-drag-dialog width="500px"
       :visible.sync="dialogVisible" :title="$t('m.header.infoUpdate')">
        
        <el-form style="margin:0 80px;font-size:13px;"
        class="form refuseCopy" :rules="rules" ref="form"
        size="small" label-position="left"
        :model="form"
      >
        <el-form-item :label="$t('m.label.oldPassword')" prop="oldPassword">
          <el-input type="password" clearable :autofocus="true"
            v-model="form.oldPassword"
            class="input_300"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item :label="$t('m.label.newPassword')" prop="newPassword">
          <el-input type="password" clearable :autofocus="true"
            v-model="form.newPassword"
            class="input_300"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label-width="0">
          <el-button
            type="primary"
            @click="updatePassword('form', form)"
          >
            {{$t('m.button.confirm')}}
          </el-button>
          <el-button @click="dialogVisible = false">
            {{$t('m.button.cancel')}}
          </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    </div>
</template>

<script>
import fx from '../../utils/fx';
export default {
    name: 'Header',
    data() {
        return {
            dialogVisible: false, //信息修改框 el-dialog
            // activeIndex: '',
            logo: '',
            form: {},
            rules: {
              oldPassword: { required: true, message: this.$i18n.t('m.rules.oldPassword'), trigger: 'blur' },
              newPassword : { required: true, message: this.$i18n.t('m.rules.newPassword'), trigger: 'blur' }
            },
            isFullScreen: false
        }
    },
    computed: {
      getTheme() {
        return this.$store.getters.getTheme;
      }
    },
    // watch: {
      
    // },
    mounted() {
      this.logo = localStorage.getItem('name');
      // let that = this;
    //   window.onresize = () => {
    //     window.onkeydown = function (e) {
    //       console.log(e)
    //     }
    //  }
    },
    methods: {
      screenStatus(){
            return document.fullscreenElement    ||
                   document.msFullscreenElement  ||
                   document.mozFullScreenElement ||
                   document.webkitIsFullScreen|| false;
      },
      toggleLanguage() {
        console.log(this.$i18n);
        let locale = this.$i18n.locale;
        locale === 'zh' ? (this.$i18n.locale = 'en') : (this.$i18n.locale = 'zh');
        // console.log(this.$i18n.t(this.$route.meta.title))
        localStorage.locale = this.$i18n.locale;
        document.title = this.$i18n.t(this.$route.meta.title)
        let info = locale === 'en' ? '切换成功' : 'change language successfully';
        this.$message.success(info);
      },
      fullSCreen() {
        if(this.screenStatus()) {
          fx.exitFullScreen();
        }else{
          fx.fullScreen();
          window.onkeydown = function (e) {
            console.log(e)
          }
        }
        console.log(this.isFullScreen)
        this.isFullScreen = !this.isFullScreen;
      },
      updatePassword(form, info) {
        this.$refs[form].validate(valid => {
          if(valid) {
            info.username = localStorage.getItem('username');
            this.$store.dispatch('updatePassword', info)
            .then(() => {
              this.dialogVisible = false;
              form = {}
            })
          }else{
            return false;
          }
        })
      },
      removeLogin() {
        this.$store.dispatch('removeLogin');
        window.location.href = "/login";
      }
    }
}
</script>
<style lang="scss" scoped>
#header{
  font-size:13px;
  border-bottom:solid 1px #333;
  #logo{
    position: absolute;
    z-index:1;
    letter-spacing:1px;
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
      box-sizing: border-box;
      max-width:100px !important;
      outline:none;
      display:inline-block;
      padding:0 14px;
      margin-right:10px;
      font-size:13px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
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
  .screen{
    font-size:20px;
    vertical-align: top;
    padding:0 10px;
    display:inline-block;
  }
  .icon{
    // border:solid 1px;
    font-size:18px;
    vertical-align: top;
    padding:0 10px;
    display:inline-block;
    transition: all 0.25s linear;
    &:hover{
      transform: rotateY(180deg);
    }
  }
  .input_300{
    width:300px;
  }
}
</style>
