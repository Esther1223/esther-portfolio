<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useTheme } from '../composables/useTheme'
import { copy } from '../data/content'

const { lang, toggleLang, t } = useI18n()
const { theme, toggleTheme } = useTheme()

const nav = computed(() => [
  { href: '#about', label: t(copy.nav.about) },
  { href: '#projects', label: t(copy.nav.projects) },
  { href: '#experience', label: t(copy.nav.experience) },
  { href: '#stack', label: t(copy.nav.stack) },
  { href: '#education', label: t(copy.nav.education) },
  { href: '#beyond', label: t(copy.nav.beyond) },
  { href: '#contact', label: t(copy.nav.contact) },
])
</script>

<template>
  <header class="header">
    <div class="wrap header-inner">
      <a class="logo" href="#top" aria-label="Esther Liu">
        <!-- <span class="logo-mark">EL</span> -->
        <span class="logo-text">劉育均 Esther Liu</span>
      </a>

      <nav class="nav" aria-label="Primary">
        <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <div class="controls">
        <button type="button" class="control" @click="toggleLang">
          {{ lang === 'zh' ? 'EN' : '中文' }}
        </button>
        <button
          type="button"
          class="control"
          :aria-label="theme === 'dark' ? 'Light mode' : 'Dark mode'"
          @click="toggleTheme"
        >
          <span class="theme-dot" :data-mode="theme" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(16px);
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  border-bottom: 1px solid var(--line);
}

.header-inner {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  min-height: var(--header-h);
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
  font-weight: 800;
}

.logo-mark {
  display: grid;
  place-items: center;
  width: 2.15rem;
  height: 2.15rem;
  border-radius: 0.65rem;
  border: 1px solid color-mix(in srgb, var(--primary) 45%, var(--line));
  background: color-mix(in srgb, var(--primary) 12%, transparent);
  color: var(--primary);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
}

.logo-text {
  letter-spacing: -0.02em;
}

.nav {
  display: none;
  justify-content: center;
  gap: 0.85rem;
}

.nav a {
  text-decoration: none;
  color: var(--muted);
  font-size: 0.86rem;
  font-weight: 600;
  transition: color 0.2s ease;
}

.nav a:hover {
  color: var(--ink);
}

.controls {
  display: flex;
  gap: 0.45rem;
}

.control {
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0 0.7rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
  color: var(--ink);
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.control:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--primary) 40%, var(--line));
}

.theme-dot {
  display: block;
  width: 0.85rem;
  height: 0.85rem;
  margin: 0 auto;
  border-radius: 50%;
  background: var(--ink);
  box-shadow: inset -0.28rem -0.08rem 0 0 var(--bg-elevated);
}

.theme-dot[data-mode='dark'] {
  box-shadow: none;
  background: radial-gradient(circle at 30% 30%, #fde68a 0 28%, transparent 29%),
    radial-gradient(circle at 70% 65%, #fde68a 0 10%, transparent 11%), #fde68a;
}

@media (min-width: 900px) {
  .nav {
    display: flex;
  }
}
</style>
