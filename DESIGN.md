---
version: alpha
name: Fork
description: Calm, product-UI design system for Fork, the self-driving website platform. Warm off-white surfaces, ink text, and one orange accent (#FA4F20) used only where something is on, approved, live, or waiting on the user. Built on shadcn/ui (Radix, Vega spacing) and Geist.
colors:
  primary: "#141414"
  on-primary: "#FAFAF9"
  brand: "#FA4F20"
  on-brand: "#FFFFFF"
  brand-tint: "#FEF1EC"
  brand-line: "#FBCDBD"
  neutral: "#F1F1EE"
  surface: "#FAFAF9"
  on-surface: "#141414"
  surface-subtle: "#F3F3F1"
  surface-hover: "#EBEBE7"
  on-surface-muted: "#666663"
  skeleton: "#E0E0DD"
  border: "#E2E2DE"
  border-subtle: "#E8E8E4"
  error: "#B42318"
  dark-neutral: "#121211"
  dark-surface: "#1A1A19"
  dark-on-surface: "#F1F1EE"
  dark-surface-subtle: "#222220"
  dark-surface-hover: "#2A2A27"
  dark-on-surface-muted: "#A3A39E"
  dark-border: "#2C2C29"
  dark-brand-tint: "#2A1A14"
  dark-brand-line: "#5A2A1A"
  dark-error: "#F28B7E"
typography:
  headline-display:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.01em
  title:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
  caption:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  mono:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 16px
rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 10px
  xl: 12px
  2xl: 16px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 40px
  card-padding: 24px
  grid-gap: 16px
  control-height: 40px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    height: 40px
    padding: 16px
  button-primary-hover:
    backgroundColor: "#2A2A2A"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    height: 40px
    padding: 16px
  button-outline-hover:
    backgroundColor: "{colors.surface-hover}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    height: 40px
    padding: 16px
  button-brand:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    height: 40px
    padding: 16px
  button-destructive:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    height: 40px
    padding: 16px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    height: 40px
    padding: 12px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.2xl}"
    padding: 24px
  popover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: 6px
  dialog:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.2xl}"
    padding: 24px
  badge:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    height: 24px
    padding: 8px
  badge-brand:
    backgroundColor: "{colors.brand-tint}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    height: 24px
    padding: 8px
  switch-on:
    backgroundColor: "{colors.brand}"
    width: 40px
    height: 22px
    rounded: "{rounded.full}"
  switch-off:
    backgroundColor: "{colors.skeleton}"
    width: 40px
    height: 22px
    rounded: "{rounded.full}"
  tabs-segmented:
    backgroundColor: "{colors.surface-subtle}"
    rounded: "{rounded.lg}"
    height: 40px
    padding: 3px
  tabs-segmented-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
  tooltip:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.neutral}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
  progress:
    backgroundColor: "{colors.surface-subtle}"
    height: 8px
    rounded: "{rounded.full}"
  skeleton:
    backgroundColor: "{colors.skeleton}"
    rounded: "{rounded.md}"
---

# Fork

## Overview

Fork is a self-driving website platform for small business owners. They don't build, code or configure automations. They see what the Fork agent is doing, approve suggestions, and watch results. The interface must feel **playful, easy, approachable and light**, and above all **calm**: a quiet product surface where the agent's work is easy to scan.

- **Agent-first.** The main surfaces are a feed of what Fork noticed and did, suggestions waiting for a yes, and automations already running. There is no automation builder.
- **Calm by default.** Soft warm off-white surfaces and ink text do almost all the work. Contrast between surfaces is low; hierarchy comes from type weight, spacing and hairline borders.
- **Orange when it matters.** The one accent, Fork orange `#FA4F20`, appears only where something is **on, approved, live, or waiting on the user**. If a screen has nothing that needs attention, it may have no orange at all.
- **Spacious, not dense.** Generous padding, one idea per row, short copy.
- Light mode is the primary experience. Dark mode is fully supported with the same rules.
- Implementation: shadcn/ui on Radix primitives with Vega spacing, Tailwind v4, Lucide icons. Token names follow shadcn (`background`, `foreground`, `card`, `primary`, `muted`, `accent`, `border`, `ring`, `destructive`) plus Fork additions (`brand`, `brand-tint`, `brand-line`, `surface-subtle`, `border-subtle`, `skeleton`).

## Colors

The palette is five families: warm page gray, near-white surfaces, hairline borders, ink, and one orange.

