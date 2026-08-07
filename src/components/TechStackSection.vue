<script setup>
import { useI18n } from '../composables/useI18n'
import { copy } from '../data/content'

const { t, lang } = useI18n()
</script>

<template>
  <section class="section" id="stack">
    <div class="wrap reveal">
      <p class="eyebrow">{{ t(copy.stack.eyebrow) }}</p>
      <h2 class="section-title">{{ t(copy.stack.title) }}</h2>
      <p class="section-lead">{{ t(copy.stack.lead) }}</p>

      <div class="groups">
        <div v-for="group in copy.stack.groups" :key="group.title.en" class="group">
          <h3 :class="{ ai: group.title.en === 'AI' }">{{ group.title[lang] }}</h3>
          <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.groups {
  margin-top: 2.5rem;
  display: grid;
  gap: 1.5rem;
}

.group {
  padding-top: 1.2rem;
  border-top: 1px solid var(--line);
}

h3 {
  margin: 0 0 0.75rem;
  font-size: 1rem;
  letter-spacing: -0.01em;
}

h3.ai {
  background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

li {
  padding: 0.45rem 0.75rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--line);
  background: var(--bg-elevated);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--muted);
}

@media (min-width: 800px) {
  .groups {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }

  .group {
    padding-top: 0;
    border-top: 0;
    border-left: 1px solid var(--line);
    padding-left: 1.15rem;
  }

  .group:first-child {
    border-left: 0;
    padding-left: 0;
  }
}
</style>
