"use client"

import Navbar from "../../components/Nav-set";
import { useState } from "react";
import "./settings.css"


export default function Settings() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        setError("");
        console.log("Formulario enviado");
    };

  return (
    <div className="pt-20 p-8 h-[100vh] bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
      <nav>
        <Navbar/>
      </nav>
            <main className="flex justify-center items-center w-[95vw] h-[80vh]">
              <div className="flex flex-col items-center max-w-md w-full space-y-6">
               <div className="text-center pt-32">
            <p className="text-4xl font-bold">Nombre de usuario</p>
               </div>
               
                        <form onSubmit={handleSubmit} className="w-[100%] flex h-[65vh] items-center">
                            <div className=" flex gap-4 mt-4">
                                <div className="input-field mb-[1.5vw]">
                                    <input type="text" required />
                                    <label>Name</label>
                                </div> 
                                <div className="input-field mb-[1.5vw]">
                                    <input type="text" required />
                                    <label>Last name</label>
                                </div>    
                                
                            </div>                             
                                 
                            <div className=" flex gap-4 mt-4">
                                <div className="input-field mb-[1.5vw]">
                                    <input type="text" required />
                                    <label>Email</label>
                                </div> 
                                <div className="input-field mb-[1.5vw]">
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}/>
                                    <label className="absolute">Password</label>
                                </div>
                            </div>
                        </form>
                    </div> 
            </main>
        </div>
  );
}
