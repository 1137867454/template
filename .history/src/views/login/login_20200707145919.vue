<template>
  <div id="login">
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
    </div>
</template>
<script>
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
    background:#000;
    background-image: url('../../assets/img/1.jpg');
     .dowebok {
    position: absolute;
    left: 50%; top: 50%;
    width: 400px;
    height: 500px;
    margin: -300px 0 0 -215px;
    border: 1px solid #fff;
    border-radius: 20px;
    overflow: hidden;}
        .logo { width: 104px; height: 104px; margin: 50px auto 80px;
        //  background: url(images/login.png) 0 0 no-repeat;
         }
        .form-item { position: relative; width: 360px; margin: 0 auto; padding-bottom: 30px;}
        .form-item input { width: 288px; height: 48px; padding-left: 70px; border: 1px solid #fff; border-radius: 25px; font-size: 18px; color: #fff; background-color: transparent; outline: none;}
        .form-item button { width: 360px; height: 50px; border: 0; border-radius: 25px; font-size: 18px; color: #1f6f4a; outline: none; cursor: pointer; background-color: #fff; }
        // #username { background: url(images/emil.png) 20px 14px no-repeat; }
        // #password { background: url(images/password.png) 23px 11px no-repeat; }
        .tip { display: none; position: absolute; left: 20px; top: 52px; font-size: 14px; color: #f50; }
        .reg-bar { width: 360px; margin: 20px auto 0; font-size: 14px; overflow: hidden;}
        .reg-bar a { color: #fff; text-decoration: none; }
        .reg-bar a:hover { text-decoration: underline; }
        .reg-bar .reg { float: left; }
        .reg-bar .forget { float: right; }
        .dowebok ::-webkit-input-placeholder { font-size: 18px; line-height: 1.4; color: #fff;}
        .dowebok :-moz-placeholder { font-size: 18px; line-height: 1.4; color: #fff;}
        .dowebok ::-moz-placeholder { font-size: 18px; line-height: 1.4; color: #fff;}
        .dowebok :-ms-input-placeholder { font-size: 18px; line-height: 1.4; color: #fff;}

        @media screen and (max-width: 500px) {
            * { box-sizing: border-box; }
            .dowebok { position: static; width: auto; height: auto; margin: 0 30px; border: 0; border-radius: 0; }
            .logo { margin: 50px auto; }
            .form-item { width: auto; }
            .form-item input, .form-item button, .reg-bar { width: 100%; }
        }
  }
</style>
