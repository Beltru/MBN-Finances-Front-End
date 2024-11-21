"use client";

import React, { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import "./chart.css";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

export const description = "An interactive line chart";

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
} satisfies ChartConfig;

const Chart = () => {
  const [chartData, setChartData] = useState([]);
  const [activeChart, setActiveChart] = useState<keyof typeof chartConfig>("desktop");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token"); // Asegúrate de que el token esté presente
      const userId = localStorage.getItem("userId"); // Asumiendo que el `userId` está almacenado

      const response = await fetch(`http://localhost:9000/movements/chart/${userId}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error al cargar los datos del gráfico.");
      }

      const data = await response.json();
      setChartData(data); // Data recibida desde el backend
    } catch (err) {
      setError(err.message || "Error desconocido.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const total = React.useMemo(() => {
    return {
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    };
  }, [chartData]);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
                  {new Intl.NumberFormat("es-ES").format(total[chart])}
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
            margin={{}}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickMargin={12}
              tickFormatter={(value) => {
                if (!value) return "";
                const date = new Date(value);
                return date.toLocaleDateString("en-US", { month: "short" });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[100px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", { month: "short" });
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
  );
};

export default Chart;
