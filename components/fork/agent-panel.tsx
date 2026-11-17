"use client"

import * as React from "react"
import { BarChart3, ListChecks, MessageCircle, Sparkles, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Composer } from "@/components/fork/composer"

/**
 * AgentPanel — the Fork side panel (Tasks · Analytics · Chat) with the
 * icon tab group from the Figma side-chat explorations and a composer.
 */
function AgentPanel({
  tasks,
  analytics,
  chat,
  onClose,
}: {
  tasks: React.ReactNode
  analytics?: React.ReactNode
  chat?: React.ReactNode
  onClose?: () => void
}) {
  return (
    <aside className="flex h-full w-[400px] shrink-0 flex-col border-l border-border bg-card">
      <Tabs defaultValue="tasks" className="flex min-h-0 flex-1 flex-col gap-0">
        <div className="flex h-16 items-center justify-between gap-2 border-b border-border px-4">
          <TabsList aria-label="Panel views">
            <PanelTab value="tasks" label="Tasks" icon={<ListChecks />} />
            <PanelTab value="analytics" label="Analytics" icon={<BarChart3 />} />
            <PanelTab value="chat" label="Chat" icon={<MessageCircle />} />
          </TabsList>
          <div className="flex items-center gap-1">
            <Button>
              <Sparkles />
              Upgrade
            </Button>
            {onClose && (
              <Button variant="ghost" size="icon" aria-label="Close panel" onClick={onClose}>
                <X />
              </Button>
            )}
          </div>
        </div>
        <TabsContent value="tasks" className="min-h-0 flex-1 overflow-y-auto p-5">
          {tasks}
        </TabsContent>
        <TabsContent value="analytics" className="min-h-0 flex-1 overflow-y-auto p-5">
          {analytics}
        </TabsContent>
        <TabsContent value="chat" className="min-h-0 flex-1 overflow-y-auto p-5">
          {chat}
        </TabsContent>
      </Tabs>
      <div className="border-t border-border p-4">
        <Composer />
      </div>
    </aside>
  )
}

function PanelTab({
  value,
  label,
  icon,
}: {
  value: string
  label: string
  icon: React.ReactNode
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <TabsTrigger value={value} aria-label={label} className="w-9 flex-none px-0">
          {icon}
        </TabsTrigger>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  )
}

export { AgentPanel }
