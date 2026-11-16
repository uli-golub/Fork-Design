"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bot,
  Globe,
  Inbox,
  Plus,
  Settings,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ForkMark } from "@/components/fork/logo"

/**
 * IconRail — Muse-inspired compact navigation. Active item gets a soft
 * round fill. The only orange is the notification dot.
 */
type RailItem = { href: string; label: string; icon: LucideIcon; badge?: boolean }

const defaultItems: RailItem[] = [
  { href: "/examples/feed", label: "Feed", icon: Inbox, badge: true },
  { href: "/examples/sites", label: "Sites", icon: Globe },
  { href: "/examples/automations", label: "Automations", icon: Bot },
  { href: "/examples/settings", label: "Site settings", icon: Settings },
]

function IconRail({ items = defaultItems }: { items?: RailItem[] }) {
  const pathname = usePathname()
  return (
    <nav
      aria-label="Main"
      className="flex h-full w-16 shrink-0 flex-col items-center gap-1 border-r border-border bg-sidebar py-3"
    >
      <Link
        href="/"
        className="mb-3 grid size-10 place-items-center rounded-xl text-[#342832] dark:text-foreground"
        aria-label="Fork home"
      >
        <ForkMark className="h-6" />
      </Link>
      <RailButton label="New site" href="/examples/sites" icon={Plus} brand />
      <div className="my-2 h-px w-6 bg-border" />
      {items.map((it) => (
        <RailButton key={it.href} {...it} active={pathname === it.href} />
      ))}
      <div className="flex-1" />
      <Avatar className="size-9">
        <AvatarFallback className="bg-primary text-xs font-semibold text-primary-foreground">
          UL
        </AvatarFallback>
      </Avatar>
    </nav>
  )
}

function RailButton({
  href,
  label,
  icon: Icon,
  active,
  badge,
  brand,
}: RailItem & { active?: boolean; brand?: boolean }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          aria-label={label}
          aria-current={active ? "page" : undefined}
          className={cn(
            "relative grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
            active && "bg-accent text-foreground",
            brand && "text-foreground"
          )}
        >
          {brand ? (
            <span className="grid size-6 place-items-center rounded-full bg-primary text-primary-foreground">
              <Icon className="size-3.5" strokeWidth={2.5} />
            </span>
          ) : (
            <Icon className="size-[18px]" />
          )}
          {badge && (
            <span className="absolute top-2 right-2 size-2 rounded-full bg-brand ring-2 ring-sidebar" />
          )}
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  )
}

function AppShell({
  children,
  aside,
}: {
  children: React.ReactNode
  aside?: React.ReactNode
}) {
  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      <IconRail />
      <main className="min-w-0 flex-1 overflow-y-auto">{children}</main>
      {aside}
    </div>
  )
}

function PageHeader({
  title,
  description,
  actions,
  className,
}: {
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}) {
  return (
    <header className={cn("flex flex-wrap items-end justify-between gap-4", className)}>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl leading-8 font-semibold tracking-[-0.02em]">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  )
}

export { AppShell, IconRail, PageHeader }
