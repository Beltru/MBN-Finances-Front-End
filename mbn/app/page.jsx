import ScrollCards from "../components/Cards-Scroll";
import Navbar from "../components/Navbar-Abajo"

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
          <p className="text-[6vw]">Money is Beyond Numbers</p>
        </div>
        <div>
          
        </div>
      </section>
      <section className="w-[100vw] h-[20vw] bg-gradient-to-r from-neutral-950 via-[#1f0613] to-neutral-950 shadow-2xl mb-[10vw]">

      </section>
      <ScrollCards  />
      {/* <section className="grid grid-rows-3 grid-cols-2 h-[100vh] w-[100vw] pl-[6vw] py-[8vh] pb-[16vh] gap-[16vw]">
        <aside className="row-span-3 col-span-1 bg-black rounded-2xl flex items-center justify-center">
          <video src="/graph.mp4" className="w-[50vw] h-[50vh]" autoPlay loop></video>
        </aside>
      </section> */}

      
    </main>
  </div>
  );
}
