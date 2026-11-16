"use client"

import { Gauge, ImageIcon, Link2, MoreHorizontal, Search, Sparkles, Star } from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ApprovalCard,
  Composer,
  Feed,
  FeedItem,
  PageHeader,
  StatusBadge,
  ThemeToggle,
} from "@/components/fork"

function ItemMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label="More options">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem>Show details</DropdownMenuItem>
        <DropdownMenuItem>Don&rsquo;t suggest this again</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Dismiss</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function FeedExample() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-10">
      <PageHeader
        title="Good morning, Uli"
        description="Fork handled 6 things for Sunrise Bakery this week. One needs you."
        actions={<ThemeToggle />}
      />

      <ApprovalCard
        title="New 5-star review from Maria"
        description="Google · 2 days ago"
        aside={<StatusBadge status="needs-approval" />}
        approveLabel="Add to homepage"
        onApprove={() => toast("Review added to your homepage", { action: { label: "Undo", onClick: () => {} } })}
      >
        <div className="flex gap-0.5 text-brand" aria-label="5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-current" aria-hidden="true" />
          ))}
        </div>
        <p>&ldquo;Best sourdough in town. The new online ordering made it so easy.&rdquo;</p>
      </ApprovalCard>

      <Tabs defaultValue="all">
        <TabsList variant="line">
          <TabsTrigger value="all">All activity</TabsTrigger>
          <TabsTrigger value="ideas">Ideas</TabsTrigger>
          <TabsTrigger value="done">Done</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="pt-6">
          <Card>
            <CardContent>
              <Feed>
                <FeedItem
                  icon={<Sparkles />}
                  title="I can add a catering page"
                  time="12m"
                  menu={<ItemMenu />}
                  actions={
                    <>
                      <Button>Build it</Button>
                      <Button variant="ghost">Discuss</Button>
                    </>
                  }
                >
                  12 visitors searched for &ldquo;catering&rdquo; this week and left. A short page with
                  a quote form could turn them into orders.
                </FeedItem>
                <FeedItem
                  icon={<ImageIcon />}
                  title="Testing a new hero photo"
                  time="2h"
                  menu={<ItemMenu />}
                  actions={<StatusBadge status="running" />}
                >
                  Close-up of the croissants vs. the storefront. Day 3 of 8, 412 visitors so far.
                </FeedItem>
                <FeedItem icon={<Link2 />} title="Fixed 2 broken links" time="1d" menu={<ItemMenu />}>
                  On /menu and /catering. Nothing for you to do.
                </FeedItem>
                <FeedItem icon={<Gauge />} title="Homepage loads 1.2s faster" time="2d" menu={<ItemMenu />}>
                  I compressed 14 images without changing how they look.
                </FeedItem>
                <FeedItem icon={<Search />} title="Updated 3 search titles" time="3d" menu={<ItemMenu />}>
                  <span className="flex flex-wrap items-center gap-2">
                    Pages now name your neighborhood. <Badge>SEO</Badge>
                  </span>
                </FeedItem>
              </Feed>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ideas" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Ideas</CardTitle>
              <CardDescription>Things I could do next. Pick one and I&rsquo;ll start.</CardDescription>
            </CardHeader>
            <CardContent>
              <Feed>
                <FeedItem icon={<Sparkles />} title="Add online gift cards" actions={<Button variant="outline">Tell me more</Button>}>
                  Holiday searches for &ldquo;bakery gift card&rdquo; are up 40%.
                </FeedItem>
                <FeedItem icon={<Sparkles />} title="Collect emails for weekly specials" actions={<Button variant="outline">Tell me more</Button>}>
                  A small sign-up at checkout. I&rsquo;ll write the first email.
                </FeedItem>
              </Feed>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="done" className="pt-6 text-muted-foreground">
          Completed work shows here.
        </TabsContent>
      </Tabs>

      <div className="sticky bottom-4">
        <Composer className="shadow-float" />
      </div>
    </div>
  )
}
