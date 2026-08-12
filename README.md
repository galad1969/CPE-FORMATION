# CPE Formation

Soutien et formation pour l'obtention du diplôme de CPE.

## Technologies

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion

## Déploiement sur GitHub Pages

Le projet est configuré pour être facilement déployé sur GitHub Pages ou d'autres services d'hébergement statique (Vercel, Netlify).

### Hébergement statique (GitHub Pages)

1. Commiter et pousser (push) tout le code vers votre dépôt GitHub.
2. Pour GitHub Pages, la configuration est déjà prête :
   - Le routage utilise `HashRouter` (pour éviter les erreurs 404 lors du rechargement des pages).
   - Le chemin de base (`base: './'`) est défini dans `vite.config.ts` pour gérer le chargement des assets depuis un sous-dossier (ex: `votre-nom.github.io/votre-depot/`).
3. Vous pouvez configurer GitHub Actions pour déployer le dossier `dist/` automatiquement, ou bien pousser le build généré manuellement.

### Installation et utilisation locale

1. **Installer les dépendances**
   \`\`\`bash
   npm install
   \`\`\`

2. **Lancer le serveur de développement**
   \`\`\`bash
   npm run dev
   \`\`\`
   Le site sera accessible sur \`http://localhost:3000\`.

3. **Compiler pour la production**
   \`\`\`bash
   npm run build
   \`\`\`
   Les fichiers prêts pour la production seront générés dans le dossier \`dist/\`.
