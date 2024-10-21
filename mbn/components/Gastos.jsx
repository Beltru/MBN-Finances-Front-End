"use client";
import Modal from "./modals/Modal-Gastos";
import Gastos_Dia from "./Gastos_dia"
import { useEffect, useRef, useState } from 'react';

  const Gastos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

    return (
      <div>
        <button onClick={openModal} className="text-lg border-b-2 border-gray-500 hover:border-white transition-all duration-500">Gastos</button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
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