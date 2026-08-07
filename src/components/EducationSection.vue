<script setup>
import { useI18n } from '../composables/useI18n'
import { copy } from '../data/content'

const { t, lang } = useI18n()
</script>

<template>
  <section class="section" id="education">
    <div class="wrap reveal">
      <p class="eyebrow">{{ t(copy.education.eyebrow) }}</p>
      <h2 class="section-title">{{ t(copy.education.title) }}</h2>

      <div class="edu">
        <p class="school">{{ t(copy.education.school) }}</p>
        <p class="dept">{{ t(copy.education.dept) }}</p>
        <p class="years">{{ t(copy.education.years) }}</p>
        <ul class="meta">
          <li v-for="(item, i) in copy.education.meta" :key="i">{{ item[lang] }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu {
  margin-top: 2rem;
  padding-top: 1.4rem;
  border-top: 1px solid var(--line);
  max-width: 36rem;
}

.school {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.dept {
  margin: 0.4rem 0 0;
  color: var(--muted);
  font-weight: 600;
}

.years {
  margin: 0.35rem 0 0;
  color: var(--muted);
  font-size: 0.92rem;
}

.meta {
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem 1.25rem;
  color: var(--ink);
  font-size: 0.95rem;
  font-weight: 600;
}
</style>
