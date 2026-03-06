<template>
  <section class="section section-alt" id="cluster">
    <div class="container">
      <p class="section-tag">Infrastructure</p>
      <h2 class="section-title">Cluster <span class="gradient-text">Apps</span></h2>
      <p class="section-subtitle">Live overview of applications running on my Kubernetes cluster</p>

      <div class="cluster-header">
        <div class="cs">
          <span class="cs-val">{{ apps.length }}</span>
          <span class="cs-lbl">Total Apps</span>
        </div>
        <div class="cs">
          <span class="cs-val" style="color:#34d399">{{ healthyCount }}</span>
          <span class="cs-lbl">Healthy</span>
        </div>
        <div class="cs">
          <span class="cs-val" style="color:#6389ff">{{ syncedCount }}</span>
          <span class="cs-lbl">Synced</span>
        </div>
        <div class="cs" v-if="lastUpdated">
          <span class="cs-val" style="font-size:0.85rem;color:var(--text-muted)">{{ timeAgo }}</span>
          <span class="cs-lbl">Last updated</span>
        </div>
        <button class="refresh-btn" @click="refresh" :class="{ spinning: loading }">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M23 4v6h-6M1 20v-6h6"/>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
          </svg>
          Refresh
        </button>
      </div>

      <div v-if="loading" class="apps-grid">
        <div v-for="i in 6" :key="i" class="skeleton" style="height:110px"></div>
      </div>
      <div v-else class="apps-grid">
        <component
          :is="app.url ? 'a' : 'div'"
          v-for="app in apps"
          :key="app.name"
          :href="app.url || undefined"
          :target="app.url ? '_blank' : undefined"
          rel="noopener"
          class="card app-card"
        >
          <div class="app-header">
            <div class="app-icon">{{ getIcon(app.name) }}</div>
            <div class="app-info">
              <div class="app-name">{{ app.name.replace('-app','') }}</div>
              <div class="app-ns">{{ app.namespace }}</div>
            </div>
            <svg v-if="app.url" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--text-dim);flex-shrink:0">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </div>
          <div class="app-badges">
            <span class="badge" :class="app.health === 'Healthy' ? 'healthy' : app.health === 'Degraded' ? 'degraded' : ''">
              <span class="status-dot"></span>{{ app.health }}
            </span>
            <span class="badge" :class="app.status === 'Synced' ? 'synced' : app.status === 'OutOfSync' ? 'outofsync' : ''">
              {{ app.status }}
            </span>
          </div>
        </component>
      </div>

      <div v-if="error" class="error-note">
        ⚠️ Could not connect to ArgoCD. Showing cached data.
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useClusterApps } from '../composables/useArgoCD.js'

const { apps, loading, error, lastUpdated, refresh } = useClusterApps()

const healthyCount = computed(() => apps.value.filter(a => a.health === 'Healthy').length)
const syncedCount = computed(() => apps.value.filter(a => a.status === 'Synced').length)

const timeAgo = computed(() => {
  if (!lastUpdated.value) return ''
  const diff = Math.floor((Date.now() - lastUpdated.value) / 1000)
  if (diff < 60) return `${diff}s ago`
  return `${Math.floor(diff/60)}m ago`
})

const icons = {
  harbor:'⚓', jellyfin:'🎵', filebrowser:'📁', 'stirling-pdf':'📄',
  vaultwarden:'🔐', 'uptime-kuma':'📊', lerntagebuch:'📔', nutriscan:'🥗',
  servercalculator:'🖥️', chat:'💬', kubero:'☸️', portfolio:'🌐', ntfy:'🔔',
}

function getIcon(name) {
  const n = name.toLowerCase()
  for (const [k, v] of Object.entries(icons)) {
    if (n.includes(k)) return v
  }
  return '⚙️'
}
</script>

<style scoped>
.section-alt { background: linear-gradient(180deg, transparent 0%, rgba(99,137,255,0.03) 50%, transparent 100%); }
.section-tag { color: var(--accent-3) !important; }

.cluster-header {
  display: flex;
  align-items: center;
  gap: 32px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 28px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}
.cs { display: flex; flex-direction: column; gap: 2px; }
.cs-val { font-family: var(--font-display); font-size: 1.8rem; font-weight: 700; }
.cs-lbl { font-size: 0.78rem; color: var(--text-dim); }

.refresh-btn {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid var(--border-hover);
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
  font-family: var(--font-body);
}
.refresh-btn:hover { border-color: var(--accent); color: var(--accent); }
.refresh-btn.spinning svg { animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

.apps-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
.app-card { display: flex; flex-direction: column; gap: 14px; color: var(--text); text-decoration: none; }
.app-header { display: flex; align-items: center; gap: 12px; }
.app-icon {
  width: 40px; height: 40px;
  border-radius: 10px;
  background: var(--gradient-subtle);
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem; flex-shrink: 0;
}
.app-info { flex: 1; min-width: 0; }
.app-name { font-family: var(--font-display); font-weight: 600; font-size: 0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.app-ns { font-size: 0.75rem; color: var(--text-dim); margin-top: 2px; }
.app-badges { display: flex; gap: 8px; flex-wrap: wrap; }
.status-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; animation: pulse 2s ease-in-out infinite; }

.error-note {
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: 10px;
  background: rgba(251,191,36,0.08);
  border: 1px solid rgba(251,191,36,0.2);
  color: #fbbf24;
  font-size: 0.85rem;
}

@media (max-width: 900px) { .apps-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 600px) { .apps-grid { grid-template-columns: 1fr; } }
</style>
