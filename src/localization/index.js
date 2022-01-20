import VueI18n from 'vue-i18n'
import en from './i18n/en'
import Vue from 'vue'

Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'en', // set locale
    messages: {en},
    silentFallbackWarn: false
})
export default i18n