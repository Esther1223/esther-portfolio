<script setup>
import { useI18n } from '../composables/useI18n'
import { copy } from '../data/content'

const { t, lang } = useI18n()
</script>

<template>
  <section class="section" id="about">
    <div class="wrap reveal">
      <p class="eyebrow">{{ t(copy.about.eyebrow) }}</p>
      <h2 class="section-title">{{ t(copy.about.title) }}</h2>
      <p class="section-lead">{{ t(copy.about.body) }}</p>

      <ul class="traits">
        <li v-for="item in copy.about.traits" :key="item.zh">
          <strong>{{ item[lang] }}</strong>
          <span>{{ item.desc[lang] }}</span>
        </li>
      </ul>

      <div class="edu">
        <p class="edu-school">{{ t(copy.education.school) }}</p>
        <p class="edu-meta">{{ t(copy.education.meta) }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.traits {
  list-style: none;
  margin: 2.5rem 0 0;
  padding: 0;
  display: grid;
  gap: 1rem;
}

.traits li {
  display: grid;
  gap: 0.2rem;
  padding: 1.1rem 0;
  border-top: 1px solid var(--line);
}

.traits strong {
  font-size: 1.02rem;
}

.traits span {
  color: var(--muted);
}

.edu {
  margin-top: 2rem;
  padding-top: 1.4rem;
  border-top: 1px solid var(--line);
}

.edu-school {
  margin: 0;
  font-weight: 700;
}

.edu-meta {
  margin: 0.35rem 0 0;
  color: var(--muted);
  font-size: 0.92rem;
}

@media (min-width: 720px) {
  .traits {
    grid-template-columns: 1fr 1fr;
    gap: 0 2rem;
  }
}
</style>
