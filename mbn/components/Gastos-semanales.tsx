"use client"

import "./gastos.css"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, Cell } from "recharts"
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
  { date: "Monday", Money: 12312 },
  { date: "Tuesday", Money: 8342 },
  { date: "Wednesday", Money: 4550 },
  { date: "Thursday", Money: 10973 },
  { date: "Friday", Money: 9032 },
  { date: "Saturday", Money: 14130 },
  { date: "Sunday", Money: 9233 }
]

const chartConfig = {
  desktop: {
    label: "Money",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const Gastos = () => {
// Encontrar el valor máximo de "desktop"
 const maxValue = Math.max(...chartData.map(item => item.Money));
  return (
    <Card className="pb-14">
      <CardHeader>
        <CardDescription className="text-xl">Daily Money</CardDescription>
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
            <Bar dataKey="Money" radius={10}>
            {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.Money === maxValue ? "hsl(var(--chart-highlight))" : "var(--color-desktop)"}/>))}

              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={11}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
    
  )
}

export default Gastos