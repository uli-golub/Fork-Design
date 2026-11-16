"use client"

import * as React from "react"
import { ChevronRight, ExternalLink, Gauge, Globe, Link2, MoreHorizontal, ShieldCheck, Smartphone, TriangleAlert, UserPlus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
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
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AgentPanel, StatCard, StatusBadge, TaskList, TaskRow, ThemeToggle } from "@/components/fork"

export default function SettingsExample() {
  const [visibility, setVisibility] = React.useState("private")
  const [panel, setPanel] = React.useState(true)

  return (
    <div className="flex h-full">
      <div className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
            <Globe className="size-3.5" aria-hidden="true" /> Sites <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className="text-foreground">Sunrise Bakery</span>
          </nav>

          <header className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl leading-8 font-semibold tracking-[-0.02em]">Sunrise Bakery</h1>
                <StatusBadge status="live" />
              </div>
              <a href="#" className="inline-flex items-center gap-1 font-mono text-[13px] text-muted-foreground hover:text-foreground">
                sunrise.fork.site <ExternalLink className="size-3" aria-hidden="true" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button variant="outline">
                <UserPlus />
                Invite
              </Button>
              <Button>Open site</Button>
              {!panel && (
                <Button variant="outline" onClick={() => setPanel(true)}>
                  Open Fork
                </Button>
              )}
              <Button variant="ghost" size="icon" aria-label="More site options">
                <MoreHorizontal />
              </Button>
            </div>
          </header>

          <Tabs defaultValue="settings">
            <TabsList>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
              <TabsTrigger value="versions">Versions</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="settings" className="flex flex-col gap-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Credits</CardTitle>
                  <CardDescription>Complimentary credits don&rsquo;t expire.</CardDescription>
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
                  <Button>Buy credits</Button>
                </CardFooter>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Site visibility</CardTitle>
                    <CardDescription>Who can open the live site.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={visibility} onValueChange={setVisibility} className="gap-2">
                      {[
                        { v: "public", t: "Public", d: "Anyone with the URL can open it." },
                        { v: "private", t: "Private", d: "Only invited members can sign in." },
                      ].map((o) => (
                        <label
                          key={o.v}
                          className={cn(
                            "flex cursor-pointer items-start gap-3 rounded-xl border border-border p-3.5 transition-colors hover:bg-accent/50",
                            visibility === o.v && "border-foreground"
                          )}
                        >
                          <RadioGroupItem value={o.v} className="mt-0.5" />
                          <span>
                            <span className="block font-medium">{o.t}</span>
                            <span className="text-[13px] text-muted-foreground">{o.d}</span>
                          </span>
                        </label>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Site health</CardTitle>
                    <CardDescription>Last checked 2 hours ago.</CardDescription>
                    <CardAction>
                      <Button variant="outline">Run check</Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent className="gap-0">
                    {[
                      { i: ShieldCheck, l: "SSL certificate", s: "Managed by Fork" },
                      { i: Link2, l: "Broken links", s: "None" },
                      { i: Gauge, l: "Performance", s: "Fast" },
                      { i: TriangleAlert, l: "Errors (24h)", s: "0" },
                      { i: Smartphone, l: "Mobile friendly", s: "Yes" },
                    ].map(({ i: Icon, l, s }) => (
                      <div key={l} className="flex items-center gap-3 border-b border-border-subtle py-2.5 first:pt-0 last:border-b-0 last:pb-0">
                        <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
                        <span className="flex-1">{l}</span>
                        <Badge>{s}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="members" className="pt-4 text-muted-foreground">Members list.</TabsContent>
            <TabsContent value="versions" className="pt-4 text-muted-foreground">Version history.</TabsContent>
            <TabsContent value="analytics" className="pt-4 text-muted-foreground">Analytics.</TabsContent>
          </Tabs>
        </div>
      </div>

      {panel && (
        <AgentPanel
          onClose={() => setPanel(false)}
          tasks={
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xl leading-7 font-semibold tracking-[-0.01em]">Site tasks</h2>
                <p className="text-[13px] text-muted-foreground">In progress · 3</p>
              </div>
              <TaskList>
                <TaskRow state="approval" title="Name the product in the button" meta="Needs your approval" action={<Button variant="outline">Review</Button>} />
                <TaskRow title="Update the search title" meta="SEO · ready to apply" action={<Button>Apply</Button>} />
                <TaskRow title="Move the product photo up" meta="Layout · ready to preview" action={<Button variant="outline">Preview</Button>} />
                <TaskRow state="done" title="Compress homepage images" meta="1.2s faster" />
              </TaskList>
            </div>
          }
          analytics={
            <div className="flex flex-col gap-4">
              <StatCard title="Visitors" period="Last 30 days" value="9,354" change={10} points={[20, 28, 16, 26, 22, 30, 24, 29, 20, 31, 27, 38, 34, 46]} />
              <StatCard title="Orders" period="Last 30 days" value="239" change={22} />
            </div>
          }
          chat={<p className="text-muted-foreground">Ask Fork anything about this site.</p>}
        />
      )}
    </div>
  )
}
