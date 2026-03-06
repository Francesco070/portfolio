import { ref, onMounted } from 'vue'

const ARGOCD_URL = import.meta.env.VITE_ARGOCD_URL || 'https://argocd.frnc.dev'
const ARGOCD_TOKEN = import.meta.env.VITE_ARGOCD_TOKEN || ''

// App URL mapping – add your apps here
const APP_URLS = {
  harbor: 'https://cr.frnc.dev',
  jellyfin: 'https://music.frnc.dev',
  filebrowser: 'https://files.music.frnc.dev',
  'stirling-pdf': 'https://pdf.frnc.dev',
  vaultwarden: 'https://vault.frnc.dev',
  'uptime-kuma': 'https://status.frnc.dev',
  lerntagebuch: 'https://lerntagebuch.frnc.dev',
  portfolio: 'https://frnc.dev',
}

function getAppUrl(name) {
  for (const [key, url] of Object.entries(APP_URLS)) {
    if (name.toLowerCase().includes(key)) return url
  }
  return null
}

export function useClusterApps() {
  const apps = ref([])
  const loading = ref(true)
  const error = ref(null)
  const lastUpdated = ref(null)

  const fetch = async () => {
    loading.value = true
    error.value = null
    try {
      if (!ARGOCD_TOKEN) {
        // Fallback mock data when no token configured
        apps.value = [
          { name: 'harbor-app', namespace: 'harbor-prod', health: 'Healthy', status: 'Synced', url: 'https://cr.frnc.dev' },
          { name: 'jellyfin-app', namespace: 'jellyfin-music', health: 'Healthy', status: 'Synced', url: 'https://music.frnc.dev' },
          { name: 'filebrowser-app', namespace: 'jellyfin-music', health: 'Healthy', status: 'Synced', url: 'https://files.music.frnc.dev' },
          { name: 'stirling-pdf-app', namespace: 'stirling-pdf-prod', health: 'Healthy', status: 'Synced', url: 'https://pdf.frnc.dev' },
          { name: 'vaultwarden-app', namespace: 'vaultwarden-prod', health: 'Healthy', status: 'Synced', url: 'https://vault.frnc.dev' },
          { name: 'uptime-kuma-app', namespace: 'uptime-kuma-prod', health: 'Healthy', status: 'Synced', url: 'https://status.frnc.dev' },
          { name: 'portfolio-app', namespace: 'portfolio-prod', health: 'Healthy', status: 'Synced', url: 'https://frnc.dev' },
        ]
        lastUpdated.value = new Date()
        return
      }

      const res = await window.fetch(`${ARGOCD_URL}/api/v1/applications`, {
        headers: {
          'Authorization': `Bearer ${ARGOCD_TOKEN}`,
          'Content-Type': 'application/json',
        }
      })
      const data = await res.json()
      apps.value = (data.items || []).map(app => ({
        name: app.metadata.name,
        namespace: app.spec.destination.namespace,
        health: app.status?.health?.status || 'Unknown',
        status: app.status?.sync?.status || 'Unknown',
        url: getAppUrl(app.metadata.name),
      }))
      lastUpdated.value = new Date()
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  onMounted(fetch)

  return { apps, loading, error, lastUpdated, refresh: fetch }
}
