<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const props = defineProps({
  project: { type: Object, required: true },
})

const { lang } = useI18n()
const base = import.meta.env.BASE_URL

const actionLabels = {
  demo: { zh: 'Demo', en: 'Demo' },
  github: { zh: 'GitHub', en: 'GitHub' },
  report: { zh: '報告', en: 'Report' },
  poster: { zh: 'Poster', en: 'Poster' },
}

const visibleMetrics = computed(() =>
  (props.project.metrics || []).filter((item) => item.value)
)

const figures = computed(() => props.project.figures || [])

const standaloneFigures = computed(() => figures.value.filter((fig) => fig.standalone))

const galleryFigures = computed(() => figures.value.filter((fig) => !fig.standalone))

const previewGallery = computed(() => {
  if (!galleryFigures.value.length) return null
  return {
    fig: galleryFigures.value[0],
    count: galleryFigures.value.length,
  }
})

const visibleActions = computed(() =>
  ['demo', 'github', 'report', 'poster'].filter((key) => props.project.links?.[key])
)

const lightboxIndex = ref(-1)
const lightboxSet = ref('gallery') // 'gallery' | 'standalone'

const lightboxList = computed(() =>
  lightboxSet.value === 'standalone' ? standaloneFigures.value : galleryFigures.value
)

const lightbox = computed(() => {
  if (lightboxIndex.value < 0) return null
  const fig = lightboxList.value[lightboxIndex.value]
  if (!fig) return null
  return {
    src: `${base}${fig.src}`,
    caption: fig.caption[lang.value],
    index: lightboxIndex.value,
    total: lightboxList.value.length,
  }
})

const canPrev = computed(() => lightboxIndex.value > 0)
const canNext = computed(
  () => lightboxIndex.value >= 0 && lightboxIndex.value < lightboxList.value.length - 1
)

function resolveHref(href) {
  if (!href) return ''
  if (/^(https?:|mailto:)/i.test(href)) return href
  return `${base}${href.replace(/^\//, '')}`
}

function openGallery(index = 0) {
  lightboxSet.value = 'gallery'
  lightboxIndex.value = index
  document.body.style.overflow = 'hidden'
}

function openStandalone(index) {
  lightboxSet.value = 'standalone'
  lightboxIndex.value = index
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxIndex.value = -1
  document.body.style.overflow = ''
}

function showPrev() {
  if (canPrev.value) lightboxIndex.value -= 1
}

function showNext() {
  if (canNext.value) lightboxIndex.value += 1
}

function onKeydown(e) {
  if (lightboxIndex.value < 0) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') showPrev()
  if (e.key === 'ArrowRight') showNext()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <article class="case" :class="{ accent: project.accent }" :id="`project-${project.id}`">
    <p class="category">{{ project.category[lang] }}</p>
    <p v-if="project.period" class="period">{{ project.period[lang] }}</p>
    <h3>{{ project.name[lang] }}</h3>
    <p class="lead">{{ project.lead[lang] }}</p>

    <div v-if="project.stack?.length" class="stack">
      <span v-for="tech in project.stack" :key="tech">{{ tech }}</span>
    </div>

    <ul v-if="project.tags?.[lang]?.length" class="tags">
      <li v-for="tag in project.tags[lang]" :key="tag">{{ tag }}</li>
    </ul>

    <dl v-if="project.blocks?.length" class="blocks">
      <div v-for="(block, i) in project.blocks" :key="i" class="block">
        <dt>{{ block.label[lang] }}</dt>
        <dd v-if="block.body">{{ block.body[lang] }}</dd>
        <dd v-else-if="block.items">
          <ul>
            <li v-for="(item, j) in block.items" :key="j">{{ item[lang] }}</li>
          </ul>
        </dd>
      </div>
    </dl>

    <div v-if="visibleMetrics.length" class="metrics">
      <div v-for="(item, i) in visibleMetrics" :key="i">
        <strong>{{ item.value }}</strong>
        <span>{{ item.label[lang] }}</span>
      </div>
    </div>

    <div v-if="standaloneFigures.length || previewGallery" class="gallery">
      <figure v-for="(fig, i) in standaloneFigures" :key="fig.src">
        <button type="button" class="thumb" @click="openStandalone(i)">
          <img :src="base + fig.src" :alt="fig.caption[lang]" />
        </button>
        <figcaption>{{ fig.caption[lang] }}</figcaption>
      </figure>

      <figure v-if="previewGallery" class="gallery-preview">
        <button type="button" class="thumb" @click="openGallery(0)">
          <img :src="base + previewGallery.fig.src" :alt="previewGallery.fig.caption[lang]" />
          <span v-if="previewGallery.count > 1" class="more-badge">
            {{ previewGallery.count }} {{ lang === 'zh' ? '張' : 'photos' }}
          </span>
        </button>
        <figcaption>
          {{ previewGallery.fig.caption[lang] }}
          <span v-if="previewGallery.count > 1" class="more-hint">
            · {{ lang === 'zh' ? '點擊查看全部' : 'Click to browse all' }}
          </span>
        </figcaption>
      </figure>
    </div>

    <div v-if="visibleActions.length" class="actions">
      <a
        v-for="key in visibleActions"
        :key="key"
        class="action"
        :href="resolveHref(project.links[key])"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ actionLabels[key][lang] }}
      </a>
    </div>
  </article>

  <Teleport to="body">
    <div
      v-if="lightbox"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="lightbox.caption"
      @click="closeLightbox"
    >
      <button type="button" class="close" aria-label="Close" @click="closeLightbox">×</button>

      <button
        v-if="lightbox.total > 1"
        type="button"
        class="nav prev"
        :disabled="!canPrev"
        aria-label="Previous"
        @click.stop="showPrev"
      >
        ‹
      </button>
      <button
        v-if="lightbox.total > 1"
        type="button"
        class="nav next"
        :disabled="!canNext"
        aria-label="Next"
        @click.stop="showNext"
      >
        ›
      </button>

      <figure class="lightbox-figure" @click.stop>
        <img :src="lightbox.src" :alt="lightbox.caption" />
        <figcaption>
          <span v-if="lightbox.total > 1" class="count">{{ lightbox.index + 1 }} / {{ lightbox.total }}</span>
          {{ lightbox.caption }}
        </figcaption>
      </figure>
    </div>
  </Teleport>
