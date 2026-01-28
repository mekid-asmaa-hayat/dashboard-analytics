import { SalesData, Product, RevenueByCategory, DashboardStats } from '@/types';

// Génération de données de ventes sur 30 jours
export const generateSalesData = (days: number = 30): SalesData[] => {
  const data: SalesData[] = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Variation aléatoire mais réaliste
    const baseRevenue = 15000;
    const variation = Math.random() * 10000 - 5000;
    const revenue = Math.round(baseRevenue + variation);
    
    const baseOrders = 120;
    const orderVariation = Math.round(Math.random() * 50 - 25);
    const orders = baseOrders + orderVariation;
    
    const customers = Math.round(orders * (0.7 + Math.random() * 0.3));
    
    data.push({
      date: date.toISOString().split('T')[0],
      revenue,
      orders,
      customers,
    });
  }
  
  return data;
};

// Données de produits
export const productsData: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    category: 'Électronique',
    price: 2499,
    sales: 145,
    stock: 23,
    trend: 'up',
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    category: 'Électronique',
    price: 1199,
    sales: 289,
    stock: 67,
    trend: 'up',
  },
  {
    id: '3',
    name: 'AirPods Pro',
    category: 'Électronique',
    price: 249,
    sales: 523,
    stock: 156,
    trend: 'stable',
  },
  {
    id: '4',
    name: 'iPad Air',
    category: 'Électronique',
    price: 599,
    sales: 178,
    stock: 45,
    trend: 'up',
  },
  {
    id: '5',
    name: 'Sony WH-1000XM5',
    category: 'Audio',
    price: 399,
    sales: 234,
    stock: 89,
    trend: 'stable',
  },
  {
    id: '6',
    name: 'Canon EOS R5',
    category: 'Photo',
    price: 3899,
    sales: 56,
    stock: 12,
    trend: 'down',
  },
  {
    id: '7',
    name: 'Dell XPS 15',
    category: 'Électronique',
    price: 1799,
    sales: 167,
    stock: 34,
    trend: 'up',
  },
  {
    id: '8',
    name: 'Samsung Galaxy S24',
    category: 'Électronique',
    price: 999,
    sales: 312,
    stock: 98,
    trend: 'up',
  },
];

// Revenus par catégorie
export const revenueByCategory: RevenueByCategory[] = [
  { category: 'Électronique', revenue: 450000, percentage: 62 },
  { category: 'Audio', revenue: 120000, percentage: 16 },
  { category: 'Photo', revenue: 85000, percentage: 12 },
  { category: 'Accessoires', revenue: 73000, percentage: 10 },
];

// Statistiques du dashboard
export const dashboardStats: DashboardStats = {
  totalRevenue: 728000,
  totalOrders: 3456,
  totalCustomers: 2891,
  averageOrderValue: 210.65,
  revenueChange: 12.5,
  ordersChange: 8.3,
  customersChange: 15.7,
};

// Données de revenus mensuels pour graphique annuel
export const monthlyRevenue = [
  { month: 'Jan', revenue: 65000, orders: 320 },
  { month: 'Fév', revenue: 59000, orders: 298 },
  { month: 'Mar', revenue: 80000, orders: 412 },
  { month: 'Avr', revenue: 81000, orders: 425 },
  { month: 'Mai', revenue: 76000, orders: 389 },
  { month: 'Juin', revenue: 85000, orders: 445 },
  { month: 'Juil', revenue: 90000, orders: 478 },
  { month: 'Août', revenue: 87000, orders: 456 },
  { month: 'Sep', revenue: 94000, orders: 501 },
  { month: 'Oct', revenue: 98000, orders: 523 },
  { month: 'Nov', revenue: 105000, orders: 567 },
  { month: 'Déc', revenue: 112000, orders: 602 },
];

// Fonction utilitaire pour formater les devises
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
};

// Fonction utilitaire pour formater les nombres
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('fr-FR').format(num);
};

// Fonction utilitaire pour calculer le pourcentage de changement
export const calculatePercentageChange = (current: number, previous: number): number => {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
};
