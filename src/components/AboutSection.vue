<template>
  <section class="section" id="about">
    <div class="container">
      <div class="about-grid">
        <div>
          <p class="section-tag" style="color: var(--accent-3)">Who I am</p>
          <h2 class="section-title">About <span class="gradient-text">Me</span></h2>
          <div class="about-text">
            <p>
              I'm a Software & DevOps Engineer based in Chur, Switzerland.
              I specialize in building and operating Kubernetes-based infrastructure
              using GitOps principles with ArgoCD, and developing modern web applications
              with Vue.js and Node.js backends.
            </p>
            <p>
              In my personal time I run my own Kubernetes cluster on Gardener,
              where I experiment with new tools, self-host applications, and
              continuously improve my DevOps workflows.
            </p>
            <p>
              I'm passionate about clean infrastructure-as-code, reproducible deployments,
              and developer experience. I believe that good tooling and automation
              are the foundation of reliable systems.
            </p>
          </div>
          <div class="about-facts">
            <div class="fact">
              <span class="fact-icon">📍</span>
              <div>
                <div class="fact-label">Location</div>
                <div class="fact-value">Chur, Switzerland</div>
              </div>
            </div>
            <div class="fact">
              <span class="fact-icon">🎓</span>
              <div>
                <div class="fact-label">Focus</div>
                <div class="fact-value">DevOps & Full-Stack</div>
              </div>
            </div>
            <div class="fact">
              <span class="fact-icon">⎈</span>
              <div>
                <div class="fact-label">Cluster</div>
                <div class="fact-value">Gardener on Hetzner</div>
              </div>
            </div>
            <div class="fact">
              <span class="fact-icon">🌐</span>
              <div>
                <div class="fact-label">Domain</div>
                <div class="fact-value">frnc.dev</div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-visual">
          <div class="terminal">
            <div class="terminal-header">
              <span class="t-dot red"></span>
              <span class="t-dot yellow"></span>
              <span class="t-dot green"></span>
              <span class="t-title">frnc ~ kubectl</span>
            </div>
            <div class="terminal-body">
              <div v-for="(line, i) in terminalLines" :key="i" class="t-line" :style="{ animationDelay: i * 0.15 + 's' }">
                <span v-if="line.prompt" class="t-prompt">❯ </span>
                <span :class="line.class">{{ line.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const terminalLines = [
  { prompt: true, text: 'kubectl get nodes', class: 'cmd' },
  { text: 'NAME          STATUS   ROLES   AGE', class: 'dim' },
  { text: 'worker-a-z1   Ready    <none>  6d', class: 'success' },
  { text: 'worker-a-z2   Ready    <none>  6d', class: 'success' },
  { prompt: true, text: 'kubectl get apps -A', class: 'cmd' },
  { text: 'harbor        Synced   Healthy', class: 'success' },
  { text: 'jellyfin      Synced   Healthy', class: 'success' },
  { text: 'vaultwarden   Synced   Healthy', class: 'success' },
  { text: 'portfolio     Synced   Healthy', class: 'success' },
  { prompt: true, text: '▋', class: 'cursor' },
]
</script>

<style scoped>
.section-tag { color: var(--accent-3) !important; }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 40px;
}

.about-facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.fact {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.fact-icon { font-size: 1.2rem; }
.fact-label { font-size: 0.75rem; color: var(--text-dim); }
.fact-value { font-size: 0.9rem; font-weight: 500; }

.terminal {
  border-radius: 16px;
  overflow: hidden;
  background: #0a0d17;
  border: 1px solid var(--border-hover);
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.85rem;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
}

.t-dot {
  width: 12px; height: 12px;
  border-radius: 50%;
}
.t-dot.red { background: #ff5f57; }
.t-dot.yellow { background: #febc2e; }
.t-dot.green { background: #28c840; }

.t-title {
  font-size: 0.8rem;
  color: var(--text-dim);
  margin-left: 8px;
  font-family: var(--font-body);
}

.terminal-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 280px;
}

.t-line {
  display: flex;
  gap: 4px;
  animation: fadeUp 0.3s ease forwards;
  opacity: 0;
}

.t-prompt { color: var(--accent); }
.cmd { color: var(--text); }
.dim { color: var(--text-dim); }
.success { color: #34d399; }
.cursor { color: var(--accent); animation: pulse 1s ease-in-out infinite !important; opacity: 1 !important; }

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .about-visual { display: none; }
}
</style>
