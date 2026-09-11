<script setup>
import { useI18n } from '../composables/useI18n'
import { copy, links } from '../data/content'

const { t } = useI18n()

function onRipple(e) {
  const btn = e.currentTarget
  const rect = btn.getBoundingClientRect()
  btn.style.setProperty('--x', `${e.clientX - rect.left}px`)
  btn.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section class="section contact" id="contact">
    <div class="wrap reveal">
      <p class="eyebrow">{{ t(copy.contact.eyebrow) }}</p>
      <h2 class="section-title">{{ t(copy.contact.title) }}</h2>

      <div class="links">
        <a class="btn btn-primary btn-ripple" :href="links.email" @pointerdown="onRipple">
          {{ links.emailLabel }}
        </a>
        <a
          class="btn btn-primary btn-ripple"
          :href="links.github"
          target="_blank"
          rel="noopener noreferrer"
          @pointerdown="onRipple"
        >
          {{ links.githubLabel }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding-bottom: 5rem;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}
</style>
