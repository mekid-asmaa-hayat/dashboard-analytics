# 📊 Dashboard Analytics Pro

Un dashboard analytics moderne et professionnel construit avec **Next.js 15**, **TypeScript**, et **Tailwind CSS**. Parfait pour démontrer vos compétences en développement front-end et full-stack.

![Dashboard Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Fonctionnalités

- 📈 **Graphiques interactifs** avec Recharts (ligne, barres, et plus)
- 📊 **Cartes de statistiques** avec indicateurs de tendance
- 🎨 **Interface moderne** avec Tailwind CSS
- 📱 **Design responsive** adapté à tous les écrans
- ⚡ **Performance optimisée** avec Next.js App Router
- 🔄 **Gestion d'état** avec Zustand
- 🎯 **TypeScript strict** pour un code robuste
- 🎨 **Composants réutilisables** et bien structurés
- 📋 **Tableau de produits** avec tri et filtrage
- 🔔 **Système de notifications** (UI)
- 👤 **Sidebar de navigation** avec menu interactif

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/dashboard-analytics.git

# Entrer dans le dossier
cd dashboard-analytics

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🛠️ Technologies utilisées

| Technologie | Description |
|------------|-------------|
| **Next.js 15** | Framework React avec App Router |
| **TypeScript** | Typage statique pour JavaScript |
| **Tailwind CSS** | Framework CSS utilitaire |
| **Recharts** | Bibliothèque de graphiques React |
| **Lucide React** | Icônes modernes |
| **Zustand** | Gestion d'état légère |

## 📁 Structure du projet

```
dashboard-analytics/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Page d'accueil
│   │   └── globals.css        # Styles globaux
│   ├── components/            # Composants React
│   │   ├── charts/            # Composants de graphiques
│   │   │   ├── RevenueChart.tsx
│   │   │   └── CategoryChart.tsx
│   │   ├── Dashboard.tsx      # Composant principal du dashboard
│   │   ├── Header.tsx         # En-tête avec recherche
│   │   ├── Sidebar.tsx        # Menu de navigation
│   │   ├── StatsCard.tsx      # Cartes de statistiques
│   │   └── ProductTable.tsx   # Tableau de produits
│   ├── lib/                   # Utilitaires et logique
│   │   ├── data.ts           # Données mockées
│   │   └── store.ts          # Store Zustand
│   └── types/                 # Définitions TypeScript
│       └── index.ts          # Types de données
├── public/                    # Fichiers statiques
├── tailwind.config.ts        # Configuration Tailwind
├── tsconfig.json             # Configuration TypeScript
└── package.json              # Dépendances
```

## 🎨 Composants principaux

### StatsCard
Affiche des métriques clés avec indicateurs de tendance.

```typescript
<StatsCard
  title="Revenus totaux"
  value="728 000 €"
  change={12.5}
  icon={<DollarSign />}
  iconColor="bg-blue-100"
/>
```

### RevenueChart
Graphique en ligne pour visualiser l'évolution des revenus.

```typescript
<RevenueChart data={salesData} />
```

### ProductTable
Tableau interactif des produits avec tri et filtrage.

```typescript
<ProductTable products={productsData} />
```

## 🔧 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm run start

# Linter
npm run lint
```

## 📊 Données

Le projet utilise des données mockées réalistes pour démonstration. Vous pouvez facilement les remplacer par des appels API réels en modifiant `src/lib/data.ts`.

## 🎯 Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.ts` :

```typescript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      // ...
    }
  }
}
```

### Données
Remplacez les données mockées dans `src/lib/data.ts` par vos propres sources de données.

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Build manuel
```bash
npm run build
npm run start
```

## 📝 Bonnes pratiques démontrées

✅ Architecture de composants modulaire  
✅ Typage TypeScript strict  
✅ Responsive design  
✅ Performance optimisée  
✅ Code propre et documenté  
✅ Gestion d'état moderne  
✅ Hooks React personnalisés  
✅ Conventions de nommage cohérentes  

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou un pull request.

## 📄 License

MIT License - voir le fichier LICENSE pour plus de détails.

## 👨‍💻 Auteur

Votre Nom - [Votre Portfolio](https://votre-site.com)

## 🔗 Liens utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Recharts](https://recharts.org/)

---

⭐ Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile !
