import ScrollCards from "../components/Cards-Scroll";
import Navbar from "../components/Navbar-Abajo"

export default function Landing() {

  return (   
  <div className="h-[300vh] bg-gradient-to-r from-[#0f0015] via-[#080c2c] to-black overflow-hidden">
    <header>
      <Navbar/>
    </header>
    <main className="mt-[70vh] flex min-h-screem flex-col p-6">
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
