'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  icon: ReactNode;
  iconColor: string;
}

export default function StatsCard({ title, value, change, icon, iconColor }: StatsCardProps) {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${iconColor}`}>
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{Math.abs(change).toFixed(1)}%</span>
        </div>
      </div>
      
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      
      <p className="text-xs text-gray-500 mt-2">
        {isPositive ? '+' : ''}{change.toFixed(1)}% vs mois dernier
      </p>
    </div>
  );
}
