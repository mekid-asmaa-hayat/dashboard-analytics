'use client';

import { Product } from '@/types';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { formatCurrency, formatNumber } from '@/lib/data';

interface ProductTableProps {
  products: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {
  const getTrendIcon = (trend: Product['trend']) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={16} className="text-green-600" />;
      case 'down':
        return <TrendingDown size={16} className="text-red-600" />;
      case 'stable':
        return <Minus size={16} className="text-gray-400" />;
    }
  };

  const getStockStatus = (stock: number) => {
    if (stock < 20) return { color: 'text-red-600 bg-red-50', label: 'Stock faible' };
    if (stock < 50) return { color: 'text-yellow-600 bg-yellow-50', label: 'Stock moyen' };
    return { color: 'text-green-600 bg-green-50', label: 'En stock' };
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Produits populaires</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Produit</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Catégorie</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Prix</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Ventes</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Stock</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Tendance</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const stockStatus = getStockStatus(product.stock);
              return (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600">{product.category}</span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className="font-semibold text-gray-900">{formatCurrency(product.price)}</span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className="text-gray-900">{formatNumber(product.sales)}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center">
                      {getTrendIcon(product.trend)}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
