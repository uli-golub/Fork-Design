"use client"

import * as React from "react"
import { ArrowUp, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/** Chat input for talking to the Fork agent. Ink send button, never orange. */
function Composer({
  placeholder = "Ask Fork to make changes",
  onSubmit,
  className,
}: {
  placeholder?: string
  onSubmit?: (value: string) => void
  className?: string
}) {
  const [value, setValue] = React.useState("")
  return (
    <form
      data-slot="composer"
      onSubmit={(e) => {
        e.preventDefault()
        if (!value.trim()) return
        onSubmit?.(value.trim())
        setValue("")
      }}
      className={cn(
        "flex flex-col gap-2 rounded-2xl border border-border bg-card p-2 pl-3 transition-colors focus-within:border-ring",
        className
      )}
    >
      <textarea
        aria-label="Message Fork"
        rows={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            e.currentTarget.form?.requestSubmit()
          }
        }}
        placeholder={placeholder}
        className="field-sizing-content max-h-40 min-h-9 resize-none bg-transparent pt-1.5 text-sm outline-none placeholder:text-muted-foreground"
      />
      <div className="flex items-center justify-between">
        <Button type="button" variant="ghost" size="icon-sm" aria-label="Add attachment">
          <Plus />
        </Button>
        <Button
          type="submit"
          size="icon-sm"
          className="rounded-full"
          aria-label="Send"
          disabled={!value.trim()}
        >
          <ArrowUp />
        </Button>
      </div>
    </form>
  )
}

export { Composer }
