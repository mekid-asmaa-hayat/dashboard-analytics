import { create } from 'zustand';
import { TimeRange, FilterOptions } from '@/types';

interface DashboardState {
  timeRange: TimeRange;
  sidebarOpen: boolean;
  darkMode: boolean;
  filters: FilterOptions;
  setTimeRange: (range: TimeRange) => void;
  toggleSidebar: () => void;
  toggleDarkMode: () => void;
  setFilters: (filters: Partial<FilterOptions>) => void;
  resetFilters: () => void;
}

const defaultFilters: FilterOptions = {
  timeRange: '30d',
  sortBy: 'revenue',
  sortOrder: 'desc',
};

export const useDashboardStore = create<DashboardState>((set) => ({
  timeRange: '30d',
  sidebarOpen: true,
  darkMode: false,
  filters: defaultFilters,
  
  setTimeRange: (range) => set({ timeRange: range }),
  
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  
  resetFilters: () => set({ filters: defaultFilters }),
}));
