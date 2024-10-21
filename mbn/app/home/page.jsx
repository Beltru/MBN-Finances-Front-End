"use client"
import { useState } from 'react';

import Resumen from "../../components/Resumen"
import Gastos from "../../components/Gastos"
import Navbar from "../../components/Navbar";
import Chart from "../../components/Chart";


export default function Home() {
 
  return (
    <div className="pt-24 p-8 min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
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

        <section className="col-span-9 grid grid-cols-12 gap-x-[4vw] gap-y-[3vh]">


          {/* Caja de Dinero en Cuenta */}
          <div className="col-span-4 ml-[-6rem] p-4 bg-gray-800 rounded-lg">          
            <p className="text-lg">Dinero en cuenta:</p>
            <p className="text-3xl font-bold">142,749 $</p><br></br>
            <p className="text-lg">Dinero transferido:</p>
            <p className="text-3xl font-bold">42,798 $</p>
          </div>

          {/* Caja de Gastos */}
          <div className="mr-[1.8vw] col-span-8 rounded-lg flex flex-col">
            <Gastos/>
          </div>
   

          {/* Caja de Resumen */}
          <div className="mt-[1.3vw] mb-[1.3vw] col-span-4 ml-[-6rem] p-4 bg-gray-800 rounded-lg border border-[#CCCCCC]">
            <Resumen
              mes={"August"}
              progress1={50}
              progress2={70}
            />
          </div>

          
          {/* Caja de Gráfico */}
          <div className="col-span-8 rounded-lg mr-[1.8vw] mt-[1.3vw]">
            <div className=" relative">
                <Chart/>
            </div>
          </div>
        </section>
      </main>
    </div>

    
  );
  
}
