'use client';

import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import StatsCard from './StatsCard';
import RevenueChart from './charts/RevenueChart';
import CategoryChart from './charts/CategoryChart';
import ProductTable from './ProductTable';
import { 
  dashboardStats, 
  generateSalesData, 
  revenueByCategory, 
  productsData,
  monthlyRevenue,
  formatCurrency,
  formatNumber 
} from '@/lib/data';

export default function Dashboard() {
  const salesData = generateSalesData(30);

  return (
    <div className="p-6 space-y-6">
      {/* En-tête de la page */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Analytics</h1>
        <p className="text-gray-500 mt-1">Aperçu de vos performances commerciales</p>
      </div>

      {/* Cartes de statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard
          title="Revenus totaux"
          value={formatCurrency(dashboardStats.totalRevenue)}
          change={dashboardStats.revenueChange}
          icon={<DollarSign size={24} className="text-blue-600" />}
          iconColor="bg-blue-100"
        />
        <StatsCard
          title="Commandes"
          value={formatNumber(dashboardStats.totalOrders)}
          change={dashboardStats.ordersChange}
          icon={<ShoppingBag size={24} className="text-green-600" />}
          iconColor="bg-green-100"
        />
        <StatsCard
          title="Clients"
          value={formatNumber(dashboardStats.totalCustomers)}
          change={dashboardStats.customersChange}
          icon={<Users size={24} className="text-purple-600" />}
          iconColor="bg-purple-100"
        />
        <StatsCard
          title="Panier moyen"
          value={formatCurrency(dashboardStats.averageOrderValue)}
          change={5.8}
          icon={<TrendingUp size={24} className="text-orange-600" />}
          iconColor="bg-orange-100"
        />
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RevenueChart data={salesData} />
        <CategoryChart data={revenueByCategory} />
      </div>

      {/* Graphique mensuel */}
      <RevenueChart data={monthlyRevenue} />

      {/* Tableau des produits */}
      <ProductTable products={productsData} />
    </div>
  );
}
