<template>
  <section class="section" id="contact">
    <div class="container">
      <div class="contact-wrapper">
        <div>
          <p class="section-tag">Contact</p>
          <h2 class="section-title">Let's <span class="gradient-text">Connect</span></h2>
          <p class="contact-bio">
            Interested in working together or just want to say hi?
            Feel free to reach out — I'm always open to new opportunities and conversations.
          </p>
          <div class="contact-links">
            <a href="mailto:f.palazzo@frnc.dev" class="contact-link">
              <div class="link-icon">✉️</div>
              <div>
                <div class="link-label">Email</div>
                <div class="link-value">f.palazzo@frnc.dev</div>
              </div>
              <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="https://github.com/Francesco070" target="_blank" rel="noopener" class="contact-link">
              <div class="link-icon gh">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div>
                <div class="link-label">GitHub</div>
                <div class="link-value">@Francesco070</div>
              </div>
              <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="https://status.frnc.dev" target="_blank" rel="noopener" class="contact-link">
              <div class="link-icon">📊</div>
              <div>
                <div class="link-label">Status Page</div>
                <div class="link-value">status.frnc.dev</div>
              </div>
              <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <div class="contact-card card">
          <div class="card-top">
            <div class="card-avatar">FP</div>
            <div>
              <div class="card-name">Francesco Palazzo</div>
              <div class="card-title">Software & DevOps Engineer</div>
            </div>
          </div>
          <div class="card-divider"></div>
          <div class="card-row">
            <span class="card-key">Location</span>
            <span class="card-val">📍 Chur, Switzerland</span>
          </div>
          <div class="card-row">
            <span class="card-key">Cluster</span>
            <span class="card-val">⎈ Gardener / Hetzner</span>
          </div>
          <div class="card-row">
            <span class="card-key">Domain</span>
            <span class="card-val">🌐 frnc.dev</span>
          </div>
          <div class="card-divider"></div>
          <div class="card-tags">
            <span v-for="t in ['Kubernetes','GitOps','Vue.js','HonoJS','Docker']" :key="t" class="skill-badge">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-tag { color: var(--accent) !important; }
.contact-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.contact-bio { color: var(--text-muted); margin-bottom: 36px; line-height: 1.8; font-size: 1.05rem; }
.contact-links { display: flex; flex-direction: column; gap: 12px; }
.contact-link {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg-card);
  text-decoration: none;
  color: var(--text);
  transition: border-color 0.2s, transform 0.2s, background 0.2s;
}
.contact-link:hover { border-color: var(--border-hover); transform: translateX(4px); background: var(--bg-card-hover); color: var(--text); }
.link-icon {
  width: 40px; height: 40px;
  border-radius: 10px;
  background: var(--gradient-subtle);
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; flex-shrink: 0;
}
.link-icon.gh { color: var(--accent); }
.link-label { font-size: 0.75rem; color: var(--text-dim); }
.link-value { font-weight: 500; font-size: 0.95rem; margin-top: 2px; }
.arrow { margin-left: auto; color: var(--text-dim); flex-shrink: 0; }

.contact-card { display: flex; flex-direction: column; gap: 16px; }
.card-top { display: flex; align-items: center; gap: 16px; }
.card-avatar {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: var(--gradient);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: white; flex-shrink: 0;
}
.card-name { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; }
.card-title { font-size: 0.85rem; color: var(--text-muted); margin-top: 2px; }
.card-divider { height: 1px; background: var(--border); }
.card-row { display: flex; justify-content: space-between; align-items: center; }
.card-key { font-size: 0.8rem; color: var(--text-dim); }
.card-val { font-size: 0.85rem; font-weight: 500; }
.card-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-badge {
  padding: 4px 12px;
  border-radius: 100px;
  background: var(--gradient-subtle);
  border: 1px solid var(--border);
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 500;
}

@media (max-width: 768px) { .contact-wrapper { grid-template-columns: 1fr; gap: 40px; } .contact-card { display: none; } }
</style>
