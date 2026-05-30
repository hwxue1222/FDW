import { Link, useLocation, useParams } from "react-router-dom";
import { Copy, ArrowLeft, FileText } from "lucide-react";
import PublicShell from "@/components/PublicShell";
import { Badge, Button, Card } from "@/components/ui";
import { useMaidStore } from "@/lib/maidStore";
import { isEmbedSearch } from "@/lib/embed";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export default function MaidDetail() {
  const { maidId } = useParams();
  const location = useLocation();
  const embed = isEmbedSearch(location.search);
  const profile = useMaidStore((s) => s.profiles.find((p) => p.id === maidId && p.publishStatus === "published"));

  if (!profile) {
    return (
      <PublicShell
        title="Not Found"
        embed={embed}
        right={
          embed ? null : (
            <Link to="/">
              <Button variant="secondary">Back</Button>
            </Link>
          )
        }
      >
        <Card className="p-6 text-sm text-neutral-700">This profile is not available.</Card>
      </PublicShell>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <PublicShell
      title={profile.name}
      embed={embed}
      right={
        embed ? null : (
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="secondary" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="gap-2"
              onClick={async () => {
                const ok = await copyText(shareUrl);
                if (!ok) alert("复制失败，请手动复制地址栏链接");
              }}
            >
              <Copy className="h-4 w-4" />
              Copy link
            </Button>
          </div>
        )
      }
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{profile.code}</Badge>
            <Badge>{profile.nationality}</Badge>
            <Badge>{profile.availabilityStatus}</Badge>
            {profile.age ? <Badge>{profile.age} yrs</Badge> : null}
            {profile.expectedSalarySgd ? <Badge>SGD {profile.expectedSalarySgd}</Badge> : null}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Card className="p-4">
              <div className="text-sm font-medium text-neutral-900">Languages</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {profile.languages.length ? profile.languages.map((l) => <Badge key={l}>{l}</Badge>) : <div className="text-sm text-neutral-500">-</div>}
              </div>
            </Card>
            <Card className="p-4">
              <div className="text-sm font-medium text-neutral-900">Skills</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {profile.skills.length ? profile.skills.map((s) => <Badge key={s}>{s}</Badge>) : <div className="text-sm text-neutral-500">-</div>}
              </div>
            </Card>
          </div>

          <div className="mt-4">
            <div className="text-sm font-medium text-neutral-900">Experience</div>
            <div className="mt-2 text-sm text-neutral-700 whitespace-pre-wrap">{profile.experienceSummary || "-"}</div>
          </div>
        </Card>

        <Card className="p-5">
          <div className="text-sm font-medium text-neutral-900">Attachments</div>
          <div className="mt-3 grid gap-2">
            {profile.biodataPdfUrl ? (
              <a href={profile.biodataPdfUrl} target="_blank" rel="noreferrer">
                <Button variant="secondary" className="w-full gap-2">
                  <FileText className="h-4 w-4" />
                  View biodata PDF
                </Button>
              </a>
            ) : (
              <div className="text-sm text-neutral-500">No PDF.</div>
            )}
          </div>

          <div className="mt-5">
            <div className="text-sm font-medium text-neutral-900">Photos</div>
            {profile.photoUrls.length ? (
              <div className="mt-2 grid grid-cols-2 gap-2">
                {profile.photoUrls.slice(0, 6).map((u) => (
                  <a key={u} href={u} target="_blank" rel="noreferrer" className="block">
                    <div className="aspect-square overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
                      <img src={u} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="mt-2 text-sm text-neutral-500">No photos.</div>
            )}
          </div>
        </Card>
      </div>
    </PublicShell>
  );
}
