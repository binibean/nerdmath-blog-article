import { style, globalStyle } from "@vanilla-extract/css";
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
  marginBottom: vars.space.md,
  textAlign: "center",
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
  marginBottom: vars.space.xl,
  textAlign: "center",
  paddingBottom: vars.space.xl,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const articleGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: vars.space.lg,
});

export const articleGridItem = style({
  display: "flex",
});

export const articleCard = style({
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  boxShadow: vars.shadow.sm,
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
  height: "100%",
  transition: "box-shadow 0.15s ease, transform 0.15s ease",
  ":hover": {
    boxShadow: vars.shadow.md,
    transform: "translateY(-2px)",
  },
});

export const cardCategory = style({
  display: "inline-block",
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.tagText,
  backgroundColor: vars.color.tag,
  borderRadius: vars.radius.full,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  letterSpacing: "0.02em",
});

export const cardTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text,
  lineHeight: "1.4",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

export const cardSummary = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  lineHeight: "1.7",
  flexGrow: 1,
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

export const cardMeta = style({
  display: "flex",
  gap: vars.space.md,
  fontSize: vars.fontSize.xs,
  color: vars.color.textLight,
  marginTop: vars.space.xs,
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.xs,
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const detailTagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.xs,
  listStyle: "none",
  padding: 0,
  marginBottom: vars.space.xl,
});

export const tag = style({
  listStyle: "none",
  fontSize: vars.fontSize.xs,
  color: vars.color.textMuted,
  backgroundColor: vars.color.backgroundAlt,
  borderRadius: vars.radius.full,
  padding: `2px ${vars.space.sm}`,
});

// --- Detail page styles ---

export const detailWrapper = style({
  maxWidth: "740px",
  margin: "0 auto",
  padding: `${vars.space.xxl} ${vars.space.lg}`,
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.xl} ${vars.space.md}`,
    },
  },
});

export const backLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.xs,
  fontSize: vars.fontSize.sm,
  color: vars.color.primary,
  textDecoration: "none",
  marginBottom: vars.space.lg,
  ":hover": {
    textDecoration: "underline",
  },
});

export const detailCategory = style({
  display: "inline-block",
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.tagText,
  backgroundColor: vars.color.tag,
  borderRadius: vars.radius.full,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  marginBottom: vars.space.md,
});

export const detailTitle = style({
  fontSize: vars.fontSize.xxl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text,
  lineHeight: "1.3",
  marginBottom: vars.space.md,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSize.xl,
    },
  },
});

export const detailSummary = style({
  fontSize: vars.fontSize.md,
  color: vars.color.textMuted,
  lineHeight: "1.7",
  borderLeft: `3px solid ${vars.color.primary}`,
  paddingLeft: vars.space.md,
  marginBottom: vars.space.lg,
});

export const detailMeta = style({
  display: "flex",
  gap: vars.space.md,
  fontSize: vars.fontSize.sm,
  color: vars.color.textLight,
  marginBottom: vars.space.xl,
  paddingBottom: vars.space.lg,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const detailBody = style({
  fontSize: vars.fontSize.md,
  color: vars.color.text,
  lineHeight: "1.85",
});

globalStyle(`${detailBody} h2`, {
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  marginTop: vars.space.xl,
  marginBottom: vars.space.md,
});

globalStyle(`${detailBody} p`, {
  marginBottom: vars.space.md,
});

globalStyle(`${detailBody} ul, ${detailBody} ol`, {
  paddingLeft: vars.space.lg,
  marginBottom: vars.space.md,
});

globalStyle(`${detailBody} li`, {
  marginBottom: vars.space.xs,
});

globalStyle(`${detailBody} strong`, {
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text,
});

globalStyle(`${detailBody} table`, {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: vars.space.lg,
  fontSize: vars.fontSize.sm,
});

globalStyle(`${detailBody} th`, {
  backgroundColor: vars.color.backgroundAlt,
  padding: `${vars.space.sm} ${vars.space.md}`,
  textAlign: "left",
  fontWeight: vars.fontWeight.semibold,
  borderBottom: `2px solid ${vars.color.border}`,
});

globalStyle(`${detailBody} td`, {
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderBottom: `1px solid ${vars.color.border}`,
});
