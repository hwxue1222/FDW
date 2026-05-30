import { useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button, Card, Field, Input, PageShell } from "@/components/ui";
import { useAdminStore } from "@/lib/adminStore";

export default function AdminLogin() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const returnTo = params.get("returnTo") || "/admin/maids";
  const adminPasswordHash = useAdminStore((s) => s.adminPasswordHash);
  const setPassword = useAdminStore((s) => s.setPassword);
  const login = useAdminStore((s) => s.login);

  const mode = useMemo(() => (adminPasswordHash ? "login" : "setup"), [adminPasswordHash]);
  const [password, setLocalPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <PageShell
      title={mode === "setup" ? "Admin Setup" : "Admin Login"}
      right={
        <Link to="/">
          <Button variant="secondary">Back</Button>
        </Link>
      }
    >
      <div className="mx-auto max-w-md">
        <Card className="p-5">
          <div className="text-sm text-neutral-600">
            {mode === "setup"
              ? "首次使用：设置一个管理员密码（保存在当前浏览器）。"
              : "请输入管理员密码登录（保存在当前浏览器）。"}
          </div>

          <div className="mt-4 grid gap-3">
            <Field label="Password" hint={mode === "setup" ? "Set once" : undefined}>
              <Input
                type="password"
                value={password}
                onChange={(e) => {
                  setLocalPassword(e.target.value);
                  setError(null);
                }}
                placeholder="Enter password"
              />
            </Field>
            {error ? <div className="text-sm text-red-600">{error}</div> : null}
            <Button
              onClick={async () => {
                setLoading(true);
                setError(null);
                try {
                  if (!password.trim()) {
                    setError("请输入密码");
                    return;
                  }
                  if (mode === "setup") {
                    await setPassword(password);
                    navigate(returnTo, { replace: true });
                    return;
                  }
                  const ok = await login(password);
                  if (!ok) {
                    setError("密码错误");
                    return;
                  }
                  navigate(returnTo, { replace: true });
                } finally {
                  setLoading(false);
                }
              }}
              disabled={loading}
            >
              {mode === "setup" ? "Set password" : "Login"}
            </Button>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
