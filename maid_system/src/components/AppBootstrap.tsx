import { useEffect } from "react";
import { useMaidStore } from "@/lib/maidStore";

export function AppBootstrap() {
  const initFromSeed = useMaidStore((s) => s.initFromSeed);

  useEffect(() => {
    void initFromSeed();
  }, [initFromSeed]);

  return null;
}
