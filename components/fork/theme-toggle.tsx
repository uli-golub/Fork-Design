"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

/** Light / Dark segmented switch (also: press "d"). */
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  // true on the client, false during SSR — avoids a hydration mismatch
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  return (
    <Tabs value={mounted ? resolvedTheme : "light"} onValueChange={setTheme}>
      <TabsList aria-label="Color theme">
        <TabsTrigger value="light">Light</TabsTrigger>
        <TabsTrigger value="dark">Dark</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export { ThemeToggle }
