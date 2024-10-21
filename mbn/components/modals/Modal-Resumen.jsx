"use Client"

export default function Modal({ progress1, progress2, mes, isOpen, onClose}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50 ">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[40vw] h-[20vw] flex flex-col">
            <div className='flex flex-row items-center justify-between'>
                <h2 className="text-2xl mb-1">{mes}'s Financial Rundown</h2>
                <button onClick={onClose} className="px-3 py-[0.4rem] bg-gray-700 text-white rounded hover:bg-gray-600">
                    X
                </button>
            </div>
            <div className="">         
                <div className="my-6">
                    <p className="text-lg">Ingresos</p>
                    <div className="w-full bg-gray-700 rounded h-4">
                        <div
                        className="bg-pink-500 h-4 rounded"
                        style={{ width: `${progress1}%` }}
                        ></div>
                    </div>
                </div>
                <div className="my-6">
                    <p className="text-lg">Gastos</p>
                    <div className="w-full bg-gray-700 rounded h-4">
                        <div
                        className="bg-blue-500 h-4 rounded"
                        style={{ width: `${progress2}%` }}
                        ></div>
                    </div>
                </div>
            </div>   
        </div>
    </div>
  );
}
