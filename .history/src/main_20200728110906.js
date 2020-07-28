import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引入element-UI
import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
// import '../theme/index.css'
import './styles.scss'
// 引入vue国际化
import i18n from './lang/index'
// 引入简单动画css
import animated from 'animate.css' 
// 拖拽弹窗
import elDragDialog from './directive/drag/index';
// import './element-variables.scss'
Vue.use(animated);
Vue.use(elDragDialog);
// Vue.use(ElementUI, { locale })
// Vue.use(ElementUI)
// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n)  //通过插件的形式挂载

// 引入element-UI 中英切换
Vue.prototype.rules = {
  name: { required: true, message: i18n.t('m.rules.account'), trigger: 'blur'},
  userName: { required: true, message: i18n.t('m.rules.account'), trigger: 'blur'},
  password: { required: true, message: i18n.t('m.rules.account'), trigger: 'blur'},
  gender: { required: true, message: i18n.t('m.rules.account'), trigger: 'blur'},
  // phone: { required: true, message: '联系方式为必填项', trigger: 'blur'},
};
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
// 数组删除方法
Array.prototype.delete = function(id) {
  let i = this.indexOf(id);
  this.splice(i, 1);
}
// rules el-form表格提交时的判别标准

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  rules,
  store,
  render: h => h(App)
}).$mount('#app')
