<script setup>
import { useI18n } from '../composables/useI18n'
import { copy } from '../data/content'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wrap">
      <p>© {{ year }} Esther Liu · 劉育均</p>
      <p class="note">{{ t(copy.footer.note) }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 1.5rem 0 2.5rem;
  border-top: 1px solid var(--line);
}

.wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
}

p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
  font-weight: 600;
}

.note {
  color: var(--primary);
}
</style>
