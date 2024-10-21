"use Client"
import { useState } from 'react';
import Gastos_Dia from "../Gastos_semanales"

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[40vw] h-[20vw] flex flex-col justify-between">
        <div className='flex flex-row justify-between'>
          <h2 className="text-2xl mb-1">Your bills</h2>
          <button onClick={onClose} className="px-3 bg-gray-700 text-white rounded hover:bg-gray-600">
            X
          </button>
        </div>
         
        <div className="flex justify-between mb-[3vw]">
          <div className='flex flex-col items-center'><Gastos_Dia dia="Mon" gastos="24" /><p>$92.000</p></div>
          <div className='flex flex-col items-center'><Gastos_Dia dia="Tue" gastos="12" /><p>$42.000</p></div>
          <div className='flex flex-col items-center'><Gastos_Dia dia="Wed" gastos="6" /><p>$27.000</p></div>
          <div className='flex flex-col items-center'><Gastos_Dia dia="Thu" gastos="8" /><p>$35.000</p></div>
          <div className='flex flex-col items-center'><Gastos_Dia dia="Fri" gastos="4" /><p>$12.000</p></div>
          <div className='flex flex-col items-center'><Gastos_Dia dia="Sat" gastos="22" /><p>$82.000</p></div>
          <div className='flex flex-col items-center'><Gastos_Dia dia="Sun" gastos="20" /><p>$75.000</p></div>
        </div>
        
       
      </div>
    </div>
  );
}
