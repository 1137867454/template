import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import '../theme/index.css'
import './styles.scss'
// 拖拽弹窗
import elDragDialog from './directive/drag/index';

// import './element-variables.scss'
 Vue.use(elDragDialog);
Vue.use(ElementUI, { locale })
Array.prototype.delete = function(id) {
  let i = this.indexOf(id);
  this.splice(i, 1);
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
