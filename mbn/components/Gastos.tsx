"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import "./gastos.css"
import { useEffect, useRef, useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"

export const description = "A bar chart with a label"

const chartData = [
  { month: "Monday", desktop: 14312 },
  { month: "Tuesday", desktop: 8342 },
  { month: "Wednesday", desktop: 2550 },
  { month: "Thursday", desktop: 10973 },
  { month: "Friday", desktop: 19032 },
  { month: "Saturday", desktop: 16130 },
  { month: "Sunday", desktop: 9233 }
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const Gastos = () => {

  return (
    <Card>
      <CardHeader>
        <CardDescription>Weekly Expenses</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start my-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing this week's expenses
        </div>
      </CardFooter>
    </Card>
  )
}

export default Gastos