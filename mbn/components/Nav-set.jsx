"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [name, setName] = useState(""); // Estado para almacenar el nombre del usuario
  const router = useRouter();

  useEffect(() => {
    // Recuperar el nombre del usuario al cargar la Navbar
    const fetchUserName = async () => {
      const email = localStorage.getItem("email"); // Obtener el email almacenado en el localStorage
      if (!email) return;

      try {
        const response = await fetch(`http://localhost:9000/auth/user/email/${email}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setName(userData.nombre); // Establecer el nombre del usuario
        } else {
          console.error("Error al obtener el nombre del usuario.");
        }
      } catch (err) {
        console.error("Error en la solicitud:", err);
      }
    };

    fetchUserName();
  }, []); // Este efecto solo se ejecuta una vez al montar el componente

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 shadow-lg z-10">
      <div className="w-[100vw] flex items-center justify-between px-[4vw]">
        <div className="text-gray-300 text-xl font-bold cursor-pointer">
                 <Link href="/home">MBN Finances</Link>
 
        </div>
          
        

        <div className="flex space-x-4">
          <ul className="flex flex-row justify-around w-[21vw] items-center">
            <li>Bienvenido {name}</li> {/* Mostrar el nombre del usuario */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
