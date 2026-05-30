import { useEffect, useMemo } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useMaidStore } from "@/lib/maidStore";

export default function MaidByCodeRedirect() {
  const { code = "" } = useParams();
  const location = useLocation();
  const initFromSeed = useMaidStore((s) => s.initFromSeed);
  const profiles = useMaidStore((s) => s.profiles);
  const seedLoaded = useMaidStore((s) => s.seedLoaded);

  useEffect(() => {
    void initFromSeed();
  }, [initFromSeed]);

  const match = useMemo(() => {
    const q = code.trim().toLowerCase();
    if (!q) return undefined;
    return profiles.find((p) => p.publishStatus === "published" && p.code.toLowerCase() === q);
  }, [code, profiles]);

  if (match) {
    return <Navigate to={`/maids/${match.id}${location.search}`} replace />;
  }

  if (!seedLoaded) {
    return <div className="p-4 text-sm text-neutral-600">Loading…</div>;
  }

  return <Navigate to={`/${location.search}`} replace />;
}
