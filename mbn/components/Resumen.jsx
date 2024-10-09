"use client"

import React from 'react';

const ResumenAgosto = ({ progress1, progress2, mes}) => {
  return (
    <div className="p-4 bg-gray-800 rounded">
      <p className="text-lg mb-4">Resumen {mes}</p>
      <div className="space-y-4">
        <div>
          <p>Ingresos</p>
          <div className="w-full bg-gray-700 rounded h-4">
            <div
              className="bg-pink-500 h-4 rounded"
              style={{ width: `${progress1}%` }}
            ></div>
          </div>
        </div>
        <div>
          <p>Gastos</p>
          <div className="w-full bg-gray-700 rounded h-4">
            <div
              className="bg-blue-500 h-4 rounded"
              style={{ width: `${progress2}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumenAgosto;