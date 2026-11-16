/**
 * Fork token reference for docs pages. Values mirror app/globals.css and DESIGN.md.
 * If you change a value, change all three.
 */
export const colorTokens = {
  neutrals: [
    { name: "background", light: "#F1F1EE", dark: "#121211", use: "Page" },
    { name: "card", light: "#FAFAF9", dark: "#1A1A19", use: "Cards, inputs, popovers" },
    { name: "muted", light: "#F3F3F1", dark: "#222220", use: "Chips, subtle fills" },
    { name: "accent", light: "#EBEBE7", dark: "#2A2A27", use: "Hover and selected rows" },
    { name: "skeleton", light: "#E0E0DD", dark: "#2E2E2B", use: "Loading bars, off switch" },
    { name: "border", light: "#E2E2DE", dark: "#2C2C29", use: "Hairlines" },
    { name: "muted-foreground", light: "#666663", dark: "#A3A39E", use: "Secondary text" },
    { name: "foreground", light: "#141414", dark: "#F1F1EE", use: "Ink: text, primary buttons" },
  ],
  accent: [
    { name: "brand", light: "#FA4F20", dark: "#FA4F20", use: "On, approved, live, waiting on you" },
    { name: "brand-tint", light: "#FEF1EC", dark: "#2A1A14", use: "Brand badge fill" },
    { name: "brand-line", light: "#FBCDBD", dark: "#5A2A1A", use: "Brand badge border" },
    { name: "destructive", light: "#B42318", dark: "#F28B7E", use: "Delete, errors" },
  ],
} as const

export const typeScale = [
  { name: "display", size: 36, line: 40, weight: 600, tracking: "-0.03em", sample: "Your site, handled" },
  { name: "h1", size: 24, line: 32, weight: 600, tracking: "-0.02em", sample: "Sites" },
  { name: "h2", size: 20, line: 28, weight: 600, tracking: "-0.01em", sample: "Site tasks" },
  { name: "h3", size: 16, line: 20, weight: 600, tracking: "-0.01em", sample: "Card title" },
  { name: "body", size: 14, line: 20, weight: 400, tracking: "0", sample: "Fork updated your search title so results name the product." },
  { name: "label", size: 14, line: 20, weight: 500, tracking: "0", sample: "Labels and buttons" },
  { name: "caption", size: 12, line: 16, weight: 400, tracking: "0", sample: "Edited 2h ago · fork.site" },
] as const

export const spacing = [
  { px: 4, use: "Tight" },
  { px: 8, use: "Icon gap, button gap" },
  { px: 12, use: "List rows" },
  { px: 16, use: "Grid gap" },
  { px: 24, use: "Card padding" },
  { px: 40, use: "Section gap" },
] as const

export const radii = [
  { name: "sm", px: 6, use: "Badges" },
  { name: "lg", px: 10, use: "Buttons, inputs" },
  { name: "xl", px: 12, use: "Menus, popovers" },
  { name: "2xl", px: 16, use: "Cards, dialogs" },
] as const
