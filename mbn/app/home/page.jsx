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
      <main className="flex justify-center items-end w-[100vw] h-[85vh]">

        <section className="grid grid-cols-12 gap-x-[7vw] gap-y-[5vh] w-[70vw]">


          {/* Caja de Dinero en Cuenta */}
          <div className="col-span-4 row-span-1 ml-[-25%] p-4 bg-neutral-900 border border-[#CCCCCC] rounded-lg">          
          <DineroCuenta/>
          </div>

          {/* Caja de Gastos */}
          <div className="mr-[1.8vw] col-span-8 rounded-lg flex flex-col">
            <Gastos/>
          </div>
   

          {/* Caja de Resumen */}
          <div className="col-span-4 p-4 ml-[-27%] mt-[2vw] bg-neutral-900 rounded-lg border border-[#CCCCCC]">
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
