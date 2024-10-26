"use client"
import { useState } from 'react';

import DineroCuenta from "../../components/DC"
import Resumen from "../../components/Resumen"
import Gastos from "../../components/Gastos-semanales"
import Navbar from "../../components/Navbar";
import Chart from "../../components/Chart";


export default function Home() {
 
  return (
    <div className="pt-20 p-8 h-[100vh] bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
      <nav>
        <Navbar/>
      </nav>
      <main className="grid grid-cols-12 gap-[8vw] w-[95vw] h-[80vh]">
        <aside className="col-span-3 space-y-4 flex justify-between flex-col bg-gray-800 rounded-lg p-4">
          <div className="justify-between h-[50%]">
            <button className="block text-left p-2 hover:bg-gray-600 rounded-lg mb-1 duration-500">Dinero en cuenta</button>
            <button className="block text-left p-2 hover:bg-gray-600 rounded-lg mb-1 duration-500">Gastos</button>
          </div>

          <div>
            <button className="block text-left p-2 hover:bg-gray-600 rounded-lg mb-1 duration-500">Help</button>
          </div>
        </aside>

        <section className="col-span-9 grid grid-cols-12 gap-x-[4vw] gap-y-[3vh] sm:gap-x-[2vw] sm:gap-y-[1.5vh]">


          {/* Caja de Dinero en Cuenta */}
          <div className="col-span-4 row-span-1 ml-[-25%] p-4 bg-[#18181B] border border-[#CCCCCC] rounded-lg">          
          <DineroCuenta/>
          </div>

          {/* Caja de Gastos */}
          <div className="mr-[1.8vw] col-span-8 rounded-lg flex flex-col">
            <Gastos/>
          </div>
   

          {/* Caja de Resumen */}
          <div className="col-span-4 p-4 ml-[-27%] mt-[2vw] bg-[#18181B] rounded-lg border border-[#CCCCCC]">
            <Resumen
              mes={"August"}
              progress1={50}
              progress2={70}
            />
          </div>

          
          {/* Caja de Gráfico */}
          <div className="col-span-8 rounded-lg mr-[1.8vw] mt-[2vw]">
            <div className="">
                <Chart/>
            </div>
          </div>  
        </section>
      </main>
    </div>

    
  );
  
}
