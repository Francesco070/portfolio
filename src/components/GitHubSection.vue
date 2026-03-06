<template>
  <section class="section" id="github">
    <div class="container">
      <p class="section-tag">Open Source</p>
      <h2 class="section-title">GitHub <span class="gradient-text">Activity</span></h2>
      <p class="section-subtitle">Real-time stats from my public repositories</p>

      <div v-if="statsLoading" class="stats-grid">
        <div v-for="i in 4" :key="i" class="skeleton" style="height:120px"></div>
      </div>
      <div v-else class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">📦</div>
          <div class="stat-value">{{ stats?.totalRepos || 0 }}</div>
          <div class="stat-label">Public Repos</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">⭐</div>
          <div class="stat-value">{{ stats?.totalStars || 0 }}</div>
          <div class="stat-label">Total Stars</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">🍴</div>
          <div class="stat-value">{{ stats?.totalForks || 0 }}</div>
          <div class="stat-label">Total Forks</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">👥</div>
          <div class="stat-value">{{ profile?.followers || 0 }}</div>
          <div class="stat-label">Followers</div>
        </div>
      </div>

      <!-- Language bar -->
      <div v-if="stats?.languages?.length" class="lang-section">
        <h3 class="sub-title">Top Languages</h3>
        <div class="lang-bar">
          <div
            v-for="(lang, i) in stats.languages"
            :key="lang.name"
            class="lang-segment"
            :style="{ width: getLangWidth(lang.count) + '%', background: langColors[i] }"
            :title="lang.name"
          ></div>
        </div>
        <div class="lang-legend">
          <div v-for="(lang, i) in stats.languages" :key="lang.name" class="lang-item">
            <span class="lang-dot" :style="{ background: langColors[i] }"></span>
            {{ lang.name }}
          </div>
        </div>
      </div>

      <!-- Repos -->
      <h3 class="sub-title" style="margin-bottom:16px">Recent Repositories</h3>
      <div v-if="reposLoading" class="repos-grid">
        <div v-for="i in 6" :key="i" class="skeleton" style="height:140px"></div>
      </div>
      <div v-else class="repos-grid">
        <a
          v-for="repo in repos.slice(0, 6)"
          :key="repo.id"
          :href="repo.html_url"
          target="_blank"
          rel="noopener"
          class="card repo-card"
        >
          <div class="repo-header">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="color:var(--accent);flex-shrink:0">
              <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8z"/>
            </svg>
            <span class="repo-name">{{ repo.name }}</span>
          </div>
          <p class="repo-desc">{{ repo.description || 'No description provided.' }}</p>
          <div class="repo-meta">
            <span v-if="repo.language" class="repo-lang">
              <span class="lang-dot" :style="{ background: langColorMap[repo.language] || '#6389ff' }"></span>
              {{ repo.language }}
            </span>
            <span class="repo-stat">⭐ {{ repo.stargazers_count }}</span>
            <span class="repo-stat">🍴 {{ repo.forks_count }}</span>
          </div>
        </a>
      </div>

      <div style="text-align:center;margin-top:24px">
        <a href="https://github.com/Francesco070" target="_blank" rel="noopener" class="btn-ghost">
          View all on GitHub →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useGitHubProfile, useGitHubRepos, useGitHubStats } from '../composables/useGitHub.js'

const { data: profile } = useGitHubProfile()
const { data: repos, loading: reposLoading } = useGitHubRepos()
const { data: stats, loading: statsLoading } = useGitHubStats()

const langColors = ['#6389ff','#a78bfa','#34d399','#fbbf24','#f87171','#38bdf8','#fb923c','#e879f9']
const langColorMap = {
  JavaScript:'#f7df1e', TypeScript:'#3178c6', Python:'#3776ab',
  Vue:'#42b883', PHP:'#777bb4', Go:'#00add8', Rust:'#ce422b',
  CSS:'#1572b6', HTML:'#e34c26', Shell:'#89e051', Java:'#b07219',
}

function getLangWidth(count) {
  if (!stats.value?.languages) return 0
  const total = stats.value.languages.reduce((s, l) => s + l.count, 0)
  return Math.max((count / total) * 100, 2)
}
</script>

<style scoped>
.section-tag { color: var(--accent) !important; }
.sub-title { font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: var(--text-muted); margin-bottom: 20px; }

.stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-bottom: 48px; }
.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.stat-card:hover { border-color: var(--border-hover); transform: translateY(-4px); }
.stat-icon { font-size: 1.8rem; margin-bottom: 12px; }
.stat-value {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label { color: var(--text-muted); font-size: 0.85rem; margin-top: 4px; }

.lang-section { margin-bottom: 48px; }
.lang-bar { display: flex; height: 10px; border-radius: 100px; overflow: hidden; gap: 2px; margin-bottom: 16px; }
.lang-segment { border-radius: 100px; }
.lang-legend { display: flex; flex-wrap: wrap; gap: 16px; }
.lang-item { display: flex; align-items: center; gap: 6px; font-size: 0.85rem; color: var(--text-muted); }
.lang-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }

.repos-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-bottom: 16px; }
.repo-card { display: flex; flex-direction: column; gap: 10px; color: var(--text); }
.repo-header { display: flex; align-items: center; gap: 8px; }
.repo-name { font-family: var(--font-display); font-weight: 600; font-size: 0.95rem; color: var(--accent); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.repo-desc { color: var(--text-muted); font-size: 0.85rem; line-height: 1.5; flex: 1; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.repo-meta { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.repo-lang { display: flex; align-items: center; gap: 5px; font-size: 0.8rem; color: var(--text-muted); }
.repo-stat { font-size: 0.8rem; color: var(--text-dim); }

@media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(2,1fr); } .repos-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) { .repos-grid { grid-template-columns: 1fr; } }
</style>
