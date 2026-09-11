<script setup>
import { useI18n } from '../composables/useI18n'
import { copy } from '../data/content'

const { t, lang } = useI18n()
</script>

<template>
  <section class="section" id="beyond">
    <div class="wrap reveal">
      <p class="eyebrow">{{ t(copy.beyond.eyebrow) }}</p>
      <h2 class="section-title">{{ t(copy.beyond.title) }}</h2>
      <p class="section-lead">{{ t(copy.beyond.body) }}</p>

      <div class="items">
        <article v-for="(item, i) in copy.beyond.items" :key="i">
          <p class="label">{{ item.label[lang] }}</p>
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

.label {
  margin: 0 0 0.35rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 0.02em;
}

h3 {
  margin: 0 0 0.45rem;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}

article > p:last-child {
  margin: 0;
  color: var(--muted);
}

@media (min-width: 800px) {
  .items {
    grid-template-columns: 1fr 1fr;
    gap: 0 2rem;
  }
}
</style>
