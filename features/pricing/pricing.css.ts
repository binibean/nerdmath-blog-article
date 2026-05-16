import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/tokens.css";

export const pageWrapper = style({
  maxWidth: "1100px",
  margin: "0 auto",
  padding: `${vars.space.xxl} ${vars.space.lg}`,
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.xl} ${vars.space.md}`,
    },
  },
});

export const pageTitle = style({
  fontSize: vars.fontSize.hero,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text,
  textAlign: "center",
  marginBottom: vars.space.md,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSize.xxl,
    },
  },
});

export const pageTitleAccent = style({
  color: vars.color.primary,
});

export const pageSubtitle = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.textMuted,
  textAlign: "center",
  marginBottom: vars.space.xl,
  paddingBottom: vars.space.xl,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const pricingGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: vars.space.lg,
  alignItems: "start",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const pricingCard = style({
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
  boxShadow: vars.shadow.sm,
});

export const pricingCardHighlighted = style({
  backgroundColor: vars.color.background,
  border: `2px solid ${vars.color.primary}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
  boxShadow: vars.shadow.md,
  position: "relative",
});

export const highlightBadge = style({
  position: "absolute",
  top: "-14px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: vars.color.primary,
  color: "#ffffff",
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: vars.radius.full,
  whiteSpace: "nowrap",
});

export const planName = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text,
});

export const planPrice = style({
  fontSize: vars.fontSize.xxl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text,
  lineHeight: "1",
});

export const planPriceUnit = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.normal,
  color: vars.color.textMuted,
  marginLeft: vars.space.xs,
});

export const planDescription = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  lineHeight: "1.6",
});

export const featureList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
  listStyle: "none",
  padding: 0,
  margin: 0,
  borderTop: `1px solid ${vars.color.border}`,
  paddingTop: vars.space.md,
});

export const featureItem = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  display: "flex",
  alignItems: "flex-start",
  gap: vars.space.sm,
});

export const featureCheck = style({
  color: vars.color.primary,
  fontWeight: vars.fontWeight.bold,
  flexShrink: 0,
});

export const ctaButton = style({
  marginTop: "auto",
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  textAlign: "center",
  cursor: "pointer",
  border: `1px solid ${vars.color.primary}`,
  backgroundColor: "transparent",
  color: vars.color.primary,
  transition: "background-color 0.15s ease, color 0.15s ease",
  ":hover": {
    backgroundColor: vars.color.primary,
    color: "#ffffff",
  },
});

export const ctaButtonPrimary = style({
  marginTop: "auto",
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  textAlign: "center",
  cursor: "pointer",
  border: "none",
  backgroundColor: vars.color.primary,
  color: "#ffffff",
  transition: "background-color 0.15s ease",
  ":hover": {
    backgroundColor: vars.color.primaryHover,
  },
});

export const notice = style({
  marginTop: vars.space.xl,
  padding: vars.space.lg,
  backgroundColor: vars.color.backgroundAlt,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  textAlign: "center",
  lineHeight: "1.7",
});
