<template>
  <div id="login">
    <div class="dowebok">
          <div class="logo"></div>
          <el-form
              ref="form"
              :rules="rules"
              :model="form"
              :status-icon="true"
            >
            <el-form-item class="form-item" prop="username">
                <input autofocus
                  id="username" placeholder="请输入用户名"
                  style="background-color:transparent !important;"
                  v-model="form.username"
                  type="text"
                >
              </el-form-item>
              <el-form-item class="form-item" prop="password">
                <input autofocus placeholder="请输入密码"
                  id="password"
                  style="background-color:transparent !important;"
                  v-model="form.password"
                  type="text"
                >
              </el-form-item>
          </el-form>
          <!-- <div class="form-item">
              <input id="username" type="text" autocomplete="off" placeholder="邮箱">
              <p class="tip">请输入合法的邮箱地址</p>
          </div> -->
          <!-- <div class="form-item">
              <input id="password" type="password" autocomplete="off" placeholder="登录密码">
              <p class="tip">邮箱或密码不正确</p>
          </div> -->
          <div class="form-item"><button id="submit" @click="login('form')">登 录</button></div>
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
<style lang="scss">
  // @import url('../../assets/css/style.css');
  #login{
    height:100%;
    background:#000;
    background-image: url('../../assets/img/1.jpg');
    .dowebok {
    transform: scale(0.8);
    background:rgba(255, 255, 255, 0.3);
    position: absolute;
    left: 50%; top: 50%;
    width: 430px;
    height: 550px;
    margin: -300px 0 0 -215px;
    border: 1px solid #fff;
    border-radius: 20px;
    overflow: hidden;}
        .logo { width: 104px; height: 104px; margin: 50px auto 80px;
         background: url('../../assets/img/icon/user.png') 0 0 no-repeat;
         }
        .form-item { position: relative; width: 360px; margin: 0 auto; padding-bottom: 30px;}
        .form-item input { width: 288px; height: 48px; padding-left: 70px; border: 1px solid #fff; border-radius: 25px; font-size: 18px; color: #fff; background-color: transparent; outline: none;}
        .form-item button { width: 360px; height: 50px; border: 0; border-radius: 25px; font-size: 18px; color: #1f6f4a; outline: none; cursor: pointer; background-color: #fff; }
        #username::before { 
          position: absolute;
          content:'';
          height:40px;
          width:40px;
          top:0;
          border:solid 1px;
          display:block;
          background:#fff;
          // background: url('../../assets/img/icon/email.png') 20px 14px no-repeat;
          }
        #password { background: url('../../assets/img/icon/password.png') 23px 11px no-repeat; }
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
    .el-form-item__error{
      // background:#f44;
      color:#f44;
      letter-spacing: 1px;
      font-size:14px;
      margin-left:10px;
    }
    :-webkit-autofill {
 -webkit-text-fill-color: rgba($color: #fff, $alpha: 0.9) !important;
 -webkit-text-fill-background-color: rgba($color: #474a59, $alpha: 0.9) !important;
 transition: background-color 10000s ease-in-out 0s;
}
  }
</style>
