# portfolio – frnc.dev

Personal portfolio built with **Vue 3** + **Vite**, served via **nginx**, deployed on Kubernetes via ArgoCD GitOps.

No backend needed – all data comes directly from public APIs (GitHub) and ArgoCD.

## Structure

```
portfolio/
├── src/
│   ├── assets/main.css         # Global styles
│   ├── composables/
│   │   ├── useGitHub.js         # GitHub API calls
│   │   └── useArgoCD.js         # ArgoCD API calls
│   ├── components/
│   │   ├── NavBar.vue
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── GitHubSection.vue    # Dynamic GitHub stats & repos
│   │   ├── ClusterSection.vue   # Live ArgoCD app overview
│   │   ├── SkillsSection.vue
│   │   ├── ContactSection.vue
│   │   └── FooterSection.vue
│   ├── App.vue
│   └── main.js
├── gitops/
│   ├── app.yaml                 # Stakater chart config
│   └── values.yaml              # Kubernetes deployment config
├── .github/workflows/build.yml  # CI/CD → Harbor
├── Dockerfile                   # Multi-stage: build + nginx
├── nginx.conf
├── index.html
├── vite.config.js
└── package.json
```

## Local Development

```bash
npm install
npm run dev
```

## Environment Variables (optional)

Create `.env.local`:

```env
VITE_GITHUB_USERNAME=Francesco070
VITE_ARGOCD_URL=https://argocd.frnc.dev
VITE_ARGOCD_TOKEN=your-argocd-token
```

Without `VITE_ARGOCD_TOKEN` the cluster section shows mock data.

## GitOps Setup

In your GitOps repo create:
```
apps/portfolio/portfolio-app/in-cluster/portfolio-prod/
  ├── app.yaml    ← copy from gitops/app.yaml
  └── values.yaml ← copy from gitops/values.yaml
```

## CI/CD

Add GitHub Secrets:
- `HARBOR_USERNAME`
- `HARBOR_PASSWORD`

Push to `main` → GitHub Actions builds and pushes to `cr.frnc.dev/francesco/portfolio:latest`.
