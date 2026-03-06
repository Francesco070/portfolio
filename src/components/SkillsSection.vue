<template>
  <section class="section" id="skills">
    <div class="container">
      <p class="section-tag">Expertise</p>
      <h2 class="section-title">Skills & <span class="gradient-text">Technologies</span></h2>
      <p class="section-subtitle">Tools and technologies I work with daily</p>

      <div class="skills-grid">
        <div v-for="cat in skills" :key="cat.category" class="card skill-card">
          <div class="skill-header">
            <span class="skill-emoji">{{ cat.icon }}</span>
            <h3 class="skill-category">{{ cat.category }}</h3>
          </div>
          <div class="skill-items">
            <span v-for="item in cat.items" :key="item" class="skill-badge">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  {
    category: 'DevOps & Cloud',
    icon: '☸️',
    items: ['Kubernetes', 'ArgoCD', 'GitOps', 'Helm', 'Harbor', 'Gardener', 'External Secrets', 'HAProxy'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Node.js', 'HonoJS', 'TypeScript', 'PHP', 'Symfony', 'PostgreSQL', 'MariaDB', 'MongoDB', 'JAVA', 'Golang'],
  },
  {
    category: 'Frontend',
    icon: '🖖',
    items: ['Vue.js', 'React', 'TypeScript', 'Vite', 'HTML', 'CSS'],
  },
  {
    category: 'Infrastructure',
    icon: '🏗️',
    items: ['Docker', 'GitLab CI', 'GitHub Workflow', 'Nginx', 'NixOS', 'Linux'],
  },
]
</script>

<style scoped>
.section-tag { color: var(--accent-2) !important; }
.skills-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; }
.skill-card { display: flex; flex-direction: column; gap: 16px; }
.skill-header { display: flex; align-items: center; gap: 10px; }
.skill-emoji { font-size: 1.3rem; }
.skill-category { font-family: var(--font-display); font-size: 1rem; font-weight: 700; }
.skill-items { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-badge {
  padding: 5px 14px;
  border-radius: 100px;
  background: var(--gradient-subtle);
  border: 1px solid var(--border);
  font-size: 0.83rem;
  color: var(--text-muted);
  transition: border-color 0.2s, color 0.2s;
  font-weight: 500;
  cursor: default;
}
.skill-badge:hover { border-color: var(--accent); color: var(--accent); }
@media (max-width: 700px) { .skills-grid { grid-template-columns: 1fr; } }
</style>
