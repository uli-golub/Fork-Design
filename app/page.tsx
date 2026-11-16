"use client"

import * as React from "react"
import Link from "next/link"
import {
  Check,
  Clock,
  Copy,
  ExternalLink,
  Eye,
  Link2,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  Sparkles,
  Star,
  Trash2,
  X,
  BarChart3,
  ListChecks,
} from "lucide-react"
import { toast } from "sonner"

import { colorTokens, radii, spacing, typeScale } from "@/lib/tokens"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge, BadgeDot } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import {
  ApprovalCard,
  AutomationRow,
  Composer,
  Feed,
  FeedItem,
  ForkLogo,
  SiteCard,
  StatCard,
  StatusBadge,
  TaskList,
  TaskRow,
  ThemeToggle,
} from "@/components/fork"

const sections = [
  ["colors", "Colors"],
  ["typography", "Typography"],
  ["foundations", "Spacing and radius"],
  ["buttons", "Buttons"],
  ["inputs", "Inputs"],
  ["controls", "Selection controls"],
  ["badges", "Badges and status"],
  ["tabs", "Tabs"],
  ["overlays", "Menus and overlays"],
  ["feedback", "Feedback"],
  ["cards", "Cards"],
  ["agent", "Agent patterns"],
  ["rules", "Rules"],
] as const

