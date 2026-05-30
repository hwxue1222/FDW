import { create } from "zustand";
import { persist } from "zustand/middleware";
import { sha256Hex } from "@/lib/crypto";

type AdminState = {
  adminPasswordHash: string | null;
  isAuthed: boolean;
  lastLoginAt: string | null;

  setPassword: (password: string) => Promise<void>;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
};

export const useAdminStore = create<AdminState>()(
  persist(
    (set, get) => ({
      adminPasswordHash: null,
      isAuthed: false,
      lastLoginAt: null,

      setPassword: async (password) => {
        const hash = await sha256Hex(password);
        set({ adminPasswordHash: hash, isAuthed: true, lastLoginAt: new Date().toISOString() });
      },

      login: async (password) => {
        const stored = get().adminPasswordHash;
        if (!stored) return false;
        const hash = await sha256Hex(password);
        const ok = hash === stored;
        if (ok) set({ isAuthed: true, lastLoginAt: new Date().toISOString() });
        return ok;
      },

      logout: () => {
        set({ isAuthed: false });
      },
    }),
    {
      name: "maid_system.admin_store",
      version: 1,
      partialize: (s) => ({
        adminPasswordHash: s.adminPasswordHash,
        isAuthed: s.isAuthed,
        lastLoginAt: s.lastLoginAt,
      }),
    }
  )
);
