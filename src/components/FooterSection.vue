<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span class="footer-logo gradient-text">frnc.dev</span>
      <span class="footer-copy">Built with Vue.js · Deployed on Kubernetes</span>
      <div class="footer-links">
        <a href="https://github.com/Francesco070" target="_blank" rel="noopener">GitHub</a>
        <a href="https://cr.frnc.dev" target="_blank" rel="noopener">Registry</a>
        <a href="https://status.frnc.dev/status/francesco" target="_blank" rel="noopener">Status</a>
        <a href="https://vault.frnc.dev" target="_blank" rel="noopener">Vault</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer { padding: 32px 0; border-top: 1px solid var(--border); }
.footer-inner { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
.footer-logo { font-family: var(--font-display); font-weight: 700; font-size: 1.1rem; }
.footer-copy { color: var(--text-dim); font-size: 0.85rem; margin-left: auto; }
.footer-links { display: flex; gap: 20px; }
.footer-links a { color: var(--text-dim); font-size: 0.85rem; transition: color 0.2s; }
.footer-links a:hover { color: var(--accent); }
@media (max-width: 600px) { .footer-copy { margin-left: 0; order: 3; width: 100%; } }
</style>
