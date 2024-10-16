"use Client"
import { useState } from 'react';
import Grafico from "./Grafico";
import Gastos_Dia from "./Gastos_dia"

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[50vw]">
         <div className='flex flex-row justify-between'>
        <h2 className="text-2xl mb-1">Gastos</h2>
        <button onClick={onClose} className="px-3 bg-gray-700 text-white rounded hover:bg-gray-600">
          X
        </button>
         </div>
         
        <div className="flex justify-between mt-4">
          <div className='flex flex-col items-center'><Gastos_Dia dia="Lun" gastos="24" /><p>$92.000</p></div>
          <div className='flex flex-col items-center'><Gastos_Dia dia="Mar" gastos="12" /><p>$42.000</p></div>
          <div className='flex flex-col items-center'><Gastos_Dia dia="Mie" gastos="6" /><p>$27.000</p></div>
          <div className='flex flex-col items-center'><Gastos_Dia dia="Jue" gastos="8" /><p>$35.000</p></div>
          <div className='flex flex-col items-center'><Gastos_Dia dia="Vie" gastos="4" /><p>$12.000</p></div>
          <div className='flex flex-col items-center'><Gastos_Dia dia="Sab" gastos="22" /><p>$82.000</p></div>
          <div className='flex flex-col items-center'><Gastos_Dia dia="Dom" gastos="20" /><p>$75.000</p></div>
        </div>
        
       
      </div>
    </div>
  );
}
