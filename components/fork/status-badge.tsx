import * as React from "react"
import { Check } from "lucide-react"

import { Badge, BadgeDot } from "@/components/ui/badge"

/**
 * Agent status vocabulary. Grays for everything Fork handles on its own,
 * the orange tint only for things that are live, done, or waiting on the user.
 */
export type AgentStatus =
  | "running"
  | "scheduled"
  | "paused"
  | "needs-approval"
  | "live"
  | "done"
  | "active"
  | "failed"

const config: Record<
  AgentStatus,
  {
    label: string
    variant: "default" | "brand" | "destructive"
    tone?: "brand" | "ink" | "muted" | "destructive"
    check?: boolean
  }
> = {
  running: { label: "Running", variant: "default", tone: "ink" },
  scheduled: { label: "Scheduled", variant: "default", tone: "muted" },
  paused: { label: "Paused", variant: "default", tone: "muted" },
  "needs-approval": { label: "Needs approval", variant: "brand", tone: "brand" },
  live: { label: "Live", variant: "brand", tone: "brand" },
  active: { label: "Active", variant: "brand", tone: "brand" },
  done: { label: "Done", variant: "brand", check: true },
  failed: { label: "Failed", variant: "destructive", tone: "destructive" },
}

function StatusBadge({
  status,
  children,
  ...props
}: Omit<React.ComponentProps<typeof Badge>, "variant"> & {
  status: AgentStatus
}) {
  const c = config[status]
  return (
    <Badge variant={c.variant} {...props}>
      {c.check ? <Check /> : <BadgeDot tone={c.tone} />}
      {children ?? c.label}
    </Badge>
  )
}

export { StatusBadge }
