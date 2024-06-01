import { create } from 'zustand';

const useSidebarStore = create((set: any) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
  toggleSidebar: () => set((state: any) => ({ isOpen: !state.isOpen })),
}));

export default useSidebarStore;
