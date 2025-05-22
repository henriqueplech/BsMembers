"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ChartData } from "@/lib/data"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

interface RevenueChartProps {
  data: ChartData[]
}

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row items-center">
        <div className="flex flex-col space-y-1.5">
          <CardTitle className="text-base">Total Movimentado</CardTitle>
          <CardDescription className="flex space-x-2">
            <span className="flex items-center text-xs text-muted-foreground">
              <span className="mr-1 h-2 w-2 rounded-full bg-green-500" />
              Total arrecadado
            </span>
            <span className="flex items-center text-xs text-muted-foreground">
              <span className="mr-1 h-2 w-2 rounded-full bg-muted" />
              Total mês atual
            </span>
          </CardDescription>
        </div>
        <div className="ml-auto">
          <Button size="sm" variant="outline" className="h-8 bg-green-500 text-white hover:bg-green-600">
            Últimos 15 dias
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                hide={true}
                domain={[0, 20000]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                  border: 'none',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '12px',
                  padding: '8px'
                }}
                formatter={(value) => [`R$ ${value}`, 'Valor']}
                labelFormatter={(label) => `Data: ${label}`}
              />
              <Bar 
                dataKey="amount" 
                fill="hsl(var(--chart-1))" 
                radius={[4, 4, 0, 0]} 
                maxBarSize={24}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}