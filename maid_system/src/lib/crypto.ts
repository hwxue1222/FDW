export async function sha256Hex(text: string) {
  const enc = new TextEncoder();
  const bytes = enc.encode(text);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  const hash = Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hash;
}
