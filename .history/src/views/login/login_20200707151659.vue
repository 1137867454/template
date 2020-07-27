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
              <!-- <el-form-item prop="account">
                    <el-input v-model="form.account" prefix-icon="el-icon-user el"></el-input>
                </el-form-item> -->
              <label class="text_left" for="email">用户名</label>
              <el-form-item prop="username">
                <input autofocus
                  id="email"
                  v-model="form.username"
                  type="text"
                >
              </el-form-item>
              <label class="text_left" for="password">密码</label>
              <el-form-item prop="password" style="margin-top:-8px !important;">
                <input @keydown.enter="login('form')"
                  id="password"
                  v-model="form.password"
                  type="password"
                >
              </el-form-item>
              <!-- <input type="password" > -->
              <!-- <input type="submit"  value="登陆"> -->
              <el-button
                id="submit"
                style="border:none;background: transparent;
                    border: 0;color: #f2f2f2;font-size: 20px;height: 30px;margin-top:26px;
                    outline: none !important;width: 100%;"
                @click="login('form')"
              >
                登陆
              </el-button>
            </el-form>
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
<style lang="scss" scoped>
  // @import url('../../assets/css/style.css');
  #login{
    height:100%;
    background:#000;
    background-image: url('../../assets/img/1.jpg');
    .dowebok {
    transform: scale(0.8);
    background:rgba(255, 255, 255, 0.2);
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
        #username { background: url('../../assets/img/icon/email.png') 20px 14px no-repeat; }
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
  }
</style>
