<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Fork design system — rules for AI coding agents

You are working in the Fork design system (Next.js, Tailwind v4, shadcn/ui on Radix, Vega style, Geist).
Any screen you build here, or in a project that installs this system, **must look like Fork**.

**Read `DESIGN.md` first.** It is the source of truth: tokens in the YAML front matter, and rules in the prose.

## Hard rules

1. **Only use existing components.** Use `@/components/ui/*` (restyled shadcn) and `@/components/fork/*` (agent patterns). Never hand-roll a button, card, badge, input, tab or menu.
2. **Only use tokens.** Use Tailwind classes such as `bg-background`, `bg-card`, `bg-muted`, `bg-accent`, `text-foreground`, `text-muted-foreground`, `border-border`, `border-border-subtle`, `bg-brand`, `bg-brand-tint`, `border-brand-line` and `bg-skeleton`. **No hex values, and no Tailwind palette colors** (`gray-*`, `blue-*`, `green-*`, …) in components.
3. **Orange (`brand`, #FA4F20) is rare.** Use it only for things that are on, approved, live or waiting on the user:
   - switch on (automatic)
   - `StatusBadge` live, done, active and needs-approval
   - progress for work in progress
   - ratings
   - notification dots
   - **one** `variant="brand"` button per screen, for approve or the main CTA

   Never use orange text, and never use it as decoration.
4. **Buttons are 40px tall, always.** Use `<Button>` with variants `default` (ink), `outline`, `ghost`, `brand`, `destructive` or `link`. Don't pass custom heights, paddings or radii. Use `size="icon"` for icon-only buttons. `size="icon-sm"` is only for ⋯ and × inside cards and menus.
5. **Cards:** `Card` > `CardHeader` (`CardTitle`, `CardDescription`, optional `CardAction`) > `CardContent` > `CardFooter`. Footer actions sit **bottom-right**, secondary first, then primary. Cards have no shadow. Don't nest cards; use rows with `border-border-subtle` dividers.
6. **Agent state** always uses `<StatusBadge status="running | scheduled | paused | needs-approval | live | active | done | failed" />`.
7. **Agent suggestions** use `TaskList`/`TaskRow`, with **one** trailing action per row. Automations use `AutomationRow`, the feed uses `Feed`/`FeedItem`, and anything needing a yes uses `ApprovalCard`.
8. **Shadows** are only for floating layers (menus, popovers, toasts, dialogs, the sticky composer), via `shadow-float`.
9. **Radius ladder:** badge `rounded-sm` (6px), control `rounded-lg` (10px), menu `rounded-xl` (12px), card `rounded-2xl` (16px).
10. **Both themes.** Everything must work in light (default) and `.dark`. Check both.
11. **Copy:** sentence case, short and concrete. The agent says "I" in the feed. UI chrome never says "I". Don't use "please", "successfully" or exclamation marks.

## Where things are

- `app/globals.css`: all tokens (light and dark) and the Tailwind theme mapping.
- `components/ui/`: shadcn components restyled for Fork. Edit tokens before you edit these.
- `components/fork/`: Fork patterns (`index.ts` exports all of them).
- `app/page.tsx`: the living design library guide.
- `app/examples/*`: reference screens (feed, sites, automations, site settings with the agent panel).
- `registry.json`: the shadcn registry, built to `public/r/` with `pnpm registry:build`.

## Before you finish

Run `pnpm lint && pnpm typecheck && pnpm build` and `pnpm check:contrast`. Then open the page in both themes.
