<script setup>
import { useI18n } from '../composables/useI18n'
import { copy } from '../data/content'

const { t, lang } = useI18n()
</script>

<template>
  <section class="section" id="experience">
    <div class="wrap reveal">
      <p class="eyebrow">{{ t(copy.experience.eyebrow) }}</p>
      <h2 class="section-title">{{ t(copy.experience.title) }}</h2>

      <ol class="timeline">
        <li v-for="(item, i) in copy.experience.items" :key="i">
          <div class="meta">
            <time>{{ item.dates[lang] }}</time>
            <span>{{ item.org[lang] }}</span>
          </div>
          <h3>{{ item.role[lang] }}</h3>
          <ul>
            <li v-for="(point, j) in item.points" :key="j">{{ point[lang] }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 2.5rem 0 0;
  padding: 0;
  display: grid;
  gap: 2rem;
}

.timeline > li {
  padding-top: 1.4rem;
  border-top: 1px solid var(--line);
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 1rem;
  margin-bottom: 0.45rem;
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 600;
}

h3 {
  margin: 0 0 0.8rem;
  font-size: 1.3rem;
  letter-spacing: -0.02em;
}

ul {
  margin: 0;
  padding-left: 1.15rem;
  color: var(--muted);
}

ul li + li {
  margin-top: 0.4rem;
}
</style>
