"use client";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 shadow-lg z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="text-gray-300 text-xl font-bold cursor-pointer"
          onClick={() => window.location.reload()}
        >
          MBN Finances
        </div>

        <div className="relative">
          <input type="text" className="bg-gray-700 text-white rounded-lg px-3 py-2 pr-10 focus:outline-none" placeholder="Search..." />
          <span className="absolute inset-y-0 right-0 flex items-center pr-4">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
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


