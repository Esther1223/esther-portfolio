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

      <h3 class="traits-title">{{ t(copy.about.traitsTitle) }}</h3>
      <ul class="traits">
        <li v-for="item in copy.about.traits" :key="item.zh">
          <strong>{{ item[lang] }}</strong>
          <span>{{ item.desc[lang] }}</span>
        </li>
      </ul>

      <h3 class="journey-title">{{ t(copy.about.journeyTitle) }}</h3>
      <ol class="journey">
        <li v-for="step in copy.about.journey" :key="step.year">
          <span class="year">{{ step.year }}</span>
          <span class="label">{{ step.label[lang] }}</span>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.traits-title,
.journey-title {
  margin: 2.5rem 0 0;
  font-size: 1.05rem;
  font-weight: 700;
}

.traits {
  list-style: none;
  margin: 0.75rem 0 0;
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

.journey {
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
  display: grid;
  gap: 0;
}

.journey li {
  display: grid;
  grid-template-columns: 4.5rem 1fr;
  gap: 1rem;
  align-items: baseline;
  padding: 0.85rem 0;
  border-top: 1px solid var(--line);
}

.journey li:last-child {
  border-bottom: 1px solid var(--line);
}

.year {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 0.02em;
}

.label {
  color: var(--muted);
  font-weight: 500;
}

@media (min-width: 720px) {
  .traits {
    grid-template-columns: 1fr 1fr;
    gap: 0 2rem;
  }

  .journey {
    margin-top: 1.25rem;
  }
}
</style>
