"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import DineroCuenta from "../../components/Dinero-Cuenta";
import Resumen from "../../components/Mensual-chart";
import Gastos from "../../components/Gastos-semanales";
import Navbar from "../../components/Navbar";
import Chart from "../../components/Chart";

export default function Home() {
  const [moneyAvailable, setMoneyAvailable] = useState(0);
  const [weeklyExpenses, setWeeklyExpenses] = useState([]);
  const [monthlySummary, setMonthlySummary] = useState({
    progress1: 0,
    progress2: 0,
    month: "",
  });
  const [chartData, setChartData] = useState([]);

  const userId = "exampleUserId"; // Reemplazar con la lógica para obtener el userId
  const token = localStorage.getItem("token"); // Token almacenado tras el login

  useEffect(() => {
    // Obtener saldo disponible
    const fetchMoneyAvailable = async () => {
      try {
        const response = await fetch(`http://localhost:9000/movements/total/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMoneyAvailable(data.total);
        } else {
          console.error("Error al obtener saldo disponible:", await response.json());
        }
      } catch (err) {
        console.error("Error al conectar con el servidor:", err);
      }
    };

    // Obtener gastos semanales
    const fetchWeeklyExpenses = async () => {
      try {
        const response = await fetch(`http://localhost:9000/movements/week/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setWeeklyExpenses(data.expenses);
        } else {
          console.error("Error al obtener gastos semanales:", await response.json());
        }
      } catch (err) {
        console.error("Error al conectar con el servidor:", err);
      }
    };

    // Obtener resumen mensual
    const fetchMonthlySummary = async () => {
      try {
        const response = await fetch(`http://localhost:9000/movements/month/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMonthlySummary({
            progress1: data.savingProgress,
            progress2: data.spendingProgress,
            month: data.month,
          });
        } else {
          console.error("Error al obtener resumen mensual:", await response.json());
        }
      } catch (err) {
        console.error("Error al conectar con el servidor:", err);
      }
    };

    // Obtener datos del gráfico
    const fetchChartData = async () => {
      try {
        const response = await fetch(`http://localhost:9000/movements/chart/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setChartData(data);
        } else {
          console.error("Error al obtener datos del gráfico:", await response.json());
        }
      } catch (err) {
        console.error("Error al conectar con el servidor:", err);
      }
    };

    fetchMoneyAvailable();
    fetchWeeklyExpenses();
    fetchMonthlySummary();
    fetchChartData();
  }, [userId, token]);

  return (
    <div className="mt-[10vh] p-8 h-[90vh] w-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex justify-center items-center overflow-hidden">
      <nav>
        <Navbar />
      </nav>
      <main className="flex justify-center items-center w-[100vw] h-[87vh]">
        <section className="grid grid-cols-12 grid-rows-4 gap-x-[7vw] gap-y-[5vh] w-[75vw]">
          {/* Caja de Dinero en Cuenta */}
          <div className="row-span-1 row-start-2 col-span-4 col-start-1 flex flex-col items-center justify-between ">
            <div className="flex items-center bg-neutral-900 border-[#3c6edb] border-[12px] rounded-full w-[79%] h-[100%] justify-center">
              <DineroCuenta name={"Money Available"} number={moneyAvailable} />
            </div>
          </div>

          {/* Caja de Gastos */}
          <div className="mr-[1.8vw] col-start-5 col-span-8 row-start-2
           rounded-lg flex flex-col">
            <Gastos expenses={weeklyExpenses} />
          </div>

          {/* Caja de Resumen */}
          <div className="col-span-4 row-start-3">
            <Resumen
              mes={monthlySummary.month}
              progress1={monthlySummary.progress1}
              progress2={monthlySummary.progress2}
            />
          </div>

          {/* Caja de Gráfico */}
          <div className="col-span-8 rounded-lg mr-[1.8vw] row-start-3">
            <div>
              <Chart data={chartData} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
