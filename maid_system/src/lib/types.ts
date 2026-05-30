export type AvailabilityStatus = "available" | "reserved" | "unavailable";
export type PublishStatus = "draft" | "published";

export type MaidProfile = {
  id: string;
  code: string;
  name: string;
  nationality: string;
  age?: number;
  heightCm?: number;
  weightKg?: number;
  religion?: string;
  languages: string[];
  skills: string[];
  yearsExperience?: number;
  experienceSummary?: string;
  expectedSalarySgd?: number;
  restDayPreference?: string;
  availabilityStatus: AvailabilityStatus;
  publishStatus: PublishStatus;
  avatarUrl?: string;
  photoUrls: string[];
  biodataPdfUrl?: string;
  updatedAt: string;
};

export type MaidSeedFile = {
  version: number;
  maids: MaidProfile[];
};
