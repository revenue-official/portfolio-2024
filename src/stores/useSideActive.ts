import { create } from "zustand";

interface useSideActiveProps {
	sideActive: {
		home?: boolean;
		about?: boolean;
		projects?: boolean;
		skill?: boolean;
	};
	setSideActive: (sideActive: {
		home?: boolean;
		about?: boolean;
		projects?: boolean;
		skill?: boolean;
	}) => void;
}

export const useSideActive = create<useSideActiveProps>((set) => ({
	sideActive: {
		home: true,
		about: false,
		projects: false,
		skill: false,
	},
	setSideActive: (sideActive) => set({ sideActive }),
}));
