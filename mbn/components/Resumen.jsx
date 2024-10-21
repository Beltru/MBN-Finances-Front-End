"use client"

import Modal from "./modals/Modal-Resumen";
import { useEffect, useRef, useState } from 'react';

const ResumenAgosto = ({ progress1, progress2, mes}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 bg-gray-800 rounded">
      <button className="text-lg border-b-2 mb-4 border-gray-500 hover:border-white transition-all duration-500" onClick={openModal}>Resumen {mes}</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} mes={mes} progress1={progress1} progress2={progress2}/>
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