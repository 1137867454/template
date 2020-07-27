import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import '../theme/index.css'
import './styles.scss'
// 拖拽弹
import elDragDialog from './directive/el-dragDialog/index';窗
// import './element-variables.scss'
 Vue.use(elDragDialog);
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
