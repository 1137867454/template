import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import echarts from 'echarts'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$axios = axios;
Vue.use(VueAxios, axios);

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
import rules from './utils/rules';
// import './element-variables.scss'
import VeCharts from 've-charts'

Vue.use(VeCharts)
console.log(rules)
Vue.use(animated);
Vue.use(elDragDialog);
// Vue.use(ElementUI, { locale })
// Vue.use(ElementUI)
// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n)  //通过插件的形式挂载

// 引入element-UI 中英切换
Vue.prototype.rules = rules;

Vue.prototype.$echarts = echarts;

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
  store,
  echarts,
  render: h => h(App)
}).$mount('#app')
