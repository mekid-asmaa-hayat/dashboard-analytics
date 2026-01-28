// Types pour le Dashboard Analytics

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'manager';
}

export interface SalesData {
  date: string;
  revenue: number;
  orders: number;
  customers: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  sales: number;
  stock: number;
  trend: 'up' | 'down' | 'stable';
}

export interface RevenueByCategory {
  category: string;
  revenue: number;
  percentage: number;
}

export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  averageOrderValue: number;
  revenueChange: number;
  ordersChange: number;
  customersChange: number;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}

export type TimeRange = '7d' | '30d' | '90d' | '1y';

export interface FilterOptions {
  timeRange: TimeRange;
  category?: string;
  sortBy?: 'revenue' | 'orders' | 'customers';
  sortOrder?: 'asc' | 'desc';
}
