import { create } from "zustand";

interface useLoadingProps {
	onLoading: boolean;
	setOnLoading: (loading: boolean) => void;
}

export const useLoading = create<useLoadingProps>((set) => ({
	onLoading: true,
	setOnLoading: (loading: boolean) => set({ onLoading: loading }),
}));
