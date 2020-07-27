import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// vue国际化
const i18n = new VueI18n({
    locale: 'zh-CN', //语言标识
    message: {
      'zh-CN': require('./zh.js'),
      'en-US': require('./en.js')
    }
  })
  export default i18n