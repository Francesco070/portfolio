import { ref, onMounted } from 'vue'

const USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'Francesco070'

const headers = {
  'Accept': 'application/vnd.github.v3+json',
}

export function useGitHubProfile() {
  const data = ref(null)
  const loading = ref(true)
  const error = ref(null)

  onMounted(async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${USERNAME}`, { headers })
      data.value = await res.json()
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  })

  return { data, loading, error }
}

export function useGitHubRepos() {
  const data = ref([])
  const loading = ref(true)
  const error = ref(null)

  onMounted(async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=20&type=public`,
        { headers }
      )
      data.value = await res.json()
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  })

  return { data, loading, error }
}

export function useGitHubStats() {
  const data = ref(null)
  const loading = ref(true)

  onMounted(async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${USERNAME}/repos?per_page=100&type=public`,
        { headers }
      )
      const repos = await res.json()

      const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0)
      const totalForks = repos.reduce((s, r) => s + (r.forks_count || 0), 0)

      const langMap = {}
      for (const repo of repos) {
        if (repo.language) langMap[repo.language] = (langMap[repo.language] || 0) + 1
      }

      const languages = Object.entries(langMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([name, count]) => ({ name, count }))

      data.value = { totalRepos: repos.length, totalStars, totalForks, languages }
    } catch (e) {
      data.value = null
    } finally {
      loading.value = false
    }
  })

  return { data, loading }
}
