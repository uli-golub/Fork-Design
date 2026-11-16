// WCAG contrast check for Fork token pairs, light and dark.
// Reads app/globals.css so it always checks the real values.
import { readFileSync } from "node:fs"

const css = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8")
const block = (sel) => {
  const m = css.match(new RegExp(sel.replace(".", "\\.") + "\\s*\\{([\\s\\S]*?)\\n\\}"))
  return Object.fromEntries([...m[1].matchAll(/--([a-z0-9-]+):\s*(#[0-9a-f]{6})/gi)].map((x) => [x[1], x[2]]))
}
const lum = (hex) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
}
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p)
  return (x + 0.05) / (y + 0.05)
}

// [foreground, background, minimum, note]
const pairs = [
  ["foreground", "background", 4.5],
  ["foreground", "card", 4.5],
  ["muted-foreground", "background", 4.5],
  ["muted-foreground", "card", 4.5],
  ["muted-foreground", "muted", 4.5],
  ["primary-foreground", "primary", 4.5],
  ["foreground", "accent", 4.5],
  ["foreground", "brand-tint", 4.5],
  ["destructive", "card", 4.5],
  ["brand", "card", 3, "non-text: switch, dots, progress"],
  ["brand-foreground", "brand", 3, "large-text only — keep brand buttons rare"],
]

let failed = 0
for (const [mode, sel] of [["light", ":root"], ["dark", ".dark"]]) {
  const t = block(sel)
  console.log(`\n${mode}`)
  for (const [fg, bg, min, note] of pairs) {
    const r = ratio(t[fg], t[bg])
    const ok = r >= min
    if (!ok) failed++
    console.log(`  ${ok ? "pass" : "FAIL"}  ${r.toFixed(2).padStart(5)}:1  ${fg} on ${bg} (min ${min})${note ? "  — " + note : ""}`)
  }
}
process.exit(failed ? 1 : 0)
