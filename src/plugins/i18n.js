import { createI18n } from 'vue-i18n/index'
import pl from '../translations/pl.json'
import en from '../translations/en.json'

export default createI18n({
  legacy: false,
  locale: 'pl',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  globalInjection: true,
  messages: {
    en: en,
    pl: pl
  }
})