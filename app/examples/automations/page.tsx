import { CalendarClock, Image as ImageIcon, Link2, MessageSquareQuote, Search, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AutomationRow, PageHeader, StatCard, StatusBadge, ThemeToggle } from "@/components/fork"

export default function AutomationsExample() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-10">
      <PageHeader
        title="Automations"
        description="Things Fork does for Sunrise Bakery without asking. Turn any of them off."
        actions={<ThemeToggle />}
      />
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard title="Running" value="5" />
        <StatCard title="Actions this month" value="128" change={24} />
        <StatCard title="Time saved" value="6.5h" />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>On your site</CardTitle>
          <CardDescription>Checks and fixes that keep the site healthy.</CardDescription>
        </CardHeader>
        <CardContent className="gap-0">
          <AutomationRow icon={<Link2 />} title="Broken link check" schedule="Every Monday · fixed 2 last run" defaultChecked />
          <AutomationRow icon={<ImageIcon />} title="Compress new images" schedule="When you upload a photo" defaultChecked />
          <AutomationRow icon={<Search />} title="Refresh search titles" schedule="Monthly · needs approval" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Content</CardTitle>
          <CardDescription>Keeps your pages fresh with what&rsquo;s happening at the bakery.</CardDescription>
          <CardAction>
            <StatusBadge status="active" />
          </CardAction>
        </CardHeader>
        <CardContent className="gap-0">
          <AutomationRow icon={<MessageSquareQuote />} title="Post new 5-star reviews" schedule="When a review arrives · asks first" defaultChecked />
          <AutomationRow icon={<Tag />} title="Weekly specials banner" schedule="Fridays at 7am" defaultChecked />
          <AutomationRow icon={<CalendarClock />} title="Holiday hours" schedule="Paused until December" />
        </CardContent>
      </Card>
      <div className="flex justify-end">
        <Button variant="outline">Suggest a new automation</Button>
      </div>
    </div>
  )
}
