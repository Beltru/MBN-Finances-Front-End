import ScrollCards from "../components/Cards-Scroll";
import Navbar from "../components/Navbar-Abajo"
import Card from "../components/Carrousel"
export default function Landing() {
  return (   
  <div className="h-[500vh] bg-gradient-to-r from-[#0e0511] via-[#292d47] to-[#0e0511] overflow-hidden">
    <header>
      <Navbar/>
    </header>
    <main className="flex min-h-screem flex-col">
      <section className="w-[100vw] h-[100vh] flex justify-between items-center flex-col">
        <div>
          <img src="/mbn.png" alt="" className="h-[4.3vw] w-[5.5vw] m-2" />
        </div>
        <div>
          <p className="text-[6vw]">Money Beyond Numbers</p>
        </div>
        <div>
          
        </div>
      </section>
      <section className="w-[100vw] h-[20vw] my-[10vw] flex items-start">
        <Card/>
      </section>
      <ScrollCards  />
  
      <footer className="grid grid-cols-3 h-[70vh] gap-x-[5vw] gap-y-[3vh]">
        <div className="flex col-start-1 ml-4 border border-gray-600 rounded-md p-10">
              hola como andas
        </div>          
      </footer>
    </main>
  </div>
  );
}
