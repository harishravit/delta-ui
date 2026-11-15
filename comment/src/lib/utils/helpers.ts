export { cn } from "cn";
export const formatCommentTime = (date: string): string => {
  const now = Date.now();
  const created = new Date(date).getTime();

  if (Number.isNaN(created)) return "";

  const diff = Math.max(0, now - created);

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return "just now";
  if (minutes < 60) return `${String(minutes).padStart(2, "")}m`;
  if (hours < 24) return `${String(hours).padStart(2, "")}h ago`;
  if (days < 30) return `${String(days).padStart(2, "")} day ago`;
  if (months < 12) return `${months}mon ago`;

  return `${years}y`;
};

export const getUserFallbackName = (name: string): string => {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};

// Notion-style illustrated avatars
export const getAvatar = (seed: string) =>
  `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(seed)}`;
