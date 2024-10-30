"use client"
import { useState } from 'react';

import DineroCuenta from "../../components/DC"
import Resumen from "../../components/Mensual-chart"
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
          <div className="row-span-1 col-span-3 ml-[-25%] flex flex-col items-center justify-between">
            <div className='flex items-center bg-neutral-900 border-[#3c6edb] border-[12px] rounded-full w-[55%] h-[43%]'>
              <DineroCuenta name={"Dinero"} number={145706}/>
            </div> 
            <div className='flex items-center bg-neutral-900 border-[#cf318d] border-[12px] rounded-full w-[55%] h-[43%]'>
              <DineroCuenta name={"Ingresos"} number={42000}/>
            </div>    
          </div>

          {/* Caja de Gastos */}
          <div className="mr-[1.8vw] col-span-8 rounded-lg flex flex-col">
            <Gastos/>
          </div>
   

          {/* Caja de Resumen */}
          <div className="col-span-4 mt-[2vw]">
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
