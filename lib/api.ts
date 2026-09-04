/** Build a basePath-aware API URL so client fetches work under /savotech. */
export function api(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
