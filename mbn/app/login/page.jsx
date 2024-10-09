import Image from "next/image";
import Navbar from "../../components/Navbar";
export default function Login() {
    return (
        <main>
            <nav>
                <Navbar/>
            </nav>
            <section className="h-[100vh] w-[100vw] flex justify-around items-center">
                <div> <Image src={"/mbn.png"}
              width={280}
              height={280}/></div>
                <div>El login todo culeado que diseño el forro de Campa</div>
            </section>
        </main>
    )
}
