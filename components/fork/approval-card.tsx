import * as React from "react"

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

/**
 * Something the agent prepared that needs a yes. This is the one place
 * a brand (orange) button belongs: the approve action.
 */
function ApprovalCard({
  title,
  description,
  aside,
  children,
  approveLabel = "Approve",
  skipLabel = "Skip",
  onApprove,
  onSkip,
}: {
  title: React.ReactNode
  description?: React.ReactNode
  aside?: React.ReactNode
  children?: React.ReactNode
  approveLabel?: string
  skipLabel?: string
  onApprove?: () => void
  onSkip?: () => void
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {aside && <CardAction>{aside}</CardAction>}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
      <CardFooter>
        <Button variant="outline" onClick={onSkip}>
          {skipLabel}
        </Button>
        <Button variant="brand" onClick={onApprove}>
          {approveLabel}
        </Button>
      </CardFooter>
    </Card>
  )
}

export { ApprovalCard }
