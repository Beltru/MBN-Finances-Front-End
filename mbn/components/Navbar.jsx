"use client";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 shadow-lg z-10">
      <div className="w-[100vw] flex items-center justify-between px-[4vw]">
        <div 
          className="text-gray-300 text-xl font-bold cursor-pointer"
          onClick={() => window.location.reload()}
        >
          MBN Finances
        </div>

        <div className="flex space-x-4">
          {['Dashboard', 'Ahorros', 'Gastos', 'etc'].map((item) => (
            <span
              key={item}
              className="text-gray-300 hover:text-white hover:bg-gray-600 px-2 rounded-lg duration-1000 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


