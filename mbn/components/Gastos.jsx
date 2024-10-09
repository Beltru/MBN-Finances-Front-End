"use client";

import { useEffect, useRef } from 'react';

const Gastos_Dia = ({ dia, gastos }) => {
  const barRef = useRef(null);

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.height = '0px'; // Start with zero height
      setTimeout(() => {
        barRef.current.style.height = `${gastos * 5}px`; // Animate to final height
      }, 300); // Adjust delay as needed
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

  const Gastos = () => {
    return (
      <div>
        <p className="text-lg">Gastos</p>
        <div className="flex justify-between mt-4">
          <Gastos_Dia dia="Lun" gastos="24" />
          <Gastos_Dia dia="Mar" gastos="12" />
          <Gastos_Dia dia="Mie" gastos="6" />
          <Gastos_Dia dia="Jue" gastos="8" />
          <Gastos_Dia dia="Vie" gastos="4" />
          <Gastos_Dia dia="Sab" gastos="22" />
          <Gastos_Dia dia="Dom" gastos="20" />
        </div>
      </div>
    );
  };
  export default Gastos;