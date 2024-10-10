import Image from "next/image";
import "./register.css"

export default function Register() {
    return (
        <div className="bg-gradient-to-r from-[#0f0015] via-[#080c2c] to-black overflow-hidden">
           <main className="">
            <section className="h-[100vh] w-[100vw] flex justify-between items-center">
              <div className="ml-[15vw]"> 
                <Image src={"/mbn.png"}
                    width={280}
                    height={280}/>
              </div>
                
                <div className="flex justify-center items-center rounded-xl w-[40vw] h-[100vw] bg-black hover:w-[55vw] transition-all duration-500 rounded-l-lg">
                    <form action="#" className="w-[50%] ">
                        <h2>Register</h2>
                        <div className="input-field">
                            <input type="text" required/>
                            <label>Name</label>
                        </div>
                        <div className="input-field">
                            <input type="text" required/>
                            <label>Email</label>
                        </div>
                        <div className="input-field">
                            <input type="password" required/>
                            <label>Password</label>
                        </div>
        
                        <button type="submit">Register</button>
                        <div className="register">
                            <p>blablabla</p>
                        </div>
                    </form>
                </div>
            </section>
          </main>
        </div>
    )
}