// stores/useScrollStore.js
import { create } from "zustand";

interface useScrollStoreProps {
  sectionRefs: any;
  setSectionRef: (section: string, ref: any) => void;
  scrollToSection: (section: string) => void;
}

export const useScrollStore = create<useScrollStoreProps>((set) => ({
  sectionRefs: {},
  setSectionRef: (section, ref) =>
    set((state) => ({
      sectionRefs: {
        ...state.sectionRefs,
        [section]: ref,
      },
    })),
  scrollToSection: (section) => {
    setTimeout(() => {
      const ref = useScrollStore.getState().sectionRefs[section];
      // console.log(ref);
      if (ref && ref.target) {
        ref.target.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  },
}));
