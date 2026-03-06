<template>
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <GitHubSection />
    <ClusterSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import GitHubSection from './components/GitHubSection.vue'
import ClusterSection from './components/ClusterSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>
