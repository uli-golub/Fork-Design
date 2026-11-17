import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

/**
 * Fork button.
 * One size everywhere: 40px tall, 10px radius, 16px side padding, 14px medium.
 * Every button is BLACK (variant="default") unless it has a reason not to be.
 * In dark mode the same variant inverts to light ink so it stays visible.
 * Variants:
 *   default     black — the default for every button, including lone actions
 *   outline     only the secondary action placed next to a black button (Cancel)
 *   ghost       low-emphasis actions (Skip, Undo)
 *   brand       #FA4F20 — approve or the single main CTA. Max one per screen.
 *   destructive outlined with red text
 *   link        inline text action
 * `sm` and `lg` intentionally resolve to the same 40px so buttons never drift.
 * `xs` / `icon-sm` exist only for controls nested inside inputs and close (×) affordances.
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-45 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/88 active:bg-primary/80",
        outline:
          "border-border bg-card text-foreground hover:bg-accent aria-expanded:bg-accent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-accent aria-expanded:bg-accent",
        ghost:
          "text-foreground hover:bg-accent aria-expanded:bg-accent",
        brand:
          "bg-brand text-brand-foreground hover:bg-brand/90 active:bg-brand/85",
        destructive:
          "border-border bg-card text-destructive hover:bg-destructive/8 focus-visible:ring-destructive/25",
        link: "h-auto px-0 text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-10 px-4",
        lg: "h-10 px-4",
        xs: "h-7 gap-1 rounded-md px-2 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        icon: "size-10",
        "icon-lg": "size-10",
        "icon-sm": "size-8 rounded-md",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
