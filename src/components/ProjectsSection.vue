<script setup>
import { useI18n } from '../composables/useI18n'
import { copy } from '../data/content'
import CaseStudy from './CaseStudy.vue'

const { t, lang } = useI18n()

const academic = copy.projects.cases.filter((item) => item.id === 'vision' || item.id === 'campus')
const industry = copy.projects.cases.filter((item) => item.id === 'lms' || item.id === 'hr')
</script>

<template>
  <section class="section" id="projects">
    <div class="wrap">
      <div class="reveal">
        <p class="eyebrow">{{ t(copy.projects.eyebrow) }}</p>
        <h2 class="section-title">{{ t(copy.projects.title) }}</h2>
        <p class="section-lead">{{ t(copy.projects.lead) }}</p>

        <nav class="jump" aria-label="Project shortcuts">
          <a v-for="item in copy.projects.jump" :key="item.href" :href="item.href">
            {{ item[lang] }}
          </a>
        </nav>
      </div>

      <h3 class="subhead reveal">{{ t(copy.projects.academicTitle) }}</h3>
      <div class="cases">
        <CaseStudy v-for="project in academic" :key="project.id" class="reveal" :project="project" />
      </div>

      <h3 class="subhead reveal">{{ t(copy.projects.industryTitle) }}</h3>
      <div class="cases">
        <CaseStudy v-for="project in industry" :key="project.id" class="reveal" :project="project" />
      </div>

      <h3 class="subhead reveal">{{ t(copy.projects.othersTitle) }}</h3>
      <div class="grid">
        <article v-for="(project, i) in copy.projects.others" :key="i" class="card reveal">
          <p class="period">{{ project.period[lang] }}</p>
          <p class="subtitle">{{ project.subtitle[lang] }}</p>
          <h4>{{ project.name[lang] }}</h4>
          <p class="body">{{ project.body[lang] }}</p>

          <div class="stack">
            <span v-for="tech in project.stack" :key="tech">{{ tech }}</span>
          </div>

          <ul class="tags">
            <li v-for="tag in project.tags[lang]" :key="tag">{{ tag }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jump {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1.15rem;
  margin-top: 1.25rem;
}

.jump a {
  color: var(--primary);
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 700;
}

.jump a:hover {
  text-decoration: underline;
}

.subhead {
  margin: 2.75rem 0 1rem;
  font-size: 1.05rem;
  font-weight: 700;
}

.cases {
  display: grid;
  gap: 1rem;
}

.grid {
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

.period {
  margin: 0 0 0.35rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--muted);
  letter-spacing: 0.02em;
}

.subtitle {
  margin: 0 0 0.35rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--primary);
}

h4 {
  margin: 0;
  font-size: 1.2rem;
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
