import * as React from "react"
import { TrendingDown, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

/** A single metric with an optional trend and sparkline (ink line, orange end dot). */
function StatCard({
  title,
  period,
  value,
  change,
  points,
  className,
}: {
  title: string
  period?: string
  value: string
  change?: number
  points?: number[]
  className?: string
}) {
  const up = (change ?? 0) >= 0
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {period && <CardDescription>{period}</CardDescription>}
        {change !== undefined && (
          <CardAction>
            <Badge variant={up ? "brand" : "default"}>
              {up ? <TrendingUp /> : <TrendingDown />}
              {Math.abs(change)}%
            </Badge>
          </CardAction>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-[32px] leading-9 font-semibold tracking-[-0.03em]">{value}</div>
        {points && points.length > 1 && <Sparkline points={points} />}
      </CardContent>
    </Card>
  )
}

function Sparkline({ points }: { points: number[] }) {
  const w = 260
  const h = 56
  const pad = 6
  const min = Math.min(...points)
  const max = Math.max(...points)
  const span = max - min || 1
  const xy = points.map((p, i) => [
    (i / (points.length - 1)) * (w - pad * 2) + pad,
    h - pad - ((p - min) / span) * (h - pad * 2),
  ])
  const d = xy.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ")
  const [lx, ly] = xy[xy.length - 1]
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-14 w-full" aria-hidden="true">
      <path d={d} fill="none" stroke="var(--foreground)" strokeWidth={1.75} strokeLinejoin="round" />
      <circle cx={lx} cy={ly} r={4} fill="var(--brand)" />
    </svg>
  )
}

export { StatCard, Sparkline }
