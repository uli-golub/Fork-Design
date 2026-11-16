import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

/**
 * Fork badge: 6px radius, 12px medium text.
 *   default  gray chip — tags, counts, neutral status (SEO, Paused, Running)
 *   brand    orange tint — Live, Done, Needs approval, Active
 *   solid    ink — plan labels (Pro)
 *   outline  hairline only
 *   destructive  red text — Failed
 * Pair status badges with a <BadgeDot /> for color, never color the text orange.
 */
const badgeVariants = cva(
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-sm border px-2 text-xs font-medium whitespace-nowrap transition-colors focus-visible:ring-3 focus-visible:ring-ring/30 [&>svg]:pointer-events-none [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default: "border-border-subtle bg-surface-subtle text-muted-foreground",
        secondary: "border-border-subtle bg-surface-subtle text-foreground",
        brand: "border-brand-line bg-brand-tint text-foreground [&>svg]:text-brand",
        solid: "border-primary bg-primary text-primary-foreground",
        outline: "border-border text-foreground",
        destructive: "border-border-subtle bg-surface-subtle text-destructive",
        ghost: "border-transparent text-muted-foreground hover:bg-accent",
        link: "border-transparent text-foreground underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

const dotVariants = cva("inline-block size-1.5 shrink-0 rounded-full", {
  variants: {
    tone: {
      brand: "bg-brand",
      ink: "bg-foreground",
      muted: "bg-muted-foreground",
      destructive: "bg-destructive",
    },
  },
  defaultVariants: { tone: "ink" },
})

function BadgeDot({
  className,
  tone,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof dotVariants>) {
  return (
    <span
      data-slot="badge-dot"
      aria-hidden="true"
      className={cn(dotVariants({ tone }), className)}
      {...props}
    />
  )
}

export { Badge, BadgeDot, badgeVariants }
