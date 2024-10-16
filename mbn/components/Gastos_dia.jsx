"use client"

import { useEffect, useRef, useState } from 'react';

const Gastos_Dia = ({ dia, gastos }) => {
    const barRef = useRef(null);
  
    useEffect(() => {
      if (barRef.current) {
        barRef.current.style.height = '0px';
        setTimeout(() => {
          barRef.current.style.height = `${gastos * 5}px`;
        }, 300);
      }
    }, [gastos]);
  
    return (
      <div className="space-y-1">
        <p>{dia}</p>
        <div className="flex flex-col-reverse">
          <div
            ref={barRef}
            className="bg-blue-600 rounded-lg transition-height duration-500 ease-in-out"
            style={{ width: '22px' }}
          ></div>
        </div>
      </div>
    );
  };

  export default Gastos_Dia