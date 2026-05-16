import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/tokens.css";

export const hero = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: `${vars.space.xxl} ${vars.space.lg}`,
  textAlign: "center",
  gap: vars.space.lg,
});

export const title = style({
  fontSize: vars.fontSize.hero,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text,
  lineHeight: "1.2",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSize.xxl,
    },
  },
});

export const titleAccent = style({
  color: vars.color.primary,
});

export const subtitle = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.textMuted,
  maxWidth: "520px",
  lineHeight: "1.7",
});

export const ctaGroup = style({
  display: "flex",
  gap: vars.space.md,
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: vars.space.md,
});

export const ctaPrimary = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: vars.color.primary,
  color: "#ffffff",
  borderRadius: vars.radius.md,
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.fontSize.md,
  textDecoration: "none",
  transition: "background-color 0.15s ease",
  ":hover": {
    backgroundColor: vars.color.primaryHover,
  },
});

export const ctaSecondary = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: "transparent",
  color: vars.color.primary,
  border: `1px solid ${vars.color.primary}`,
  borderRadius: vars.radius.md,
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.fontSize.md,
  textDecoration: "none",
  transition: "background-color 0.15s ease, color 0.15s ease",
  ":hover": {
    backgroundColor: vars.color.primary,
    color: "#ffffff",
  },
});
