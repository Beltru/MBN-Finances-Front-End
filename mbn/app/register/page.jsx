"use client"

import { useState } from "react";
import Image from "next/image";
import "./register.css";

export default function Register() {
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
        <div className="bg-gradient-to-r from-[#080c2c] via-[#0d1449] to-black overflow-hidden">
            <main>
                <section className="h-[100vh] w-[100vw] flex justify-between items-center">
                    <div className="ml-[15vw]"> 
                        <Image src={"/mbn.png"} width={280} height={280} />
                    </div>
                    
                    <div className="flex justify-center items-center rounded-xl w-[40vw] h-[100vw] bg-black hover:w-[55vw] transition-all duration-500 rounded-l-lg">
                        <form onSubmit={handleSubmit} className="w-[50%]">
                            <h2>Register</h2>
                            <div className="input-field">
                                <input type="text" required />
                                <label>Name</label>
                            </div>
                            <div className="input-field">
                                <input type="text" required />
                                <label>Email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label className="absolute">Password</label>
                            </div>
                            <div className="input-field">
                                <input
                                    type="password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <label>Confirm password</label>
                            </div>
                            {error && <p className="text-red-500 py-1 mb-2">{error}</p>}
                            <button type="submit" className="submit">Register</button>
                            <div className="register">
                                <p>Already have an account?</p>
                                <p><a href="http://localhost:3000/login">Log in</a></p>
                            </div>
                        </form> 
                    </div>
                </section>
            </main>
        </div>
    );
}
