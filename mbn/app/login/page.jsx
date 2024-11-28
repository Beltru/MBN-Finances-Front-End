"use client"

import Image from "next/image";
import { useState } from "react";
import "./login.css";
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false); 
  const router = useRouter();

  const handleLogIn = async (e) => {
    e.preventDefault(); 


    const loginData = {
      email,
      password,
      remember, 
    };

    try {
      const response = await fetch("http://localhost:9000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData), 
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login exitoso:", data);
        localStorage.setItem("email", email);
        router.push("/home")
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
            <a href="/" className="cursor-pointer">
              <Image src={"/mbn.png"} width={280} height={280} />
            </a>
          </div>

          <div className="flex justify-center items-center rounded-xl w-[40vw] h-[100vh] bg-black hover:w-[85vw] transition-all duration-500 rounded-l-lg">
            <form onSubmit={handleLogIn} className="w-[50%] flex h-[50vh] justify-around">
              <h2>Login</h2>
              <div>
                <div className="input-field mb-[1.5vw]">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Captura del email
                  />
                  <label>Email</label>
                </div>
                <div className="input-field mb-[1.5vw]">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Captura de la contraseña
                  />
                  <label>Password</label>
                </div>
                <div className="forget">
                  <label htmlFor="remember">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={remember}
                      onChange={() => setRemember(!remember)} // Captura del checkbox
                    />
                    <p>Remember me</p>
                  </label>
                  <Link href="/forgot">Forgot password?</Link>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col w-[100%]">
                <button type="submit" className="w-[80%]">
                  Log In
                </button>
                <div className="register">
                  <p>Don't have an account?</p>
                 <Link href="/register">
                    <p className="hover:text-[#ffffff] transition-all duration-300"> Register </p>
                 </Link>  
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
