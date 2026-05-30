import { Link, Outlet, useLocation } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui";
import { useAdminStore } from "@/lib/adminStore";
import { cn } from "@/lib/utils";

function NavLink(props: { to: string; label: string }) {
  const location = useLocation();
  const active = location.pathname === props.to || location.pathname.startsWith(props.to + "/");
  return (
    <Link
      to={props.to}
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium",
        active ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-100"
      )}
    >
      {props.label}
    </Link>
  );
}

export default function AdminLayout() {
  const logout = useAdminStore((s) => s.logout);
  return (
    <div className="min-h-dvh bg-neutral-50">
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-sm font-semibold text-neutral-900">
              Maid Library
            </Link>
            <div className="h-4 w-px bg-neutral-200" />
            <div className="text-sm text-neutral-600">Admin</div>
          </div>
          <div className="flex items-center gap-2">
            <NavLink to="/admin/maids" label="Maids" />
            <Button
              variant="ghost"
              className="gap-2"
              onClick={() => {
                logout();
              }}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
