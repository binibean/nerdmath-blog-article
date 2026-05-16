import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: "#2563eb",
    primaryHover: "#1d4ed8",
    text: "#111827",
    textMuted: "#6b7280",
    textLight: "#9ca3af",
    background: "#ffffff",
    backgroundAlt: "#f9fafb",
    border: "#e5e7eb",
    tag: "#eff6ff",
    tagText: "#1d4ed8",
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "40px",
    xxl: "64px",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "24px",
    xxl: "32px",
    hero: "48px",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 3px rgba(0,0,0,0.08)",
    md: "0 4px 12px rgba(0,0,0,0.08)",
  },
});
