import Image from "next/image";

import "./login.css"

export default function Login() {
    
    return (
        <div className="bg-gradient-to-r from-[#080c2c] via-[#292d47] to-black overflow-hidden">
           <main className="">
            <section className="h-[100vh] w-[100vw] flex justify-between items-center">
                <div className="h-[100vh] w-[60vw] flex justify-end items-center pr-[17%]"> 
                    <a href="/" className="cursor-pointer"><Image src={"/mbn.png"} width={280} height={280} /></a>
                </div>
                
                <div className="flex justify-center items-center rounded-xl w-[40vw] h-[100vh] bg-black hover:w-[85vw] transition-all duration-500 rounded-l-lg">
                    <form action="#" className="w-[50%] flex h-[50vh] justify-around">
                        <h2>Login</h2>
                        <div>
                            <div className="input-field mb-[1.5vw]">
                                <input type="text" required/>
                                <label>Email</label>
                            </div>
                            <div className="input-field mb-[1.5vw]">
                                <input type="password" required/>
                                <label>Password</label>
                            </div>
                            <div className="forget">
                                <label for="remember">
                                    <input type="checkbox" id="remember"/>
                                    <p>Remember me</p>
                                </label>
                                <a href="http://localhost:3000/forgot">Forgot password?</a>
                            </div>
                        </div>
                        <div className="flex justify-center items-center flex-col w-[100%]">
                            <button type="submit" className="w-[80%]">Log In</button>
                            <div className="register">
                                <p>Don't have an account?</p> <p><a href="http://localhost:3000/register" className="hover:text-[#ffffff] transition-all duration-300">Register</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
          </main>
        </div>
    )
}