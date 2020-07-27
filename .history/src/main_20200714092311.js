import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
// import '../theme/index.css'
import './styles.scss'
import i18n from './lang/index'

// 拖拽弹窗
import elDragDialog from './directive/drag/index';

// import './element-variables.scss'
Vue.use(elDragDialog);
// Vue.use(ElementUI, { locale })
Vue.use(ElementUI)
// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n)  //通过插件的形式挂载

Array.prototype.delete = function(id) {
  let i = this.indexOf(id);
  this.splice(i, 1);
}
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
