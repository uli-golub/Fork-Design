import * as React from "react"
import { Image as ImageIcon, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { StatusBadge } from "@/components/fork/status-badge"

/** Site tile from the Sites grid: preview, name, URL, two actions bottom-right. */
function SiteCard({
  name,
  url,
  edited,
  preview,
  live,
}: {
  name: string
  url: string
  edited?: string
  preview?: React.ReactNode
  live?: boolean
}) {
  return (
    <Card className="gap-0 pt-0">
      <div className="grid h-36 place-items-center border-b border-border bg-surface-subtle text-muted-foreground">
        {preview ?? <ImageIcon className="size-6" aria-hidden="true" />}
      </div>
      <CardHeader className="pt-5">
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          {url}
          {edited && <> · edited {edited}</>}
        </CardDescription>
        <CardAction className="flex items-center gap-1">
          {live && <StatusBadge status="live" />}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label={`More options for ${name}`}>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem>Rename</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Delete site</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardFooter className="pt-5">
        <Button variant="outline">Site dashboard</Button>
        <Button>Open site</Button>
      </CardFooter>
    </Card>
  )
}

export { SiteCard }
