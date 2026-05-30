import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MaidProfile, MaidSeedFile, PublishStatus } from "@/lib/types";

type MaidState = {
  profiles: MaidProfile[];
  seedLoaded: boolean;

  initFromSeed: () => Promise<void>;
  upsert: (profile: MaidProfile) => void;
  remove: (id: string) => void;
  setPublishStatus: (id: string, publishStatus: PublishStatus) => void;
  exportJson: () => string;
  importJson: (jsonText: string) => { ok: true } | { ok: false; message: string };
  resetToSeed: () => Promise<void>;
};

function sortProfiles(profiles: MaidProfile[]) {
  const copy = [...profiles];
  copy.sort((a, b) => {
    const aPublished = a.publishStatus === "published" ? 0 : 1;
    const bPublished = b.publishStatus === "published" ? 0 : 1;
    if (aPublished !== bPublished) return aPublished - bPublished;

    const aAvailable = a.availabilityStatus === "available" ? 0 : a.availabilityStatus === "reserved" ? 1 : 2;
    const bAvailable = b.availabilityStatus === "available" ? 0 : b.availabilityStatus === "reserved" ? 1 : 2;
    if (aAvailable !== bAvailable) return aAvailable - bAvailable;

    const aTime = Date.parse(a.updatedAt) || 0;
    const bTime = Date.parse(b.updatedAt) || 0;
    if (aTime !== bTime) return bTime - aTime;

    return a.code.localeCompare(b.code);
  });
  return copy;
}

function normalizeProfile(p: MaidProfile): MaidProfile {
  return {
    ...p,
    languages: Array.isArray(p.languages) ? p.languages.filter(Boolean) : [],
    skills: Array.isArray(p.skills) ? p.skills.filter(Boolean) : [],
    photoUrls: Array.isArray(p.photoUrls) ? p.photoUrls.filter(Boolean) : [],
    updatedAt: p.updatedAt || new Date().toISOString(),
  };
}

async function fetchSeed() {
  const res = await fetch("/seed/maids.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load seed");
  const json = (await res.json()) as MaidSeedFile;
  if (!json || !Array.isArray(json.maids)) throw new Error("Invalid seed file");
  return json.maids.map(normalizeProfile);
}

export const useMaidStore = create<MaidState>()(
  persist(
    (set, get) => ({
      profiles: [],
      seedLoaded: false,

      initFromSeed: async () => {
        const { profiles, seedLoaded } = get();
        if (seedLoaded) return;
        if (profiles.length > 0) {
          set({ seedLoaded: true });
          return;
        }
        const seedProfiles = await fetchSeed();
        set({ profiles: sortProfiles(seedProfiles), seedLoaded: true });
      },

      upsert: (profile) => {
        const next = normalizeProfile({ ...profile, updatedAt: new Date().toISOString() });
        set((s) => {
          const idx = s.profiles.findIndex((p) => p.id === next.id);
          const profiles = idx >= 0 ? s.profiles.map((p) => (p.id === next.id ? next : p)) : [...s.profiles, next];
          return { profiles: sortProfiles(profiles) };
        });
      },

      remove: (id) => {
        set((s) => ({ profiles: s.profiles.filter((p) => p.id !== id) }));
      },

      setPublishStatus: (id, publishStatus) => {
        set((s) => {
          const profiles = s.profiles.map((p) => (p.id === id ? { ...p, publishStatus, updatedAt: new Date().toISOString() } : p));
          return { profiles: sortProfiles(profiles) };
        });
      },

      exportJson: () => {
        const profiles = get().profiles;
        return JSON.stringify({ version: 1, maids: profiles }, null, 2);
      },

      importJson: (jsonText) => {
        try {
          const data = JSON.parse(jsonText) as Partial<MaidSeedFile>;
          if (!data || !Array.isArray(data.maids)) return { ok: false, message: "JSON 格式不正确（缺少 maids）" };
          const maids = data.maids.map(normalizeProfile);
          set({ profiles: sortProfiles(maids), seedLoaded: true });
          return { ok: true };
        } catch {
          return { ok: false, message: "JSON 解析失败" };
        }
      },

      resetToSeed: async () => {
        const seedProfiles = await fetchSeed();
        set({ profiles: sortProfiles(seedProfiles), seedLoaded: true });
      },
    }),
    {
      name: "maid_system.maid_store",
      version: 1,
    }
  )
);
