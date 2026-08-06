<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'
import { copy } from '../data/content'

const { t } = useI18n()

const portraitSrc = computed(() => `${import.meta.env.BASE_URL}portrait.jpg`)

function onPortraitError(e) {
  e.target.style.display = 'none'
  e.target.parentElement?.classList.add('is-empty')
}

function onRipple(e) {
  const btn = e.currentTarget
  const rect = btn.getBoundingClientRect()
  btn.style.setProperty('--x', `${e.clientX - rect.left}px`)
  btn.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section class="hero" id="top">
    <div class="aurora" aria-hidden="true">
      <span class="blob blob-a" />
      <span class="blob blob-b" />
      <span class="blob blob-c" />
    </div>

    <div class="wrap hero-grid">
      <div class="hero-copy">
        <p class="greeting">{{ t(copy.hero.greeting) }}</p>
        <h1>{{ t(copy.hero.title) }}</h1>
        <p class="lead">{{ t(copy.hero.lead) }}</p>
        <p class="roles">{{ t(copy.hero.roles) }}</p>
        <a class="btn btn-primary btn-ripple" href="#projects" @pointerdown="onRipple">
          {{ t(copy.hero.cta) }}
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div class="hero-visual">
        <div class="portrait">
          <img
            :src="portraitSrc"
            alt=""
            width="640"
            height="800"
            @error="onPortraitError"
          />
          <div class="portrait-empty">{{ t(copy.hero.photo) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: calc(100svh - var(--header-h));
  display: grid;
  align-items: center;
  padding: 2.5rem 0 3.5rem;
}

.aurora {
  position: absolute;
  inset: -10% -5% auto -5%;
  height: 85%;
  z-index: -1;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.9;
  animation: drift 40s ease-in-out infinite;
}

.blob-a {
  width: 42vw;
  height: 42vw;
  max-width: 520px;
  max-height: 520px;
  left: 8%;
  top: 10%;
  background: var(--glow-a);
}

.blob-b {
  width: 36vw;
  height: 36vw;
  max-width: 420px;
  max-height: 420px;
  right: 12%;
  top: 18%;
  background: var(--glow-b);
  animation-delay: -12s;
}

.blob-c {
  width: 30vw;
  height: 30vw;
  max-width: 360px;
  max-height: 360px;
  left: 38%;
  bottom: 0;
  background: var(--glow-c);
  animation-delay: -22s;
}

.hero-grid {
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

.greeting {
  margin: 0 0 0.85rem;
  font-size: clamp(1.35rem, 2.8vw, 1.9rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  animation: rise 0.8s ease both;
}

h1 {
  margin: 0;
  max-width: 14ch;
  font-size: clamp(2.05rem, 5.2vw, 3.55rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.08;
  animation: rise 0.8s ease both 0.1s;
}

.lead {
  margin: 1.15rem 0 0;
  max-width: 34rem;
  color: var(--muted);
  font-size: 1.05rem;
  animation: rise 0.8s ease both 0.18s;
}

.roles {
  margin: 1.1rem 0 0;
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--primary);
  animation: rise 0.8s ease both 0.24s;
}

.btn {
  margin-top: 2rem;
  animation: rise 0.8s ease both 0.32s;
}

.hero-visual {
  justify-self: center;
  width: min(100%, 380px);
}

.portrait {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: calc(var(--radius) + 4px);
  overflow: hidden;
  border: 1px solid var(--line);
  background:
    linear-gradient(160deg, rgba(124, 92, 255, 0.2), transparent 45%),
    linear-gradient(20deg, rgba(90, 169, 255, 0.18), transparent 40%),
    var(--bg-elevated);
  box-shadow: var(--shadow);
  animation: rise 0.9s ease both 0.2s;
}

.portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portrait-empty {
  display: none;
  position: absolute;
  inset: 0;
  place-items: center;
  padding: 1.5rem;
  text-align: center;
  color: var(--muted);
  font-weight: 600;
}

.portrait.is-empty .portrait-empty {
  display: grid;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes drift {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(4%, -3%) scale(1.05);
  }
  66% {
    transform: translate(-3%, 4%) scale(0.96);
  }
}

@media (min-width: 960px) {
  .hero-grid {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 3rem;
  }

  .hero-visual {
    justify-self: end;
    width: min(100%, 420px);
  }
}
</style>
