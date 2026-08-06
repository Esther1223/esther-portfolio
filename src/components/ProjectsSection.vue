<script setup>
import { useI18n } from '../composables/useI18n'
import { copy } from '../data/content'

const { t, lang } = useI18n()

const actionLabels = {
  demo: { zh: 'Demo', en: 'Demo' },
  github: { zh: 'GitHub', en: 'GitHub' },
  case: { zh: 'Case Study', en: 'Case Study' },
}
</script>

<template>
  <section class="section" id="projects">
    <div class="wrap reveal">
      <p class="eyebrow">{{ t(copy.projects.eyebrow) }}</p>
      <h2 class="section-title">{{ t(copy.projects.title) }}</h2>

      <div class="grid">
        <article
          v-for="(project, i) in copy.projects.items"
          :key="i"
          class="card"
          :class="{ accent: project.accent }"
        >
          <p class="subtitle">{{ project.subtitle[lang] }}</p>
          <h3>{{ project.name[lang] }}</h3>
          <p class="body">{{ project.body[lang] }}</p>

          <div class="stack">
            <span v-for="tech in project.stack" :key="tech">{{ tech }}</span>
          </div>

          <ul class="tags">
            <li v-for="tag in project.tags[lang]" :key="tag">{{ tag }}</li>
          </ul>

          <div class="actions">
            <template v-for="key in ['demo', 'github', 'case']" :key="key">
              <a
                v-if="project.links[key]"
                class="action"
                :href="project.links[key]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ actionLabels[key][lang] }}
              </a>
              <span v-else class="action muted">{{ actionLabels[key][lang] }}</span>
            </template>
          </div>
        </article>
      </div>

      <p class="note">{{ t(copy.projects.note) }}</p>
    </div>
  </section>
</template>

<style scoped>
.grid {
  margin-top: 2.5rem;
  display: grid;
  gap: 1rem;
}

.card {
  padding: 1.45rem 1.35rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--card);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--primary) 35%, var(--line));
  box-shadow: 0 18px 40px rgba(124, 92, 255, 0.12);
}

.card.accent {
  background:
    linear-gradient(135deg, rgba(124, 92, 255, 0.08), rgba(90, 169, 255, 0.05)),
    var(--card);
}

.subtitle {
  margin: 0 0 0.35rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--primary);
}

h3 {
  margin: 0;
  font-size: 1.35rem;
  letter-spacing: -0.02em;
}

.body {
  margin: 0.7rem 0 0;
  color: var(--muted);
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1rem;
}

.stack span {
  padding: 0.28rem 0.6rem;
  border-radius: 0.45rem;
  background: color-mix(in srgb, var(--ink) 5%, transparent);
  font-size: 0.78rem;
  font-weight: 700;
}

.tags {
  list-style: none;
  margin: 0.9rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem 1rem;
  color: var(--muted);
  font-size: 0.88rem;
}

.tags li::before {
  content: '·';
  margin-right: 0.45rem;
  color: var(--secondary);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.15rem;
  padding-top: 1rem;
  border-top: 1px solid var(--line);
  opacity: 0.55;
  transition: opacity 0.2s ease;
}

.card:hover .actions {
  opacity: 1;
}

.action {
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--primary);
}

.action.muted {
  color: var(--muted);
  cursor: default;
}

.note {
  margin: 1.5rem 0 0;
  color: var(--muted);
  font-size: 0.92rem;
}

@media (min-width: 860px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
