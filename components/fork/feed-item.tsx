import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * FeedItem — one entry in the agent feed (Muse-inspired):
 * a quiet icon tile, a title with a timestamp, one or two lines of body,
 * optional media and actions. Flat rows, separated by hairlines — not cards.
 */
function Feed({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="feed"
      className={cn("flex flex-col divide-y divide-border-subtle", className)}
      {...props}
    />
  )
}

function FeedItem({
  icon,
  title,
  time,
  menu,
  children,
  media,
  actions,
  className,
  ...props
}: Omit<React.ComponentProps<"article">, "title"> & {
  icon?: React.ReactNode
  title: React.ReactNode
  time?: React.ReactNode
  menu?: React.ReactNode
  media?: React.ReactNode
  actions?: React.ReactNode
}) {
  return (
    <article
      data-slot="feed-item"
      className={cn("flex gap-3 py-4 first:pt-0 last:pb-0", className)}
      {...props}
    >
      {icon && (
        <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border-subtle bg-surface-subtle text-foreground [&_svg]:size-4">
          {icon}
        </span>
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold">{title}</h3>
          <div className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
            {time}
            {menu}
          </div>
        </div>
        {children && <div className="text-muted-foreground">{children}</div>}
        {media && <div className="mt-2 overflow-hidden rounded-xl border border-border-subtle">{media}</div>}
        {actions && <div className="mt-3 flex items-center gap-2">{actions}</div>}
      </div>
    </article>
  )
}

export { Feed, FeedItem }
