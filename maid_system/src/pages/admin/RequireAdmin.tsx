import { Navigate, useLocation } from "react-router-dom";
import { useAdminStore } from "@/lib/adminStore";

export default function RequireAdmin(props: { children: React.ReactNode }) {
  const isAuthed = useAdminStore((s) => s.isAuthed);
  const location = useLocation();

  if (!isAuthed) {
    const returnTo = encodeURIComponent(location.pathname + location.search + location.hash);
    return <Navigate to={`/admin/login?returnTo=${returnTo}`} replace />;
  }

  return <>{props.children}</>;
}
