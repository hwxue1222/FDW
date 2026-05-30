import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { Badge, Button, Card, Field, Input, PageShell, Select, Textarea } from "@/components/ui";
import { useMaidStore } from "@/lib/maidStore";
import { newId } from "@/lib/id";
import type { AvailabilityStatus, MaidProfile, PublishStatus } from "@/lib/types";

function toCsv(items: string[]) {
  return items.join(", ");
}

function parseCsv(text: string) {
  return text
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

type Props = {
  mode: "create" | "edit";
};

export default function AdminMaidEdit(props: Props) {
  const navigate = useNavigate();
  const params = useParams();
  const upsert = useMaidStore((s) => s.upsert);
  const profiles = useMaidStore((s) => s.profiles);

  const existing = useMemo(() => {
    if (props.mode === "create") return null;
    const id = params.maidId;
    return profiles.find((p) => p.id === id) || null;
  }, [params.maidId, profiles, props.mode]);

  const initial = useMemo<MaidProfile>(() => {
    if (existing) return existing;
    return {
      id: newId(),
      code: "",
      name: "",
      nationality: "",
      age: undefined,
      heightCm: undefined,
      weightKg: undefined,
      religion: "",
      languages: [],
      skills: [],
      yearsExperience: undefined,
      experienceSummary: "",
      expectedSalarySgd: undefined,
      restDayPreference: "",
      availabilityStatus: "available",
      publishStatus: "draft",
      avatarUrl: "",
      photoUrls: [],
      biodataPdfUrl: "",
      updatedAt: new Date().toISOString(),
    };
  }, [existing]);

  const [profile, setProfile] = useState<MaidProfile>(initial);
  const [languagesText, setLanguagesText] = useState(() => toCsv(initial.languages));
  const [skillsText, setSkillsText] = useState(() => toCsv(initial.skills));
  const [photosText, setPhotosText] = useState(() => toCsv(initial.photoUrls));
  const [error, setError] = useState<string | null>(null);

  const title = props.mode === "create" ? "New Maid" : "Edit Maid";

  return (
    <PageShell
      title={title}
      right={
        <div className="flex items-center gap-2">
          <Link to="/admin/maids">
            <Button variant="secondary" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
          <Button
            className="gap-2"
            onClick={() => {
              setError(null);
              const next: MaidProfile = {
                ...profile,
                code: profile.code.trim(),
                name: profile.name.trim(),
                nationality: profile.nationality.trim(),
                religion: (profile.religion || "").trim(),
                restDayPreference: (profile.restDayPreference || "").trim(),
                languages: parseCsv(languagesText),
                skills: parseCsv(skillsText),
                photoUrls: parseCsv(photosText),
                biodataPdfUrl: (profile.biodataPdfUrl || "").trim(),
                avatarUrl: (profile.avatarUrl || "").trim(),
              };
              if (!next.code) {
                setError("Code 必填");
                return;
              }
              if (!next.name) {
                setError("Name 必填");
                return;
              }
              if (!next.nationality) {
                setError("Nationality 必填");
                return;
              }
              const codeDup = profiles.some((p) => p.code.toLowerCase() === next.code.toLowerCase() && p.id !== next.id);
              if (codeDup) {
                setError("Code 已存在");
                return;
              }
              upsert(next);
              navigate(`/admin/maids/${next.id}`, { replace: true });
              alert("已保存");
            }}
          >
            <Save className="h-4 w-4" />
            Save
          </Button>
        </div>
      }
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          {error ? <div className="mb-3 text-sm text-red-600">{error}</div> : null}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Code" hint="Unique">
              <Input value={profile.code} onChange={(e) => setProfile((p) => ({ ...p, code: e.target.value }))} placeholder="MD-2401" />
            </Field>
            <Field label="Name">
              <Input value={profile.name} onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))} placeholder="Full name" />
            </Field>
            <Field label="Nationality">
              <Input
                value={profile.nationality}
                onChange={(e) => setProfile((p) => ({ ...p, nationality: e.target.value }))}
                placeholder="Indonesia"
              />
            </Field>
            <Field label="Availability">
              <Select
                value={profile.availabilityStatus}
                onChange={(e) => setProfile((p) => ({ ...p, availabilityStatus: e.target.value as AvailabilityStatus }))}
              >
                <option value="available">Available</option>
                <option value="reserved">Reserved</option>
                <option value="unavailable">Unavailable</option>
              </Select>
            </Field>
            <Field label="Publish">
              <Select value={profile.publishStatus} onChange={(e) => setProfile((p) => ({ ...p, publishStatus: e.target.value as PublishStatus }))}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </Select>
            </Field>
            <Field label="Age">
              <Input
                type="number"
                value={profile.age ?? ""}
                onChange={(e) => setProfile((p) => ({ ...p, age: e.target.value ? Number(e.target.value) : undefined }))}
                placeholder=""
              />
            </Field>
            <Field label="Height (cm)">
              <Input
                type="number"
                value={profile.heightCm ?? ""}
                onChange={(e) => setProfile((p) => ({ ...p, heightCm: e.target.value ? Number(e.target.value) : undefined }))}
                placeholder=""
              />
            </Field>
            <Field label="Weight (kg)">
              <Input
                type="number"
                value={profile.weightKg ?? ""}
                onChange={(e) => setProfile((p) => ({ ...p, weightKg: e.target.value ? Number(e.target.value) : undefined }))}
                placeholder=""
              />
            </Field>
            <Field label="Religion">
              <Input value={profile.religion || ""} onChange={(e) => setProfile((p) => ({ ...p, religion: e.target.value }))} placeholder="" />
            </Field>
            <Field label="Years experience">
              <Input
                type="number"
                value={profile.yearsExperience ?? ""}
                onChange={(e) => setProfile((p) => ({ ...p, yearsExperience: e.target.value ? Number(e.target.value) : undefined }))}
                placeholder=""
              />
            </Field>
            <Field label="Expected salary (SGD)">
              <Input
                type="number"
                value={profile.expectedSalarySgd ?? ""}
                onChange={(e) => setProfile((p) => ({ ...p, expectedSalarySgd: e.target.value ? Number(e.target.value) : undefined }))}
                placeholder=""
              />
            </Field>
            <Field label="Rest day preference">
              <Input
                value={profile.restDayPreference || ""}
                onChange={(e) => setProfile((p) => ({ ...p, restDayPreference: e.target.value }))}
                placeholder="2 rest days"
              />
            </Field>
          </div>

          <div className="mt-4 grid gap-4">
            <Field label="Languages" hint="Comma-separated">
              <Input value={languagesText} onChange={(e) => setLanguagesText(e.target.value)} placeholder="English, Mandarin" />
            </Field>
            <Field label="Skills" hint="Comma-separated">
              <Input value={skillsText} onChange={(e) => setSkillsText(e.target.value)} placeholder="Cooking, Infant Care" />
            </Field>
            <Field label="Experience summary">
              <Textarea
                value={profile.experienceSummary || ""}
                onChange={(e) => setProfile((p) => ({ ...p, experienceSummary: e.target.value }))}
                placeholder=""
              />
            </Field>
          </div>
        </Card>

        <Card className="p-5">
          <div className="text-sm font-medium text-neutral-900">Media</div>
          <div className="mt-4 grid gap-4">
            <Field label="Avatar URL">
              <Input value={profile.avatarUrl || ""} onChange={(e) => setProfile((p) => ({ ...p, avatarUrl: e.target.value }))} placeholder="https://..." />
            </Field>
            <Field label="Photo URLs" hint="Comma-separated">
              <Textarea value={photosText} onChange={(e) => setPhotosText(e.target.value)} placeholder="https://..., https://..." />
            </Field>
            <Field label="Biodata PDF URL">
              <Input
                value={profile.biodataPdfUrl || ""}
                onChange={(e) => setProfile((p) => ({ ...p, biodataPdfUrl: e.target.value }))}
                placeholder="https://..."
              />
            </Field>
            <div className="text-sm text-neutral-600">Preview</div>
            <div className="flex flex-wrap gap-2">
              <Badge>{profile.publishStatus}</Badge>
              <Badge>{profile.availabilityStatus}</Badge>
              {parseCsv(skillsText)
                .slice(0, 6)
                .map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
            </div>
            {profile.avatarUrl ? (
              <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
                <img src={profile.avatarUrl} alt="" className="h-48 w-full object-cover" loading="lazy" />
              </div>
            ) : (
              <div className="text-sm text-neutral-500">No avatar.</div>
            )}
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
