import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/tokens.css";

export const pageWrapper = style({
  maxWidth: "640px",
  margin: "0 auto",
  padding: `${vars.space.xxl} ${vars.space.lg}`,
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.xl} ${vars.space.md}`,
    },
  },
});

export const pageTitle = style({
  fontSize: vars.fontSize.xxl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text,
  marginBottom: vars.space.sm,
});

export const pageSubtitle = style({
  fontSize: vars.fontSize.md,
  color: vars.color.textMuted,
  marginBottom: vars.space.xl,
  paddingBottom: vars.space.xl,
  borderBottom: `1px solid ${vars.color.border}`,
  lineHeight: "1.7",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xl,
});

export const fieldGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
});

export const label = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text,
});

export const required = style({
  color: vars.color.primary,
  marginLeft: vars.space.xs,
});

export const radioGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
});

export const radioItem = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  fontSize: vars.fontSize.sm,
  color: vars.color.text,
  cursor: "pointer",
});

export const checkboxGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
});

export const checkboxItem = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  fontSize: vars.fontSize.sm,
  color: vars.color.text,
  cursor: "pointer",
});

export const select = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  fontSize: vars.fontSize.sm,
  color: vars.color.text,
  backgroundColor: vars.color.background,
  width: "100%",
  ":focus": {
    outline: `2px solid ${vars.color.primary}`,
    outlineOffset: "2px",
  },
});

export const textarea = style({
  padding: vars.space.md,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  fontSize: vars.fontSize.sm,
  color: vars.color.text,
  backgroundColor: vars.color.background,
  width: "100%",
  minHeight: "100px",
  resize: "vertical",
  lineHeight: "1.6",
  ":focus": {
    outline: `2px solid ${vars.color.primary}`,
    outlineOffset: "2px",
  },
});

export const input = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  fontSize: vars.fontSize.sm,
  color: vars.color.text,
  backgroundColor: vars.color.background,
  width: "100%",
  ":focus": {
    outline: `2px solid ${vars.color.primary}`,
    outlineOffset: "2px",
  },
});

export const errorMessage = style({
  fontSize: vars.fontSize.xs,
  color: "#dc2626",
  marginTop: vars.space.xs,
});

export const submitButton = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: vars.color.primary,
  color: "#ffffff",
  borderRadius: vars.radius.md,
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.fontSize.md,
  border: "none",
  cursor: "pointer",
  marginTop: vars.space.md,
  transition: "background-color 0.15s ease",
  ":hover": {
    backgroundColor: vars.color.primaryHover,
  },
  ":disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
});
