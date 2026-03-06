<template>
  <section class="hero">
    <div class="hero-bg">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>
    <div class="container hero-content">
      <div class="hero-text">
        <div class="hero-tag">
          <span class="dot"></span>
          Available for opportunities
        </div>
        <h1 class="hero-name">
          <span>Francesco</span>
          <span class="gradient-text">Palazzo</span>
        </h1>
        <p class="hero-title">Software & DevOps Engineer</p>
        <p class="hero-bio">
          Building scalable systems and GitOps workflows from Chur, Switzerland.
          Passionate about Kubernetes, modern web apps, and open-source infrastructure.
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn-primary">Get in touch</a>
          <a href="https://github.com/Francesco070" target="_blank" rel="noopener" class="btn-ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="avatar-ring">
          <div class="avatar">
            <span>FP</span>
          </div>
        </div>
        <div class="floating-badge fb-1"><span>⎈</span> Kubernetes</div>
        <div class="floating-badge fb-2"><span>🚀</span> ArgoCD</div>
        <div class="floating-badge fb-3"><span>🐳</span> Docker</div>
        <div class="floating-badge fb-4"><span>🖖</span> Vue.js</div>
      </div>
    </div>
    <div class="scroll-indicator"><div class="scroll-line"></div></div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.hero-bg { position: absolute; inset: 0; pointer-events: none; }
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
}
.orb-1 { width: 600px; height: 600px; background: #6389ff; top: -200px; left: -200px; animation: floatOrb 8s ease-in-out infinite; }
.orb-2 { width: 400px; height: 400px; background: #a78bfa; top: 50%; right: -100px; animation: floatOrb 10s ease-in-out infinite reverse; }
.orb-3 { width: 300px; height: 300px; background: #34d399; bottom: -100px; left: 40%; animation: floatOrb 7s ease-in-out infinite; }
@keyframes floatOrb { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(30px,-30px); } }

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
  padding-top: 80px;
}
.hero-text { animation: fadeUp 0.6s ease forwards; }
.hero-visual { animation: fadeUp 0.6s ease 0.2s both; }

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 100px;
  border: 1px solid rgba(52,211,153,0.3);
  background: rgba(52,211,153,0.08);
  color: #34d399;
  font-size: 0.85rem;
  margin-bottom: 24px;
}
.dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #34d399;
  animation: pulse 2s ease-in-out infinite;
}
.hero-name {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
.hero-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 24px;
}
.hero-bio {
  color: var(--text-muted);
  max-width: 480px;
  margin-bottom: 40px;
  font-size: 1.05rem;
  line-height: 1.7;
}
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 420px;
}
.avatar-ring {
  width: 200px; height: 200px;
  border-radius: 50%;
  background: var(--gradient-subtle);
  border: 2px solid var(--border-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.avatar-ring::before {
  content: '';
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  border: 1px dashed rgba(99,137,255,0.2);
  animation: spin 20s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.avatar {
  width: 140px; height: 140px;
  border-radius: 50%;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: white;
}
.floating-badge {
  position: absolute;
  padding: 8px 16px;
  border-radius: 100px;
  background: var(--bg-card);
  border: 1px solid var(--border-hover);
  font-size: 0.82rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}
.fb-1 { top: 10%; left: -10px; animation: float 6s ease-in-out infinite; }
.fb-2 { top: 55%; right: -10px; animation: float 6s ease-in-out infinite; animation-delay: -2s; }
.fb-3 { bottom: 10%; left: 5%; animation: float 6s ease-in-out infinite; animation-delay: -4s; }
.fb-4 { top: 30%; right: 0; animation: float 6s ease-in-out infinite; animation-delay: -1s; }

.scroll-indicator {
  position: absolute;
  bottom: 40px; left: 50%;
  transform: translateX(-50%);
}
.scroll-line {
  width: 1px; height: 60px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: scrollLine 2s ease-in-out infinite;
}
@keyframes scrollLine {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

@media (max-width: 768px) {
  .hero-content { grid-template-columns: 1fr; gap: 40px; }
  .hero-visual { height: 260px; }
  .fb-3, .fb-4 { display: none; }
}
</style>
