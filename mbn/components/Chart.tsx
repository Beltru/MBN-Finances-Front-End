"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import "./chart.css"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"

export const description = "An interactive line chart"

const  chartData = [
  { date: "0", desktop: 0, mobile: 0 },
  { date: "2024-02", desktop: 91, mobile: 180 },
  { date: "2024-03", desktop: 300, mobile: 89 },
  { date: "2024-04", desktop: 167, mobile: 120 },
  { date: "2024-05", desktop: 242, mobile: 260 },
  { date: "2024-06", desktop: 373, mobile: 290 },
  { date: "2024-07", desktop: 301, mobile: 340 },
  { date: "2024-08", desktop: 245, mobile: 180 },
  { date: "2024-09", desktop: 409, mobile: 320 },
  { date: "2024-10", desktop: 59, mobile: 110 },
  { date: "2024-11", desktop: 261, mobile: 190 },
  { date: "2024-12", desktop: 327, mobile: 350 },
  { date: "2024-01", desktop: 427, mobile: 550 },
];


const chartConfig = {
  views: {
    label: "Money",
  },
  desktop: {
    label: "Expenses",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Earnings",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const Chart = () => {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop")

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-2">
          <CardTitle className="text-xl">Yearly Resumé</CardTitle>
        </div>
        <div className="flex">
          {["desktop", "mobile"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-4"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-xl">
                  {new Intl.NumberFormat('es-ES').format(total[key as keyof typeof total])}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="h-[15vh] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickMargin={12}
              tickFormatter={(value) => {
                if (value === 0) {
                  const date = ""
                  return date
                } else {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {month: "short",})
                }
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[100px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", { month: "short"})
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default Chart;