export default function GuidePage() {
  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <ForkLogo className="h-6 text-[#342832] dark:text-foreground" />
            <span className="hidden text-sm text-muted-foreground sm:inline">Design library</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/examples/feed">Examples</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[180px_1fr]">
        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="sticky top-24 flex flex-col gap-0.5 text-sm">
            {sections.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="block rounded-md px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex min-w-0 flex-col gap-16">
          <section className="flex flex-col gap-3">
            <h1 className="text-4xl leading-tight font-semibold tracking-[-0.03em] text-balance">
              Calm by default.
              <br />
              Orange when it matters.
            </h1>
            <p className="max-w-xl text-muted-foreground">
              Soft warm grays and ink do almost all the work. Fork orange{" "}
              <code className="font-mono text-[13px] text-foreground">#FA4F20</code> appears only
              where something is on, approved, live, or waiting on you. Built on shadcn/ui (Radix,
              Vega spacing) with Geist.
            </p>
          </section>

          <Section id="colors" title="Colors" lead="Neutrals carry the interface. One accent, with a tint and a line for badges.">
            <SwatchGrid tokens={colorTokens.neutrals} />
            <SwatchGrid tokens={colorTokens.accent} />
          </Section>

          <Section id="typography" title="Typography" lead="Geist for everything. Geist Mono for code, URLs and data labels.">
            <Panel className="flex flex-col divide-y divide-border-subtle p-0">
              {typeScale.map((t) => (
                <div key={t.name} className="flex flex-wrap items-baseline justify-between gap-3 px-5 py-4">
                  <span
                    style={{
                      fontSize: t.size,
                      lineHeight: `${t.line}px`,
                      fontWeight: t.weight,
                      letterSpacing: t.tracking,
                    }}
                    className={t.name === "caption" ? "text-muted-foreground" : undefined}
                  >
                    {t.sample}
                  </span>
                  <Meta>
                    {t.name} · {t.size}/{t.line} · {t.weight}
                  </Meta>
                </div>
              ))}
              <div className="flex flex-wrap items-baseline justify-between gap-3 px-5 py-4">
                <span className="font-mono text-[13px]">sunrise.fork.site</span>
                <Meta>mono · 13/16 · 400</Meta>
              </div>
            </Panel>
          </Section>

          <Section id="foundations" title="Spacing and radius" lead="4px grid. Borders before shadows; shadows only on layers that float.">
            <div className="grid gap-4 md:grid-cols-2">
              <Panel className="flex flex-col gap-3">
                {spacing.map((s) => (
                  <div key={s.px} className="flex items-center gap-3">
                    <span className="h-3 rounded-[2px] bg-foreground" style={{ width: s.px }} />
                    <Meta>
                      {s.px} · {s.use}
                    </Meta>
                  </div>
                ))}
              </Panel>
              <Panel className="flex flex-wrap items-end gap-5">
                {radii.map((r) => (
                  <div key={r.name} className="flex flex-col items-center gap-2">
                    <div
                      className="h-10 w-16 border border-border bg-surface-subtle"
                      style={{ borderRadius: r.px }}
                    />
                    <Meta>
                      {r.px} · {r.use}
                    </Meta>
                  </div>
                ))}
                <div className="flex flex-col items-center gap-2">
                  <div className="h-10 w-16 rounded-xl border border-border bg-card shadow-float" />
                  <Meta>shadow-float</Meta>
                </div>
              </Panel>
            </div>
          </Section>

          <Section id="buttons" title="Buttons" lead="One size: 40px tall, 10px radius, 16px side padding, 14px medium. At most one brand button per screen.">
            <Panel className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-3">
                <Button>Continue</Button>
                <Button variant="outline">Cancel</Button>
                <Button variant="ghost">Skip</Button>
                <Button variant="brand">Approve</Button>
                <Button variant="destructive">Delete</Button>
                <Button variant="link">View docs</Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button>
                  <Plus />
                  New site
                </Button>
                <Button variant="outline">
                  <ExternalLink />
                  Open site
                </Button>
                <Button variant="outline" size="icon" aria-label="More">
                  <MoreHorizontal />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Close">
                  <X />
                </Button>
                <Button disabled>Disabled</Button>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                <Meta>default · ink</Meta>
                <Meta>outline · secondary</Meta>
                <Meta>ghost · low emphasis</Meta>
                <Meta>brand · approve or one main CTA</Meta>
                <Meta>destructive</Meta>
              </div>
            </Panel>
          </Section>

          <Section id="inputs" title="Inputs" lead="40px fields with a 10px radius. Focus uses ink. Errors use red text.">
            <div className="grid gap-4 md:grid-cols-2">
              <Panel className="flex flex-col gap-5">
                <Field label="Business name" id="biz">
                  <Input id="biz" placeholder="Sunrise Bakery" />
                </Field>
                <Field label="Website" id="site">
                  <div className="relative">
                    <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="site" className="pl-9" placeholder="sunrisebakery.com" />
                  </div>
                </Field>
                <Field label="What should Fork focus on?" id="focus">
                  <Textarea id="focus" placeholder="Get more catering orders from the website" />
                </Field>
              </Panel>
              <Panel className="flex flex-col gap-5">
                <Field label="Email" id="email" error="Enter a full email address">
                  <Input id="email" defaultValue="alex@" aria-invalid />
                </Field>
                <Field label="Schedule" id="sched">
                  <Select defaultValue="weekly">
                    <SelectTrigger id="sched" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Every day</SelectItem>
                      <SelectItem value="weekly">Every Monday</SelectItem>
                      <SelectItem value="monthly">First of the month</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Disabled" id="dis">
                  <Input id="dis" disabled placeholder="Not editable" />
                </Field>
              </Panel>
            </div>
          </Section>

          <Section id="controls" title="Selection controls" lead="Checkbox and radio in ink. The switch turns orange when on.">
            <Panel className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <label className="flex items-center gap-2.5">
                <Checkbox defaultChecked /> Checked
              </label>
              <label className="flex items-center gap-2.5">
                <Checkbox /> Unchecked
              </label>
              <RadioGroup defaultValue="a" className="flex w-auto gap-6">
                <label className="flex items-center gap-2.5">
                  <RadioGroupItem value="a" /> Selected
                </label>
                <label className="flex items-center gap-2.5">
                  <RadioGroupItem value="b" /> Option
                </label>
              </RadioGroup>
              <label className="flex items-center gap-2.5">
                <Switch defaultChecked /> On
              </label>
              <label className="flex items-center gap-2.5">
                <Switch /> Off
              </label>
            </Panel>
          </Section>

          <Section id="badges" title="Badges and status" lead="Gray by default. The orange tint is only for live, done, active and waiting on you.">
            <Panel className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <StatusBadge status="running" />
                <StatusBadge status="scheduled" />
                <StatusBadge status="paused" />
                <StatusBadge status="needs-approval" />
                <StatusBadge status="live" />
                <StatusBadge status="active" />
                <StatusBadge status="done" />
                <StatusBadge status="failed" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>SEO</Badge>
                <Badge>Layout</Badge>
                <Badge variant="secondary">3</Badge>
                <Badge variant="solid">Pro</Badge>
                <Badge variant="outline">Beta</Badge>
                <Badge variant="brand">
                  <BadgeDot tone="brand" />
                  Custom
                </Badge>
              </div>
            </Panel>
          </Section>

          <Section id="tabs" title="Tabs" lead="Segmented tabs for views, an icon group for panels, an underline for page sections.">
            <Panel className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-6">
                <Tabs defaultValue="settings">
                  <TabsList>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                    <TabsTrigger value="members">Members</TabsTrigger>
                    <TabsTrigger value="versions">Versions</TabsTrigger>
                    <TabsTrigger value="automations">Automations</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Tabs defaultValue="tasks">
                  <TabsList aria-label="Panel">
                    <TabsTrigger value="tasks" aria-label="Tasks" className="w-9 flex-none px-0">
                      <ListChecks />
                    </TabsTrigger>
                    <TabsTrigger value="analytics" aria-label="Analytics" className="w-9 flex-none px-0">
                      <BarChart3 />
                    </TabsTrigger>
                    <TabsTrigger value="chat" aria-label="Chat" className="w-9 flex-none px-0">
                      <MessageCircle />
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <Tabs defaultValue="overview">
                <TabsList variant="line">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="pt-3 text-muted-foreground">
                  Underline tabs for sections inside a page.
                </TabsContent>
                <TabsContent value="analytics" className="pt-3 text-muted-foreground">
                  Analytics content.
                </TabsContent>
                <TabsContent value="history" className="pt-3 text-muted-foreground">
                  History content.
                </TabsContent>
              </Tabs>
            </Panel>
          </Section>

          <Section id="overlays" title="Menus and overlays" lead="Floating layers get a soft shadow and a 12px radius. Dialogs use 16px. Try them.">
            <Panel className="flex flex-wrap items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <MoreHorizontal />
                    Open menu
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-52" align="start">
                  <DropdownMenuItem>
                    <Eye />
                    Preview change
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Clock />
                    Schedule
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Copy />
                    Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <Trash2 />
                    Dismiss
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Copy a landing page</DialogTitle>
                    <DialogDescription>Fork will rebuild it on your site in your style.</DialogDescription>
                  </DialogHeader>
                  <Field label="Landing page URL" id="lp">
                    <Input id="lp" placeholder="https://example.com" />
                  </Field>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button>Next</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover for tooltip</Button>
                </TooltipTrigger>
                <TooltipContent>Runs every Monday at 9am</TooltipContent>
              </Tooltip>

              <Button
                variant="outline"
                onClick={() =>
                  toast("Change applied", {
                    description: "Your homepage button now says Explore.",
                    action: { label: "Undo", onClick: () => {} },
                  })
                }
              >
                Show toast
              </Button>
            </Panel>
          </Section>

          <Section id="feedback" title="Feedback" lead="Progress in orange, loading with warm skeletons, empty states that invite action.">
            <div className="grid gap-4 md:grid-cols-2">
              <Panel className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-[13px]">
                    <span>Scanning pages</span>
                    <span className="text-muted-foreground">62%</span>
                  </div>
                  <Progress value={62} className="[&>[data-slot=progress-indicator]]:bg-brand" />
                </div>
                <div className="flex flex-col gap-2.5">
                  <Skeleton className="h-3.5 w-3/5" />
                  <Skeleton className="h-2.5 w-11/12" />
                  <Skeleton className="h-2.5 w-3/4" />
                </div>
              </Panel>
              <Panel className="flex flex-col items-center gap-3 border-dashed text-center">
                <span className="grid size-11 place-items-center rounded-xl border border-border-subtle bg-surface-subtle">
                  <Sparkles className="size-5" />
                </span>
                <div>
                  <div className="font-semibold">No suggestions yet</div>
                  <p className="mt-1 text-muted-foreground">Fork is scanning your site. New ideas show up here.</p>
                </div>
                <Button variant="outline">Run a scan now</Button>
              </Panel>
            </div>
          </Section>

          <Section id="cards" title="Cards" lead="16px radius, 24px padding, no shadow. Actions sit bottom-right in the footer.">
            <div className="grid gap-4 md:grid-cols-2">
              <StatCard
                title="Visitors"
                period="Last 30 days"
                value="9,354"
                change={10}
                points={[22, 30, 18, 28, 24, 34, 26, 31, 22, 33, 29, 40, 36, 48]}
              />
              <Card>
                <CardHeader>
                  <CardTitle>Create a site</CardTitle>
                  <CardDescription>Start from a URL or describe your business.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Field label="Business name" id="c-biz">
                    <Input id="c-biz" placeholder="Sunrise Bakery" />
                  </Field>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Continue</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Credits</CardTitle>
                  <CardDescription>Pro plan · renews Dec 1</CardDescription>
                  <CardAction>
                    <StatusBadge status="active" />
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-between">
                    <span>
                      <span className="text-[22px] font-semibold">4,200</span>{" "}
                      <span className="text-[13px] text-muted-foreground">of 5,000 left</span>
                    </span>
                    <span className="text-[13px] text-muted-foreground">84%</span>
                  </div>
                  <Progress value={84} />
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View usage</Button>
                  <Button>Upgrade</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Team members</CardTitle>
                  <CardDescription>Invite people to work on this site.</CardDescription>
                </CardHeader>
                <CardContent className="gap-0">
                  <Member initials="UL" name="Uli" sub="Owner" trailing={<Badge>Owner</Badge>} />
                  <Member
                    initials="AM"
                    name="Alex Moreno"
                    sub="alex@sunrisebakery.com"
                    trailing={<Badge>Editor</Badge>}
                  />
                </CardContent>
                <CardFooter className="gap-2">
                  <Input placeholder="name@business.com" aria-label="Email to invite" className="flex-1" />
                  <Button>Invite</Button>
                </CardFooter>
              </Card>
              <SiteCard name="Sunrise Bakery" url="sunrise.fork.site" edited="2h ago" live />
              <Card className="border-dashed">
                <CardContent className="flex flex-1 flex-col items-center justify-center gap-3 py-6 text-center">
                  <span className="grid size-11 place-items-center rounded-xl border border-border-subtle bg-surface-subtle">
                    <Plus className="size-5" />
                  </span>
                  <div>
                    <div className="font-semibold">Add another site</div>
                    <p className="mt-1 text-muted-foreground">Fork can run more than one website.</p>
                  </div>
                  <Button variant="outline">New site</Button>
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section id="agent" title="Agent patterns" lead="How Fork shows what it's doing: suggestions, automations, the feed, approvals and the side panel.">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Site tasks</CardTitle>
                  <CardDescription>Fork found 3 things to improve.</CardDescription>
                  <CardAction>
                    <Badge variant="secondary">3</Badge>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <TaskList>
                    <TaskRow
                      state="approval"
                      title="Name the product in the button"
                      meta="Needs your approval"
                      action={<Button variant="outline">Review</Button>}
                    />
                    <TaskRow
                      title="Update the search title"
                      meta="SEO · ready to apply"
                      action={<Button>Apply</Button>}
                    />
                    <TaskRow
                      state="done"
                      title="Compress homepage images"
                      meta="1.2s faster"
                      action={<StatusBadge status="done" />}
                    />
                  </TaskList>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Automations</CardTitle>
                  <CardDescription>Things Fork does for you on a schedule.</CardDescription>
                </CardHeader>
                <CardContent className="gap-0">
                  <AutomationRow title="Weekly broken link check" schedule="Every Monday" defaultChecked />
                  <AutomationRow title="Post new reviews" schedule="When a 5-star review arrives" defaultChecked />
                  <AutomationRow title="Refresh holiday banner" schedule="Paused" />
                </CardContent>
              </Card>
              <ApprovalCard
                title="Review from Maria"
                description="Google · 2 days ago"
                aside={
                  <span className="flex gap-0.5 text-brand" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                    ))}
                  </span>
                }
                approveLabel="Add to homepage"
                onApprove={() => toast("Review added to your homepage")}
              >
                <p>&ldquo;Best sourdough in town. The new online ordering made it so easy.&rdquo;</p>
              </ApprovalCard>
              <Card>
                <CardHeader>
                  <CardTitle>Feed</CardTitle>
                  <CardDescription>What Fork noticed and did.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Feed>
                    <FeedItem icon={<Sparkles />} title="I can add your Google reviews" time="12m">
                      Your 4.9 rating isn&rsquo;t on the site yet.
                    </FeedItem>
                    <FeedItem icon={<Link2 />} title="Fixed 2 broken links" time="1d">
                      On /menu and /catering.
                    </FeedItem>
                  </Feed>
                </CardContent>
              </Card>
              <div className="md:col-span-2">
                <Panel className="flex flex-col gap-3">
                  <Meta>Composer</Meta>
                  <Composer />
                </Panel>
              </div>
            </div>
          </Section>

          <Section id="rules" title="Rules" lead="Short enough to remember.">
            <div className="grid gap-4 md:grid-cols-2">
              <Panel>
                <div className="mb-3 flex items-center gap-2 font-semibold">
                  <Check className="size-4" /> Do
                </div>
                <ul className="flex flex-col gap-2 text-muted-foreground">
                  <li>Let grays and ink carry the page.</li>
                  <li>Use one brand button per screen at most.</li>
                  <li>Keep every button 40px tall with a 10px radius.</li>
                  <li>Put card actions bottom-right in CardFooter.</li>
                  <li>Use StatusBadge for agent state, not custom colors.</li>
                </ul>
              </Panel>
              <Panel>
                <div className="mb-3 flex items-center gap-2 font-semibold">
                  <X className="size-4" /> Don&rsquo;t
                </div>
                <ul className="flex flex-col gap-2 text-muted-foreground">
                  <li>Add new accent colors or new shades of orange.</li>
                  <li>Put orange text on light backgrounds.</li>
                  <li>Stretch buttons to fill a row.</li>
                  <li>Add shadows to cards that don&rsquo;t float.</li>
                  <li>Hard-code hex values in components.</li>
                </ul>
              </Panel>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}

