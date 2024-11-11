"use client"

import { useState } from "react";
import Image from "next/image";
import "./register.css";

export default function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    
    const handleSubmit = async (e)  => {
        e.preventDefault(); 
        
        const registerData = {
            email,
            name,
            password,
          };

    try {
      const response = await fetch("http://localhost:9000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData), 
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login exitoso:", data);
      } else {
        const error = await response.json();
        console.error("Error de login:", error);
        alert("Credenciales incorrectas o error en el servidor.");
      }
    } catch (err) {
      console.error("Error en la solicitud:", err);
      alert("Hubo un error al conectar con el servidor.");
    }
    };

    return (
        <div className="bg-gradient-to-r from-[#080c2c] via-[#292d47] to-black overflow-hidden">
            <main>
                <section className="h-[100vh] w-[100vw] flex justify-between items-center">
                    <div className="h-[100vh] w-[60vw] flex justify-end items-center pr-[17%]"> 
                        <a href="/" className="cursor-pointer"><Image src={"/mbn.png"} width={280} height={280} /></a>
                    </div>
                    
                    <div className="flex justify-center items-center rounded-xl w-[40vw] h-[100vh] bg-black hover:w-[85vw] transition-all duration-500 rounded-l-lg">
                        <form onSubmit={handleSubmit} className="w-[50%] flex h-[65vh] justify-around">
                            <h2>Create an Account</h2>
                            <div>
                                <div className="input-field mb-[1.5vw]">
                                    <input type="text" required value={name} onChange={(e) =>setName(e.target.value)} />
                                    <label>Name</label>
                                </div>
                                <div className="input-field mb-[1.5vw]">
                                    <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label>Email</label>
                                </div>
                                <div className="input-field mb-[1.5vw]">
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label className="absolute">Password</label>
                                </div>
                                <div className="input-field mb-[1.5vw]">
                                    <input
                                        type="password"
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <label>Confirm password</label>
                                </div>
                                {error && <p className="text-red-500 py-1 mb-2">{error}</p>}
                            </div>
                            <div className="flex justify-center items-center flex-col w-[100%]">
                                <button type="submit" className="submit w-[80%]">Register</button>
                                <div className="register">
                                    <p className="text-[#ccc]">Already have an account?</p>
                                    <p><a href="http://localhost:3000/login" className="text-[#ccc] hover:text-[#fff] transition-all duration-300">Log in</a></p>
                                </div>
                            </div>
                        </form> 
                    </div>
                </section>
            </main>
        </div>
    );
}
