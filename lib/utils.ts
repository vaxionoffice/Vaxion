export function getInitials(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function getFirstName(value: string) {
  return value.trim().split(/\s+/)[0] || "Founder";
}
