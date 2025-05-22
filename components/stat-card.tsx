"use client"

import { cn, formatNumber, getChangeColor, getChangeIcon } from "@/lib/utils"
import { DivideIcon as LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Icons } from "./icons"

interface StatCardProps {
  title: string
  value: string | number
  change: number
  icon: string
  prefix?: string
}

export function StatCard({ title, value, change, icon, prefix }: StatCardProps) {
  const changeColor = getChangeColor(change)
  const changeIconName = getChangeIcon(change)
  const IconComponent = Icons[icon as keyof typeof Icons]
  const ChangeIconComponent = Icons[changeIconName as keyof typeof Icons]
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="rounded-full bg-muted p-2">
          {IconComponent && <IconComponent className="h-4 w-4" />}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {prefix}{formatNumber(value)}
        </div>
        <div className="mt-1 flex items-center text-xs">
          <div className={cn("flex items-center", changeColor)}>
            {ChangeIconComponent && <ChangeIconComponent className="mr-1 h-3 w-3" />}
            <span>{Math.abs(change)}%</span>
          </div>
          <span className="ml-1 text-muted-foreground">último mês</span>
        </div>
      </CardContent>
    </Card>
  )
}