function Section({
  id,
  title,
  lead,
  children,
}: {
  id: string
  title: string
  lead: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="flex scroll-mt-24 flex-col gap-4">
      <div>
        <h2 className="text-xl leading-7 font-semibold tracking-[-0.01em]">{title}</h2>
        <p className="mt-1 text-[13px] text-muted-foreground">{lead}</p>
      </div>
      {children}
    </section>
  )
}

function Panel({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={`rounded-2xl border border-border bg-card p-5 ${className ?? ""}`} {...props} />
}

function Meta({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-[11px] leading-4 text-muted-foreground">{children}</span>
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string
  id: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}

function Member({
  initials,
  name,
  sub,
  trailing,
}: {
  initials: string
  name: string
  sub: string
  trailing: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-3 border-b border-border-subtle py-3 first:pt-0 last:border-b-0 last:pb-0">
      <Avatar className="size-9">
        <AvatarFallback className="border border-border-subtle bg-surface-subtle text-xs font-semibold">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <div className="font-medium">{name}</div>
        <div className="truncate text-[13px] text-muted-foreground">{sub}</div>
      </div>
      {trailing}
    </div>
  )
}

function SwatchGrid({
  tokens,
}: {
  tokens: ReadonlyArray<{ name: string; light: string; dark: string; use: string }>
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {tokens.map((t) => (
        <div key={t.name} className="flex flex-col gap-2">
          <div
            className="h-16 rounded-xl border border-border"
            style={{ background: `var(--${t.name === "skeleton" ? "skeleton" : t.name})` }}
          />
          <div className="flex flex-col">
            <span className="text-[13px] font-medium">{t.name}</span>
            <Meta>
              {t.light} / {t.dark}
            </Meta>
            <span className="text-xs text-muted-foreground">{t.use}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
