"use client"

import Navbar from "../../components/Nav-set";
import { useState } from "react";
import Image from "next/image";
import "./sett.css"


export default function Settings() {
  const [username, setUsername] = useState("Nombre del usuario");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
    return (
      <div className="pt-20 p-8 h-[100vh] bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
        <nav>
         <Navbar/>
        </nav>
      
      <main className="flex justify-center items-center w-[100vw] h-[85vh]">
      <div className="max-w-md w-full space-y-6">        
        
        {/* Profile Info */}
        <div className="text-center">
          <p className="text-4xl font-bold">{username}</p>
        </div>

        {/* Account Settings Form */}
        <div className="space-y-4">
          {/* Name Section */}
          <div>
            <h3 className="text-sm font-medium">Nombre completo</h3>
            <div className="flex gap-2 mt-1">
              <input
                type="text"
                placeholder="Nombre"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-gray-800 text-white w-full p-2 rounded outline-none"/>
              
              <input
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-gray-800 text-white w-full p-2 rounded outline-none"/>
              
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-medium">Contacto</h3>
            <div className="flex gap-2 mt-1">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 text-white w-full p-2 rounded outline-none"/>
              
              <input
                type="tel"
                placeholder="Telefono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-gray-800 text-white w-full p-2 rounded outline-none"/>
              
            </div>
          </div>

          {/* Password Section */}
          <div>
            <h3 className="text-sm font-medium">Contraseña</h3>
            <div className="flex gap-2 mt-1">
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-800 text-white w-full p-2 rounded outline-none"/>
              
              <input
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-gray-800 text-white w-full p-2 rounded outline-none"/>
              
            </div>
            
            <div className="flex justify-center items-center flex-col w-[100%]">
                <button type="submit" className="mt-5 bg-white text-black w-[50%] rounded-sm">Apply</button>
          </div>

          </div>
        </div>
      </div>
      </main>
    </div>

  );
}