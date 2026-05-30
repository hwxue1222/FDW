import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import PublicShell from "@/components/PublicShell";
import { Badge, Button, Card, Input, Select } from "@/components/ui";
import { useMaidStore } from "@/lib/maidStore";
import { useUiStore } from "@/lib/uiStore";
import type { MaidProfile } from "@/lib/types";
import { getRefFromSearch, isEmbedSearch } from "@/lib/embed";

function availabilityLabel(v: MaidProfile["availabilityStatus"]) {
  if (v === "available") return { text: "Available", tone: "green" as const };
  if (v === "reserved") return { text: "Reserved", tone: "amber" as const };
  return { text: "Unavailable", tone: "red" as const };
}

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const embed = isEmbedSearch(location.search);
  const profiles = useMaidStore((s) => s.profiles);
  const search = useUiStore((s) => s.search);
  const nationality = useUiStore((s) => s.nationality);
  const availability = useUiStore((s) => s.availability);
  const skill = useUiStore((s) => s.skill);
  const setSearch = useUiStore((s) => s.setSearch);
  const setNationality = useUiStore((s) => s.setNationality);
  const setAvailability = useUiStore((s) => s.setAvailability);
  const setSkill = useUiStore((s) => s.setSkill);
  const clear = useUiStore((s) => s.clear);

  const ref = getRefFromSearch(location.search);
  const refLower = ref.toLowerCase();
  const refMatch = ref
    ? profiles.find((p) => p.publishStatus === "published" && p.code.toLowerCase() === refLower)
    : undefined;

  useEffect(() => {
    if (!ref) return;
    if (refMatch) {
      navigate(`/maids/${refMatch.id}${location.search}`, { replace: true });
      return;
    }
    if (!search) setSearch(ref);
  }, [navigate, location.search, ref, refMatch, search, setSearch]);

  const published = profiles.filter((p) => p.publishStatus === "published");
  const nationalities = Array.from(new Set(profiles.map((p) => p.nationality).filter(Boolean))).sort((a, b) => a.localeCompare(b));
  const skills = Array.from(new Set(profiles.flatMap((p) => p.skills).filter(Boolean))).sort((a, b) => a.localeCompare(b));

  const q = search.trim().toLowerCase();
  const filtered = published.filter((p) => {
    if (nationality && p.nationality !== nationality) return false;
    if (availability && p.availabilityStatus !== availability) return false;
    if (skill && !p.skills.some((s) => s.toLowerCase() === skill.toLowerCase())) return false;
    if (!q) return true;

    const haystack = `${p.name} ${p.code} ${p.nationality} ${p.skills.join(" ")}`.toLowerCase();
    return haystack.includes(q);
  });

  return (
    <PublicShell
      title="Maid Library"
      embed={embed}
      right={
        embed ? null : (
          <Link to="/admin/login">
            <Button variant="ghost">Admin</Button>
          </Link>
        )
      }
    >
      <Card className="p-4">
        <div className="grid gap-3 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <Input
                value={ref && !refMatch && !search ? ref : search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name / code / skill"
                className="pl-9"
              />
            </div>
          </div>
          <Select value={nationality} onChange={(e) => setNationality(e.target.value)}>
            <option value="">All nationalities</option>
            {nationalities.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </Select>
          <Select value={availability} onChange={(e) => setAvailability(e.target.value as any)}>
            <option value="">All availability</option>
            <option value="available">Available</option>
            <option value="reserved">Reserved</option>
            <option value="unavailable">Unavailable</option>
          </Select>
          <Select value={skill} onChange={(e) => setSkill(e.target.value)} className="md:col-span-2">
            <option value="">All skills</option>
            {skills.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
          <div className="md:col-span-2">
            <Button variant="secondary" onClick={clear} className="w-full">
              Clear filters
            </Button>
          </div>
        </div>
      </Card>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 ? (
          <Card className="p-6 text-sm text-neutral-600 sm:col-span-2 lg:col-span-3">No results.</Card>
        ) : (
          filtered.map((p) => {
            const a = availabilityLabel(p.availabilityStatus);
            return (
              <Link key={p.id} to={`/maids/${p.id}`} className="block">
                <Card className="h-full p-4 transition-colors hover:bg-neutral-50">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-base font-semibold text-neutral-900">{p.name}</div>
                      <div className="mt-0.5 text-sm text-neutral-600">{p.code}</div>
                    </div>
                    <Badge tone={a.tone}>{a.text}</Badge>
                  </div>
                  <div className="mt-3 text-sm text-neutral-700">{p.nationality}</div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.skills.slice(0, 4).map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                    {p.skills.length > 4 ? <Badge>+{p.skills.length - 4}</Badge> : null}
                  </div>
                </Card>
              </Link>
            );
          })
        )}
      </div>
    </PublicShell>
  );
}
