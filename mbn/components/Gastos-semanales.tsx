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
  { date: "Monday", desktop: 14312 },
  { date: "Tuesday", desktop: 8342 },
  { date: "Wednesday", desktop: 2550 },
  { date: "Thursday", desktop: 10973 },
  { date: "Friday", desktop: 19032 },
  { date: "Saturday", desktop: 16130 },
  { date: "Sunday", desktop: 9233 }
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
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
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