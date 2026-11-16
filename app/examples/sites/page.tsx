import { ArrowUpDown, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PageHeader, SiteCard, ThemeToggle } from "@/components/fork"

const sites = [
  { name: "Sunrise Bakery", url: "sunrise.fork.site", edited: "2h ago", live: true },
  { name: "Red Pepper", url: "red-pepper.fork.site", edited: "yesterday", live: true },
  { name: "Ploy Studio", url: "ploy.fork.site", edited: "3 days ago" },
  { name: "Fly Coffee", url: "fly.fork.site", edited: "last week", live: true },
  { name: "Clim8Assist", url: "clim8assist.fork.site", edited: "Oct 22" },
  { name: "Marketing", url: "marketing.fork.site", edited: "Oct 20" },
]

export default function SitesExample() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
      <PageHeader
        title="Sites"
        actions={
          <>
            <ThemeToggle />
            <Button variant="brand">
              <Plus />
              New site
            </Button>
          </>
        }
      />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative w-72">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search sites" aria-label="Search sites" />
          </div>
          <span className="text-[13px] text-muted-foreground">{sites.length} sites</span>
        </div>
        <div className="flex items-center gap-2">
          <ArrowUpDown className="size-4 text-muted-foreground" aria-hidden="true" />
          <Select defaultValue="recent">
            <SelectTrigger aria-label="Sort sites" className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Recently edited</SelectItem>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="created">Date created</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {sites.map((s) => (
          <SiteCard key={s.url} {...s} />
        ))}
      </div>
    </div>
  )
}
