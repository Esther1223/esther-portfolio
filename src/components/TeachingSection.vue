<script setup>
import { useI18n } from '../composables/useI18n'
import { copy } from '../data/content'

const { t, lang } = useI18n()
</script>

<template>
  <section class="section" id="teaching">
    <div class="wrap reveal">
      <p class="eyebrow">{{ t(copy.teaching.eyebrow) }}</p>
      <h2 class="section-title">{{ t(copy.teaching.title) }}</h2>
      <p class="section-lead">{{ t(copy.teaching.body) }}</p>

      <div class="items">
        <article v-for="(item, i) in copy.teaching.items" :key="i">
          <h3>{{ item.title[lang] }}</h3>
          <p>{{ item.desc[lang] }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.items {
  margin-top: 2.25rem;
  display: grid;
  gap: 1rem;
}

article {
  padding: 1.35rem 0;
  border-top: 1px solid var(--line);
}

h3 {
  margin: 0 0 0.45rem;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}

p {
  margin: 0;
  color: var(--muted);
}

@media (min-width: 800px) {
  .items {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}
</style>
