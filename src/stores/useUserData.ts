import { create } from "zustand";

interface UserDataProps {
	user: {
		username: string;
		email: string;
		image: string;
	};
	setUser: (update: any) => void;
}

export const useUserData = create<UserDataProps>((set) => ({
	user: {
		username: "",
		email: "",
		image: "",
	},
	setUser: (update) => set({ user: update }),
}));
