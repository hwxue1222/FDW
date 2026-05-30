import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Download, Upload, Plus, RefreshCcw, Trash2, Pencil } from "lucide-react";
import { Badge, Button, Card, Input, PageShell, Select } from "@/components/ui";
import { useMaidStore } from "@/lib/maidStore";
import type { PublishStatus } from "@/lib/types";

export default function AdminMaidList() {
  const navigate = useNavigate();
  const profiles = useMaidStore((s) => s.profiles);
  const setPublishStatus = useMaidStore((s) => s.setPublishStatus);
  const remove = useMaidStore((s) => s.remove);
  const exportJson = useMaidStore((s) => s.exportJson);
  const importJson = useMaidStore((s) => s.importJson);
  const resetToSeed = useMaidStore((s) => s.resetToSeed);

  const [q, setQ] = useState("");
  const [status, setStatus] = useState<PublishStatus | "">("");
  const [importText, setImportText] = useState("");
  const [showImport, setShowImport] = useState(false);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return profiles.filter((p) => {
      if (status && p.publishStatus !== status) return false;
      if (!query) return true;
      const hay = `${p.name} ${p.code} ${p.nationality} ${p.skills.join(" ")}`.toLowerCase();
      return hay.includes(query);
    });
  }, [profiles, q, status]);

  return (
    <PageShell
      title="Maids"
      right={
        <div className="flex flex-wrap items-center gap-2">
          <Link to="/admin/maids/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New
            </Button>
          </Link>
          <Button
            variant="secondary"
            className="gap-2"
            onClick={() => {
              const text = exportJson();
              void navigator.clipboard.writeText(text);
              alert("已复制 JSON 到剪贴板");
            }}
          >
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button
            variant="secondary"
            className="gap-2"
            onClick={() => {
              setShowImport((v) => !v);
            }}
          >
            <Upload className="h-4 w-4" />
            Import
          </Button>
          <Button
            variant="ghost"
            className="gap-2"
            onClick={async () => {
              const ok = confirm("将清空当前数据并恢复为种子数据，确定吗？");
              if (!ok) return;
              await resetToSeed();
              alert("已恢复");
            }}
          >
            <RefreshCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>
      }
    >
      <Card className="p-4">
        <div className="grid gap-3 md:grid-cols-5">
          <div className="md:col-span-3">
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name / code / skill" />
          </div>
          <Select value={status} onChange={(e) => setStatus(e.target.value as any)}>
            <option value="">All</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </Select>
          <Button
            variant="secondary"
            onClick={() => {
              setQ("");
              setStatus("");
            }}
          >
            Clear
          </Button>
        </div>

        {showImport ? (
          <div className="mt-4 grid gap-2">
            <div className="text-sm text-neutral-700">粘贴 JSON（格式：{`{"version":1,"maids":[...]}` }）</div>
            <textarea
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              className="min-h-40 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-200 focus:ring-2"
              placeholder="Paste JSON here"
            />
            <div className="flex flex-wrap gap-2">
              <Button
                variant="secondary"
                onClick={() => {
                  const res = importJson(importText);
                  if (res.ok === false) {
                    alert(res.message);
                    return;
                  }
                  setImportText("");
                  setShowImport(false);
                  alert("导入成功");
                }}
              >
                Apply
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setImportText("");
                  setShowImport(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : null}
      </Card>

      <div className="mt-4 grid gap-3">
        {filtered.map((p) => (
          <Card key={p.id} className="p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-base font-semibold text-neutral-900">{p.name}</div>
                  <Badge>{p.code}</Badge>
                  <Badge>{p.nationality}</Badge>
                  <Badge>{p.availabilityStatus}</Badge>
                  <Badge tone={p.publishStatus === "published" ? "green" : "neutral"}>{p.publishStatus}</Badge>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.skills.slice(0, 6).map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="secondary"
                  className="gap-2"
                  onClick={() => {
                    navigate(`/admin/maids/${p.id}`);
                  }}
                >
                  <Pencil className="h-4 w-4" />
                  Edit
                </Button>
                <Button
                  variant={p.publishStatus === "published" ? "ghost" : "secondary"}
                  onClick={() => {
                    setPublishStatus(p.id, p.publishStatus === "published" ? "draft" : "published");
                  }}
                >
                  {p.publishStatus === "published" ? "Unpublish" : "Publish"}
                </Button>
                <Button
                  variant="danger"
                  className="gap-2"
                  onClick={() => {
                    const ok = confirm(`删除 ${p.name}（${p.code}）？`);
                    if (!ok) return;
                    remove(p.id);
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
        {filtered.length === 0 ? <Card className="p-6 text-sm text-neutral-600">No results.</Card> : null}
      </div>
    </PageShell>
  );
}
