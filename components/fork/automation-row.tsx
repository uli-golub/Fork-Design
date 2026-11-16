"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Switch } from "@/components/ui/switch"

/** A recurring thing Fork does for the user, with an on/off switch. */
function AutomationRow({
  title,
  schedule,
  icon,
  defaultChecked,
  checked,
  onCheckedChange,
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "title"> & {
  title: React.ReactNode
  schedule?: React.ReactNode
  icon?: React.ReactNode
  defaultChecked?: boolean
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}) {
  const id = React.useId()
  return (
    <div
      data-slot="automation-row"
      className={cn(
        "flex items-center gap-3 border-b border-border-subtle py-3 first:pt-0 last:border-b-0 last:pb-0",
        className
      )}
      {...props}
    >
      {icon && (
        <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border-subtle bg-surface-subtle [&_svg]:size-4">
          {icon}
        </span>
      )}
      <label htmlFor={id} className="min-w-0 flex-1 cursor-pointer">
        <div className="truncate font-medium">{title}</div>
        {schedule && (
          <div className="truncate text-[13px] text-muted-foreground">{schedule}</div>
        )}
      </label>
      <Switch
        id={id}
        defaultChecked={defaultChecked}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
    </div>
  )
}

export { AutomationRow }
