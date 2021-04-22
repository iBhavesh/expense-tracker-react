export function getYYYYMMDD(d0: string) {
  const d = new Date(d0);
  return new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000)
    .toISOString()
    .split("T")[0];
}
