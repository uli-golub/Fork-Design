import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * TaskList / TaskRow — the agent's suggestions for a site.
 * Each row: a state marker, title + one-line meta, and ONE trailing action.
 * Markers: "pending" ink dot, "approval" orange dot, "done" orange check.
 */
type TaskState = "pending" | "approval" | "done"

function TaskList({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="task-list"
      className={cn("flex flex-col divide-y divide-border-subtle", className)}
      {...props}
    />
  )
}

function TaskMarker({ state }: { state: TaskState }) {
  if (state === "done") {
    return (
      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
        <Check className="size-3" strokeWidth={3} aria-hidden="true" />
      </span>
    )
  }
  return (
    <span className="grid size-5 shrink-0 place-items-center" aria-hidden="true">
      <span
        className={cn(
          "size-1.5 rounded-full",
          state === "approval" ? "bg-brand" : "bg-foreground"
        )}
      />
    </span>
  )
}

function TaskRow({
  state = "pending",
  title,
  meta,
  action,
  className,
  ...props
}: Omit<React.ComponentProps<"li">, "title"> & {
  state?: TaskState
  title: React.ReactNode
  meta?: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <li
      data-slot="task-row"
      data-state={state}
      className={cn("flex items-center gap-3 py-3 first:pt-0 last:pb-0", className)}
      {...props}
    >
      <TaskMarker state={state} />
      <div className="min-w-0 flex-1">
        <div className="truncate font-medium">{title}</div>
        {meta && <div className="truncate text-[13px] text-muted-foreground">{meta}</div>}
      </div>
      {action && <div className="flex shrink-0 items-center gap-2">{action}</div>}
    </li>
  )
}

export { TaskList, TaskRow, type TaskState }
