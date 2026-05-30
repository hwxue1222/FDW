export function isEmbedSearch(search: string) {
  const params = new URLSearchParams(search);
  const v = params.get("embed");
  if (!v) return false;
  return v === "1" || v.toLowerCase() === "true";
}

export function getRefFromSearch(search: string) {
  const params = new URLSearchParams(search);
  const ref = params.get("ref") || params.get("code") || "";
  return ref.trim();
}
