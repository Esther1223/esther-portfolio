import { computed, ref, watchEffect } from 'vue'

const stored = localStorage.getItem('el-lang')
const lang = ref(stored === 'en' || stored === 'zh' ? stored : 'zh')

export function useI18n() {
  const isZh = computed(() => lang.value === 'zh')

  function setLang(next) {
    lang.value = next
    localStorage.setItem('el-lang', next)
  }

  function toggleLang() {
    setLang(lang.value === 'zh' ? 'en' : 'zh')
  }

  /** Reactive translate helper — call inside template or computed */
  function t(dict) {
    return dict[lang.value] ?? dict.zh ?? ''
  }

  watchEffect(() => {
    document.documentElement.setAttribute('lang', lang.value === 'en' ? 'en' : 'zh-Hant')
  })

  return { lang, isZh, setLang, toggleLang, t }
}
