# Fork Design

The design system for **Fork**, the self-driving website platform. It's neutral grays, ink text, and one orange accent (`#FA4F20`) used only where something is on, approved, live, or waiting on you.

**Buttons are black by default.** A plain `<Button>` is black; other variants are used only for a reason (outline for the secondary next to it, brand to approve).

It's built on **shadcn/ui** (Radix primitives, Vega style), **Tailwind CSS v4**, **Next.js** and **Geist**.

| File | What it is |
| --- | --- |
| [`DESIGN.md`](DESIGN.md) | The source of truth, in the [DESIGN.md](https://github.com/google-labs-code/design.md) format: YAML tokens and design rules |
| [`AGENTS.md`](AGENTS.md) | Hard rules for AI coding agents (Codex, Cursor, Claude Code, Lovable, v0) |
| [`app/globals.css`](app/globals.css) | All tokens for light and dark, mapped to Tailwind |
| [`components/ui`](components/ui) | shadcn components restyled for Fork |
| [`components/fork`](components/fork) | Fork agent patterns: StatusBadge, TaskList, AutomationRow, Feed, ApprovalCard, StatCard, SiteCard, AgentPanel, Composer, AppShell |
| [`app/page.tsx`](app/page.tsx) | The living design library guide |
| [`app/examples`](app/examples) | Reference screens: Feed, Sites, Automations, Site settings with the agent panel |
| [`registry.json`](registry.json) | shadcn registry, built to `public/r/` |

## Run it

```bash
pnpm install
```

```bash
pnpm dev
```

Then open http://localhost:3000 for the guide and `/examples/feed` for the screens. Press `d` to toggle dark mode.

## Use it with a vibe-coding tool

**In this repo (Codex, Cursor, Claude Code):** open the repo and ask for a screen. The tools read `AGENTS.md`, `CLAUDE.md` and `.cursor/rules/`, and those point them to `DESIGN.md` and the existing components. A good prompt:

> Build a page at `app/examples/<name>` using only `@/components/ui` and `@/components/fork`. Follow AGENTS.md.

**In another project (Lovable, v0, a new Next app):** install everything with one command. The live guide is at https://fork-design.vercel.app.

```bash
npx shadcn@latest add https://fork-design.vercel.app/r/fork.json
```

Or install just the tokens:

```bash
npx shadcn@latest add https://fork-design.vercel.app/r/fork-theme.json
```

Then copy `DESIGN.md` and `AGENTS.md` into that project so its AI follows the same rules. Tools that support DESIGN.md (like Google Stitch) can import the file directly.

## Checks

```bash
pnpm lint && pnpm typecheck && pnpm build
```

```bash
pnpm check:contrast
```

```bash
pnpm registry:build
```

```bash
pnpm dlx @google/design.md lint DESIGN.md
```

## Changing a token

1. Edit the value in `app/globals.css` (both `:root` and `.dark`).
2. Mirror it in `DESIGN.md` front matter and `lib/tokens.ts` (which drives the guide's swatches).
3. Update the matching variable in Figma: the **Fork / Tokens** collection in the Fork Design file.
4. Run `pnpm check:contrast` and `pnpm registry:build`.
