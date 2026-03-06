<template>
  <nav class="navbar" :class="{ scrolled }">
    <div class="container nav-inner">
      <a href="#" class="nav-logo">
        <span class="gradient-text">frnc</span>.dev
      </a>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#github">GitHub</a>
        <a href="#cluster">Cluster</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="https://github.com/Francesco070" target="_blank" rel="noopener" class="nav-cta">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        GitHub
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 20px 0;
  transition: all 0.3s;
  border-bottom: 1px solid transparent;
}
.navbar.scrolled {
  background: rgba(8,11,20,0.85);
  backdrop-filter: blur(20px);
  border-color: var(--border);
  padding: 14px 0;
}
.nav-inner { display: flex; align-items: center; gap: 40px; }
.nav-logo {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
}
.nav-links { display: flex; gap: 28px; margin-left: auto; }
.nav-links a {
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--text); }
.nav-cta {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 100px;
  border: 1px solid var(--border-hover);
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s;
}
.nav-cta:hover { border-color: var(--accent); color: var(--accent); }
@media (max-width: 700px) { .nav-links { display: none; } }
</style>