</template>

<style scoped>
.case {
  scroll-margin-top: calc(var(--header-h) + 1rem);
  padding: 1.6rem 1.4rem 1.45rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--card);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
}

.case.accent {
  background:
    linear-gradient(135deg, rgba(124, 92, 255, 0.08), rgba(90, 169, 255, 0.05)),
    var(--card);
}

.category {
  margin: 0 0 0.25rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--primary);
}

.period {
  margin: 0 0 0.45rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--muted);
  letter-spacing: 0.02em;
}

h3 {
  margin: 0;
  font-size: clamp(1.25rem, 2.4vw, 1.6rem);
  letter-spacing: -0.02em;
}

.lead {
  margin: 0.75rem 0 0;
  color: var(--muted);
  max-width: 46rem;
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

.blocks {
  display: grid;
  gap: 0;
  margin: 1.35rem 0 0;
}

.block {
  padding: 1.05rem 0;
  border-top: 1px solid var(--line);
}

.block dt {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--primary);
}

.block dd {
  margin: 0.35rem 0 0;
  color: var(--muted);
}

.block ul {
  margin: 0;
  padding-left: 1.1rem;
}

.block li + li {
  margin-top: 0.3rem;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.85rem;
  margin-top: 1.35rem;
}

.metrics div {
  padding: 0.9rem 0.95rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
}

.metrics strong {
  display: block;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}

.metrics span {
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 600;
}

.gallery {
  display: grid;
  gap: 1rem;
  margin-top: 1.35rem;
}

@media (min-width: 800px) {
  .gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

figure {
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
}

.thumb {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: zoom-in;
}

.thumb img {
  width: 100%;
  height: auto;
  transition: transform 0.25s ease;
}

.thumb:hover img {
  transform: scale(1.02);
}

.more-badge {
  position: absolute;
  right: 0.7rem;
  bottom: 0.7rem;
  padding: 0.28rem 0.6rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.78);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.more-hint {
  color: var(--primary);
  font-weight: 700;
}

figcaption {
  padding: 0.7rem 0.85rem;
  color: var(--ink);
  font-size: 0.82rem;
  font-weight: 600;
  opacity: 0.78;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.15rem;
  padding-top: 1rem;
  border-top: 1px solid var(--line);
}

.action {
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--primary);
}

@media (min-width: 800px) {
  .blocks {
    grid-template-columns: 1fr 1fr;
    gap: 0 2rem;
  }
}
</style>

<style>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: center;
  padding: 1.25rem;
  background: rgba(15, 23, 42, 0.78);
  backdrop-filter: blur(8px);
}

.lightbox .close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
}

.lightbox .nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
}

.lightbox .nav:disabled {
  opacity: 0.28;
  cursor: default;
}

.lightbox .nav.prev {
  left: 0.85rem;
}

.lightbox .nav.next {
  right: 0.85rem;
}

.lightbox-figure {
  margin: 0;
  max-width: min(1100px, 100%);
  max-height: calc(100vh - 2.5rem);
  display: grid;
  gap: 0.75rem;
  justify-items: center;
}

.lightbox-figure img {
  max-width: 100%;
  max-height: calc(100vh - 5.5rem);
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
}

.lightbox-figure figcaption {
  max-width: 100%;
  padding: 0.55rem 0.95rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.96);
  color: #0f172a;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.4;
}

.lightbox-figure .count {
  display: inline-block;
  margin-right: 0.55rem;
  color: #64748b;
  font-weight: 700;
}

html[data-theme='dark'] .lightbox-figure figcaption {
  background: rgba(15, 23, 42, 0.92);
  color: #f8fafc;
}

html[data-theme='dark'] .lightbox-figure .count {
  color: #94a3b8;
}
</style>
