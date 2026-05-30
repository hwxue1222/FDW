import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AvailabilityStatus } from "@/lib/types";

type UiState = {
  search: string;
  nationality: string;
  availability: AvailabilityStatus | "";
  skill: string;

  setSearch: (v: string) => void;
  setNationality: (v: string) => void;
  setAvailability: (v: AvailabilityStatus | "") => void;
  setSkill: (v: string) => void;
  clear: () => void;
};

export const useUiStore = create<UiState>()(
  persist(
    (set) => ({
      search: "",
      nationality: "",
      availability: "",
      skill: "",

      setSearch: (v) => set({ search: v }),
      setNationality: (v) => set({ nationality: v }),
      setAvailability: (v) => set({ availability: v }),
      setSkill: (v) => set({ skill: v }),
      clear: () => set({ search: "", nationality: "", availability: "", skill: "" }),
    }),
    {
      name: "maid_system.ui_store",
      version: 1,
    }
  )
);
