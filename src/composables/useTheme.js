import { ref, watchEffect } from 'vue'

const stored = localStorage.getItem('el-theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const theme = ref(stored === 'light' || stored === 'dark' ? stored : prefersDark ? 'dark' : 'light')

export function useTheme() {
  function setTheme(next) {
    theme.value = next
    localStorage.setItem('el-theme', next)
  }

  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
  })

  return { theme, setTheme, toggleTheme }
}
