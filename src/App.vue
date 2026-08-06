<script setup>
import { onMounted } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import TeachingSection from './components/TeachingSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

onMounted(() => {
  const nodes = document.querySelectorAll('.reveal')
  if (!('IntersectionObserver' in window)) {
    nodes.forEach((el) => el.classList.add('is-visible'))
    return
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  )
  nodes.forEach((el) => observer.observe(el))
})
</script>

<template>
  <a class="skip-link" href="#main">Skip</a>
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <TechStackSection />
    <TeachingSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