- **Page (#F1F1EE):** A warm light gray behind everything. shadcn `background`.
- **Surface (#FAFAF9):** Cards, inputs, popovers and dialogs. shadcn `card` and `popover`.
- **Subtle surface (#F3F3F1):** Chips, segmented-tab tracks, icon tiles. shadcn `muted` and `secondary`.
- **Hover (#EBEBE7):** Hovered and selected rows and ghost buttons. shadcn `accent`. Note that shadcn's "accent" is a neutral hover color, not the brand.
- **Hairlines (#E2E2DE, #E8E8E4):** `border` for card and control edges, `border-subtle` for dividers inside cards.
- **Skeleton (#E0E0DD):** Loading bars and the off state of switches.
- **Ink (#141414):** Headings, body text and primary buttons. shadcn `foreground` and `primary`.
- **Muted ink (#666663):** Descriptions, metadata and placeholders. shadcn `muted-foreground`.
- **Fork orange (#FA4F20):** The only accent. It's used for switches that are on, done checks, live and needs-approval dots, progress, ratings, notification dots, and the single approve or main CTA button. It has a tint (#FEF1EC) and a line (#FBCDBD) for brand badges.
- **Error (#B42318):** Destructive actions and validation text only. Never used as decoration.

Dark mode inverts the neutrals (page #121211, surface #1A1A19, ink #F1F1EE, muted #A3A39E, border #2C2C29). Fork orange stays #FA4F20; the tint and line darken to #2A1A14 and #5A2A1A. Error lightens to #F28B7E.

**Contrast.** All ink and muted text pairs pass WCAG AA. White text on #FA4F20 is about 3.4:1, which passes AA only for large text. That is why orange buttons are limited to one per screen with short labels, and **orange is never used for text** on light surfaces.

## Typography

Geist for everything, with Geist Mono for URLs, code and data labels. Two weights do most of the work: 400 for reading and 600 for titles. 500 is for labels and buttons.

- **Display (36/40, 600, -0.03em):** Hero statements on marketing-like pages and empty dashboards. One per page.
- **Headline large (24/32, 600, -0.02em):** Page titles such as "Sites" or "Good morning, Uli".
- **Headline medium (20/28, 600):** Section titles and panel titles such as "Site tasks".
- **Title (16/20, 600):** Card titles.
- **Body (14/20, 400):** Default reading text.
- **Label (14/20, 500):** Buttons, form labels and row titles.
- **Body small (13/18):** Row metadata under a title.
- **Caption (12/16):** Timestamps and helper text.
- **Mono (13/16):** URLs like `sunrise.fork.site`, token names and code.

Use sentence case everywhere. Don't use all caps, and don't use ampersands in UI copy.

## Layout

The layout is built on a **4px grid**, mostly using 8, 12, 16, 24 and 40.

- **Page:** Content sits in a centered column (max 768px for feeds, 1152px for grids) with 24px side padding. On mobile the gutter is 16px.
- **Cards:** 24px padding and 20px between header, content and footer. Grids of cards use a 16px gap.
- **Rows:** List rows inside cards have 12px vertical padding and are separated by `border-subtle` hairlines. Use rows, not nested cards.
- **App shell:** A 64px icon rail on the left (Muse-style, with soft round active states). Main content scrolls in the middle. An optional 400px agent side panel sits on the right.
- **Controls:** Every interactive control is **40px tall**, including buttons, inputs, selects and segmented tabs.

## Elevation & Depth

Depth comes from **tonal layers and hairlines, not shadows**. The page is warm gray, cards are near-white with a 1px `border`, and nested elements use `surface-subtle`.

Shadows are reserved for things that **float**: dropdown menus, popovers, select lists, toasts, dialogs and the sticky composer. They all use one soft shadow, `shadow-float`: `0 12px 32px rgb(20 20 20 / 0.10), 0 2px 6px rgb(20 20 20 / 0.06)`. Cards never have shadows. Modal overlays dim the page with 30% black and no blur.

## Shapes

Softly rounded, with a consistent ladder from small to large:

- **6px:** badges and chips
- **8px:** menu items, tooltips, segmented-tab thumbs
- **10px:** buttons, inputs, selects, the segmented-tab track (the base `--radius`)
- **12px:** menus, popovers, icon tiles
- **16px:** cards, dialogs, the composer
- **Full:** switches, avatars, status dots

Don't mix sharp and rounded corners in one view, and don't round single-sided borders.

## Components

Every component is a shadcn/ui component restyled through tokens. Import from `@/components/ui/*` and `@/components/fork/*`. Never hand-roll a button, card or badge.

- **Buttons:** There is **one size, 40px tall** with a 10px radius, 16px side padding and 14px/500 text. Icon-only buttons are 40×40. The variants are:
  - `default`: ink. The everyday strong action, such as Continue, Apply, Open site or Invite.
  - `outline`: the default secondary action, such as Cancel, Review or Site dashboard.
  - `ghost`: low-emphasis actions such as Skip, Undo or Discuss.
  - `brand`: orange, for the single approve or main CTA. **Use at most one per screen.**
  - `destructive`: outlined, with red text.
  - `link`: inline text actions.

  `sm` and `lg` deliberately resolve to 40px. `icon-sm` (32px) is only for close (×) and overflow (⋯) affordances inside cards and menus.
- **Cards:** 16px radius, 1px border, surface fill, 24px padding, no shadow. Use `CardHeader` (title, description and an optional `CardAction` on the right), `CardContent` and `CardFooter`. **Footer actions sit bottom-right**, with the secondary action on the left and the primary on the right.
- **Inputs:** 40px tall, 10px radius, surface fill and a 1px border. Focus turns the border ink and adds a 3px soft ring. Invalid fields get a red border, with red helper text below.
- **Selection controls:** Checkbox and radio are drawn in ink. The **switch is 40×22: orange when on, warm gray when off**, with a white thumb.
- **Badges:** 24px tall with a 6px radius. Gray by default. The `brand` variant (tint fill and line border) is only for Live, Done, Active and Needs approval. Status color comes from a 6px dot, never from colored text.
- **Tabs:** There are three styles:
  - **Segmented** (default): a gray track with the active item raised on the surface. Use it to switch views.
  - **Icon group:** the same component with icon-only triggers. Use it to switch panels, such as Tasks, Analytics and Chat in the agent panel.
  - **Line:** an ink underline. Use it for sections inside a page.
- **Menus:** 12px radius, `shadow-float` and 6px inner padding. Items are 8px-radius rows with leading Lucide icons. The destructive item goes last, after a separator.
- **Tooltips:** An ink background with page-colored 12px text.
- **Toasts:** Floating surface with a title, one line of description and an optional Undo.
- **Progress:** An 8px-tall track. The fill is ink for usage and orange for work in progress.
- **Skeletons:** Warm `skeleton` bars with a 6px radius.

## Agent patterns

These are the Fork-specific compositions in `components/fork`:

- **StatusBadge:** The agent status vocabulary is `running`, `scheduled`, `paused` (gray), `needs-approval`, `live`, `active`, `done` (brand) and `failed` (red text).
- **TaskList / TaskRow:** A suggestion list. Each row has a marker, a title, one line of metadata and **one** trailing action:
  - ink dot: ready
  - orange dot: needs approval
  - orange check: done
- **AutomationRow:** Something Fork does on a schedule, shown as a title, a schedule line and a switch.
- **Feed / FeedItem:** A flat list separated by hairlines, inspired by Muse. Each item has a quiet icon tile, a title, a timestamp, a ⋯ menu, a short body and optional actions.
- **ApprovalCard:** Something the agent prepared that needs a yes. This is the canonical home of the `brand` button.
- **StatCard:** A metric card with an ink sparkline that ends in an orange dot, plus a trend badge.
- **SiteCard:** A site tile with a preview, name, URL, a Live badge, a ⋯ menu, and "Site dashboard" and "Open site" at bottom-right.
- **AgentPanel:** The 400px side panel. It has an icon tab group (Tasks, Analytics, Chat), an outline Upgrade button and the Composer.
- **Composer:** The chat input. It's a 16px-radius surface with a circular ink send button.
- **AppShell / IconRail / PageHeader:** Page scaffolding.

Voice: the agent speaks in first person in the feed ("I can add a catering page"). The UI chrome never says "I". Copy is short, concrete and names the result ("Homepage loads 1.2s faster").

## Do's and Don'ts

- Do let grays and ink carry the page. Orange marks only on, approved, live or waiting-on-you states.
- Do use at most one `brand` button per screen.
- Do keep every button 40px tall with a 10px radius. Never stretch buttons to fill a row unless it's a full-width mobile CTA.
- Do put card actions bottom-right in `CardFooter`.
- Do use `StatusBadge` for agent state instead of custom colors.
- Do use rows separated by hairlines inside cards. Don't nest cards.
- Do maintain WCAG AA (4.5:1 for normal text).
- Don't put orange text on light backgrounds, or use orange for decoration.
- Don't add new accent colors or new shades of orange. There is no secondary accent.
- Don't add shadows to cards. Shadows are only for floating layers.
- Don't hard-code hex values in components. Use the tokens (`bg-card`, `text-muted-foreground`, `bg-brand`, …).
- Don't use more than three type sizes in a single card.
