# 📊 Dashboard Analytics Pro

Un dashboard analytics moderne et professionnel construit avec **Next.js 15**, **TypeScript**, et **Tailwind CSS**. Ce projet démontre mes compétences en développement front-end et full-stack avec des technologies modernes.

![Dashboard Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)

## 🎯 À propos du projet

Dashboard Analytics Pro est une application web professionnelle qui présente des données analytiques de manière interactive et visuellement attrayante. Conçu pour démontrer l'utilisation des meilleures pratiques de développement web moderne.

**🔗 Liens du projet :**

- 💻 **GitHub** : https://github.com/mekid-asmaa-hayat/dashboard-analytics
- 📧 **Contact** : mekidasmaahayat1@gmail.com

## ✨ Fonctionnalités

- 📈 **Graphiques interactifs** avec Recharts (ligne, barres)
- 📊 **Cartes de statistiques** avec indicateurs de tendance en temps réel
- 🎨 **Interface moderne** et intuitive avec Tailwind CSS
- 📱 **Design 100% responsive** adapté à tous les écrans (mobile, tablette, desktop)
- ⚡ **Performance optimisée** avec Next.js 15 App Router
- 🔄 **Gestion d'état globale** avec Zustand
- 🎯 **TypeScript strict** pour un code robuste et maintenable
- 🎨 **Composants réutilisables** et bien organisés
- 📋 **Tableau de produits** avec système de tri et filtrage
- 🔔 **Système de notifications** intégré
- 👤 **Sidebar de navigation** avec menu interactif
- 🎨 **Animations fluides** et transitions modernes

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/mekid-asmaa-hayat/dashboard-analytics.git

# Entrer dans le dossier
cd dashboard-analytics

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 🛠️ Technologies utilisées

| Technologie      | Version | Description                          |
| ---------------- | ------- | ------------------------------------ |
| **Next.js**      | 15.1.6  | Framework React avec App Router      |
| **TypeScript**   | 5.x     | Typage statique pour JavaScript      |
| **React**        | 19.0    | Bibliothèque JavaScript pour UI      |
| **Tailwind CSS** | 3.4     | Framework CSS utilitaire             |
| **Recharts**     | 2.15    | Bibliothèque de graphiques React     |
| **Lucide React** | 0.469   | Icônes modernes et élégantes         |
| **Zustand**      | 5.0     | Gestion d'état légère et performante |

## 📁 Structure du projet

```
dashboard-analytics/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── layout.tsx         # Layout principal avec metadata
│   │   ├── page.tsx           # Page d'accueil du dashboard
│   │   └── globals.css        # Styles globaux et Tailwind
│   ├── components/            # Composants React réutilisables
│   │   ├── charts/            # Composants de visualisation
│   │   │   ├── RevenueChart.tsx    # Graphique de revenus
│   │   │   └── CategoryChart.tsx   # Graphique par catégorie
│   │   ├── Dashboard.tsx      # Composant principal du dashboard
│   │   ├── Header.tsx         # En-tête avec recherche et notifications
│   │   ├── Sidebar.tsx        # Menu de navigation latéral
│   │   ├── StatsCard.tsx      # Cartes de statistiques
│   │   └── ProductTable.tsx   # Tableau de produits interactif
│   ├── lib/                   # Utilitaires et logique métier
│   │   ├── data.ts           # Données mockées et fonctions utilitaires
│   │   └── store.ts          # Store Zustand pour l'état global
│   └── types/                 # Définitions TypeScript
│       └── index.ts          # Types et interfaces
├── public/                    # Fichiers statiques
├── tailwind.config.ts        # Configuration Tailwind CSS
├── tsconfig.json             # Configuration TypeScript
├── next.config.js            # Configuration Next.js
└── package.json              # Dépendances et scripts
```

## 🎨 Composants principaux

### StatsCard

Affiche des métriques clés avec indicateurs de tendance visuels.

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

Graphique en ligne interactif pour visualiser l'évolution des revenus dans le temps.

```typescript
<RevenueChart data={salesData} />
```

### ProductTable

Tableau moderne et interactif des produits avec tri et filtrage.

```typescript
<ProductTable products={productsData} />
```

## 🔧 Scripts disponibles

```bash
# Développement avec hot reload
npm run dev

# Build de production optimisé
npm run build

# Démarrer l'application en mode production
npm run start

# Vérification du code avec ESLint
npm run lint
```

## 📊 Données

Le projet utilise des **données mockées réalistes** pour la démonstration, incluant :

- Revenus quotidiens et mensuels
- Statistiques de ventes
- Informations produits
- Métriques de performance

Vous pouvez facilement remplacer ces données par des **appels API réels** en modifiant le fichier `src/lib/data.ts`.

## 🎯 Personnalisation

### Modifier les couleurs du thème

Modifiez les couleurs dans `tailwind.config.ts` :

```typescript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      accent: '#ec4899',
      // Ajoutez vos propres couleurs
    }
  }
}
```

### Adapter les données

Remplacez les données mockées dans `src/lib/data.ts` :

```typescript
// Exemple d'intégration avec une API
export const fetchSalesData = async () => {
  const response = await fetch("/api/sales");
  return response.json();
};
```

### Option 2 : Build manuel

```bash
# Créer le build de production
npm run build

# Démarrer le serveur
npm run start
```

## 📝 Compétences démontrées

✅ **Architecture moderne** avec Next.js App Router  
✅ **Typage TypeScript strict** et interfaces bien définies  
✅ **Design responsive** avec mobile-first approach  
✅ **Performance optimisée** avec lazy loading et code splitting  
✅ **Code propre** suivant les conventions React/Next.js  
✅ **Gestion d'état** avec Zustand pour une meilleure scalabilité  
✅ **Composants réutilisables** et maintenables  
✅ **Visualisation de données** avec Recharts  
✅ **UX/UI moderne** avec Tailwind CSS  
✅ **Best practices** en développement web

## 🎓 Ce que j'ai appris

En développant ce projet, j'ai approfondi mes connaissances en :

- Architecture et structure d'applications Next.js 15
- Typage avancé avec TypeScript
- Création de composants React réutilisables
- Visualisation de données avec Recharts
- Gestion d'état global avec Zustand
- Design responsive avec Tailwind CSS
- Optimisation des performances web

## 🤝 Contribution

Les contributions, issues et demandes de fonctionnalités sont les bienvenues ! N'hésitez pas à consulter la page des [issues](https://github.com/mekid-asmaa-hayat/dashboard-analytics/issues).

## 👨‍💻 Auteur

**Asma Hayet Mekid**

- 💼 Portfolio : mekid-portfolio.web.app
- 💻 GitHub : https://github.com/mekid-asmaa-hayat
- 📧 Email : mekidasmaahayat1@gmail.com
- 🔗 LinkedIn : linkedin.com/in/mekid-asma-hayet-014850222

## 🔗 Autres projets

Découvrez mes autres projets :

- [FitGlow – Fitness Website](https://github.com/mekid-asmaa-hayat/Projet-Bootstrap) - Site web fitness avec Bootstrap 5

---

⭐ **Si ce projet vous plaît, n'hésitez pas à lui donner une étoile sur GitHub !**

💡 **Suggestions ou questions ?** Ouvrez une issue ou contactez-moi directement.
