import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(VueI18n)
// vue国际化
const i18n = new VueI18n({
    locale: 'zh', //语言标识
    messages: {
      zh: {
        ...require('./zh.js'),
        ...enLocale
    }, //中文语言包
      en: Object.assign(require('./en.js'), zhLocale)  //英文语言包
    }
  })
  export default i18n