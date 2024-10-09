import Grafico from "../../components/Grafico"
import Resumen from "../../components/Resumen"
import Gastos from "../../components/Gastos"
import Navbar from "../../components/Navbar";


export default function Home() {
  return (
    <div className="pt-24 p-8 min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
      <nav>
        <Navbar/>
      </nav>
      <main className="grid grid-cols-12 gap-[8vw] w-[95vw] h-[80vh]">
        <aside className="col-span-3 space-y-4 flex justify-between flex-col bg-gray-800 rounded-lg p-4">
          <div className="space-y-2">
            
            <button className="block text-left p-2 hover:bg-gray-600 rounded-lg mb-2 duration-500">Dinero en cuenta</button>
            <button className="block text-left p-2 hover:bg-gray-600 rounded-lg mb-2 duration-500">Ahorros</button>
            <button className="block text-left p-2 hover:bg-gray-600 rounded-lg mb-2 duration-500">Gastos</button>
            <button className="block text-left p-2 hover:bg-gray-600 rounded-lg mb-2 duration-500">etc</button>
            </div>

          <div>
            <button className="block text-left p-2 hover:bg-gray-600 rounded-lg mb-2 duration-500">Help</button>
          </div>
        </aside>

        <section className="col-span-9 grid grid-cols-12 gap-x-[4vw] gap-y-[3vh]">


          {/* Caja de Dinero en Cuenta */}
          <div className="col-span-4 ml-[-6rem] p-4 bg-gray-800 rounded-lg">          
            <p className="text-lg">Dinero en cuenta:</p>
            <p className="text-3xl font-bold">142,749 $</p><br></br>
            <p className="text-lg">Dinero transferido:</p>
            <p className="text-3xl font-bold">42,798 $</p>
          </div>

          {/* Caja de Gastos */}
          <div className="col-span-8 p-4 border-spacing-1 color bg-gray-800 rounded-lg flex flex-col">
            <Gastos/>
          </div>
   

          {/* Caja de Resumen */}
          <div className="col-span-4 ml-[-6rem] p-4 bg-gray-800 rounded-lg">
            <Resumen
              mes={"Agosto"}
              progress1={50}
              progress2={70}
            />
          </div>
          
          
          {/* Caja de Gráfico */}
          <div className="col-span-7 ml-[-7rem] col-start-6 p-4 bg-gray-800 rounded-lg">
            <div className="flex justify-between">
              <div>
                <p className="text-xl font-bold -mt-2">$87,743</p>
                <p>Total assets</p>
              </div>
              <div>
                <p className="text-xl font-bold -mt-2">$78,342</p>
                <p>Total deposits</p>
              </div>
              <div>
                <p className="text-xl font-bold -mt-2">+12.3%</p>
                <p>APY</p>
              </div>
            </div>
            <div className="mt-2 relative">
              <div className="bg-gray-700 rounded mt-4">
                <Grafico/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

    
  );
  
}
