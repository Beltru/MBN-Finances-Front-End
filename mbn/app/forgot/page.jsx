import Image from "next/image";
import "./forgot.css"

export default function Forgot() {
    return (
        <div className="bg-gradient-to-r from-[#080c2c] via-[#292d47] to-black overflow-hidden">
           <main className="">
            <section className="h-[100vh] w-[100vw] flex justify-between items-center">
              <div className="ml-[15vw]"> 
                <Image src={"/mbn.png"}
                    width={280}
                    height={280}/>
              </div>
                
                <div className="flex justify-center items-center rounded-xl w-[40vw] h-[100vw] bg-black hover:w-[55vw] transition-all duration-500 rounded-l-lg">
                    <form action="#" className="w-[50%] ">
                        <h2>Forgot password</h2>
                        <div className="input-field">
                            <input type="text" required/>
                            <label>Email</label>
                        </div>
                       
                        <button type="submit">Reset password</button>
                        <div className="register">
                          <a href="http://localhost:3000/login">🡐 Back to login</a>
                        </div>
                    </form>
                </div>
            </section>
          </main>
        </div>
    )
}