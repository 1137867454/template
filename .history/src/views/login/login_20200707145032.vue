<template>
  <div class="dowebok">
        <div class="logo"></div>
        <div class="form-item">
            <input id="username" type="text" autocomplete="off" placeholder="邮箱">
            <p class="tip">请输入合法的邮箱地址</p>
        </div>
        <div class="form-item">
            <input id="password" type="password" autocomplete="off" placeholder="登录密码">
            <p class="tip">邮箱或密码不正确</p>
        </div>
        <div class="form-item"><button id="submit">登 录</button></div>
        <div class="reg-bar">
            <a class="reg" href="http://www.dowebok.com" target="_blank">立即注册</a>
            <a class="forget" href="http://www.dowebok.com" target="_blank">忘记密码</a>
        </div>
    </div>
</template>
<script>
// import '../../assets/js/anime.min.js'
// import '../../assets/js/index.js'
// import axios from 'axios';
// import fx from '../../util/fx'
// import qs from 'qs'
// let Base64 = require('js-base64').Base64
// let md5 = require('js-md5')
// const anime = require('anime');
export default {
  name: 'Login',
  data () {
    return {
      loginStatus: false,
      form: {
        username: 'admin',
        password: '123456',
        // account: '123456',
        // password: '123456',
        // loginDirect: '',
        // getCode: function () {
        //   // 采用MD5加密密码，而后用base64加密用户名与密码（MD5加密过）拼接的字符串
        //   let pwd = md5(this.password)
        //   let code = this.account + pwd
        //   code = Base64.encode(code)
        //   return code
        // }
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 12, message: '长度在 7 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, max: 12, message: '长度在 7 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    var current = null
    let that = this
    console.log(document.querySelector('#email'))
    document.querySelector('#email').addEventListener('focus', function (e) {
      if (current) current.pause()
      current = that.$anime({
        targets: 'path',
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      })
    })
    let password = document.querySelector('#password');
    password.addEventListener('focus', function (e) {
      if (current) current.pause()
      current = that.$anime({
        targets: 'path',
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      })
    })
    password.addEventListener('keydown',(e) =>{
      // console.log(e.key)
      if(e.key == 'Tab'){
        current = that.$anime({
        targets: 'path',
        strokeDashoffset: {
          value: -730,
          duration: 400,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '530 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      })
      }
    })
    document.querySelector('#submit').addEventListener('mouseover', function (e) {
      let input1 = document.querySelector("#email");
      let input2 = document.querySelector("#password");
      input1.blur();input2.blur();
      if (current) current.pause()
      current = that.$anime({
        targets: 'path',
        strokeDashoffset: {
          value: -730,
          duration: 400,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '530 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      })
    })
  },
  methods: {
    login (info) {
      this.$refs[info].validate(valid => {
        if (valid) {
          // this.loginStatus = true
          // let code = this.form.getCode();
          // this.form.role = 'schoolManager';
          this.$store.dispatch('login', this.form)
            .then(res => {
              // this.$message({
              //   message: '登陆成功',
              //   type: 'success'
              // })
              this.$router.push({path: '/'})
            }).catch(error => {
              // console.log(error)
              // this.$message({
              //   center: true,
              //   message: '用户名或密码错误(＠_＠;)',
              //   type: 'error'
              // })
            })
        }
      })
    }
  }

}
</script>
<style lang="scss" scoped>
  // @import url('../../assets/css/style.css');
    #login{
        height:100%;
        width:100%;
        min-width:400px;
        background-image: url('../../assets/img/topic7.jpg');
        background-repeat: no-repeat;
        background-size:100% 100%;
        font-family: 'Inter UI', sans-serif;
        margin: 0;
        position:relative;
        overflow:hidden;
        // #title{
        //   color:#fff;
        //   text-align:center;
        //   line-height:80px;
        //   font-size:30px;
        // }
    }
    // .box-class{
    //     position: absolute;
    //     padding:20px;
    //     right: 10%;
    //     top:30%;
    //     height:300px;
    //     width: 380px;
    //     background: rgba(250,250,250,0.65);
    //     box-shadow:2px 2px 4px #aaa !important;
    // }
    .el{
        font-size:22px;
        color:#666;
    }
    .el-form-item{
      margin:0 !important;
    }
   .el-form-item__error{
        padding:0 !important;
      }
    ::selection {
    background: #2d2f36;
}
::-webkit-selection {
    background: #2d2f36;
}
::-moz-selection {
    background: #2d2f36;
}
// input:-webkit-autofill {
  //     transition: background-color 5000s ease-in-out 0s;
//     box-shadow: 0 0 0 1000px  rgba($color: #474a59, $alpha: 0.9) inset !important;
// }
:-webkit-autofill {
 -webkit-text-fill-color: rgba($color: #fff, $alpha: 0.9) !important;
 -webkit-text-fill-background-color: rgba($color: #474a59, $alpha: 0.9) !important;
 transition: background-color 10000s ease-in-out 0s;
}
/* body {
    background: white;
    font-family: 'Inter UI', sans-serif;
    margin: 0;
    padding: 20px;
} */
 .dowebok {
     height: 100%;
     position: absolute;
     place-content: center;
     width: 100%;
     top:calc(50% - 170px);
 }
 .containers {
     display: flex;
     height: 320px;
     margin: 0 auto;
     width: 640px;
 }
 #left {
     background: rgba($color: #fff, $alpha: 0.9);
     height: calc(100% - 40px);
     top: 20px;
     position: relative;
     width: 50%;
 }
 .login {
     font-size: 50px;
     font-weight: 900;
     margin: 50px 40px 30px;
 }
 .eula {
     color: #999;
     font-size: 14px;
     line-height: 1.5;
     margin: 40px;
 }
 #right {
   background: rgba($color: #474a59, $alpha: 0.9);
    //  background: #474a59;
     box-shadow: 0px 0px 40px 16px rgba(0, 0, 0, 0.22);
     color: #f1f1f2;
     position: relative;
     width: 50%;
 }
//  @media (max-width: 767px) {
//      #right {
//          flex-shrink: 0;
//          height: 100%;
//          width: 100%;
//          max-height: 350px;
//      }
//  }
 svg {
     position: absolute;
     width: 320px;
 }
 path {
     fill: none;
     stroke: url(#linearGradient);
     stroke-width: 4;
     stroke-dasharray: 240 1386;
 }
 .form {
     margin: 40px;
     position: absolute;
 }
 label {
     color: #c2c2c5;
     display: block;
     font-size: 14px;
     height: 16px;
     margin-top: 20px;
     margin-bottom: 5px;
 }
 input {
     background: transparent;
     border: 0;
     color: #f2f2f2;
     font-size: 20px;
     height: 30px;
     line-height: 30px;
     outline: none !important;
     width: 100%;
 }
 input::-moz-focus-inner {
     border: 0;
 }
 #submit {
     color: #707075;
     margin-top: 40px;
     transition: color 300ms;
 }
 #submit:focus {
     color: #f2f2f2;
 }
 #submit:active {
     color: #d0d0d2;
 }
</style>
