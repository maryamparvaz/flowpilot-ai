export type Theme = "light" | "dark";

export const THEME_KEY = "flowpilot-theme";

const THEME_COLORS: Record<Theme, string> = {
  light: "#f8fafc",
  dark: "#0b0f1a",
};

function setThemeColor(theme: Theme) {
  if (typeof document === "undefined") return;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLORS[theme]);
}

export const themeInitScript = `(() => {
  try {
    const stored = localStorage.getItem("${THEME_KEY}");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored || (prefersDark ? "dark" : "light");
    if (theme === "dark") document.documentElement.classList.add("dark");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "${THEME_COLORS.dark}" : "${THEME_COLORS.light}");
  } catch (_) {}
})();`;

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(THEME_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
  setThemeColor(theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (_) {}
}
