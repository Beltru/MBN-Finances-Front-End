"use client";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 shadow-lg z-10">
      <div className="w-[100vw] flex items-center justify-between px-[4vw]">
        <div  className="text-gray-300 text-xl font-bold cursor-pointer" onClick={() => window.location.reload()}>
          MBN Finances
        </div>

        <div className="flex space-x-4">
            <ul className="flex flex-row justify-around w-[21vw] items-center">
              <li>Bienvenido Beltran Cid</li>
              <li><img src="/profile-photo.jpg" alt="" className="rounded-full"/></li>
              <li><a href="http://localhost:3000/settings"><img src="settings.png" className="w-[1.5vw] hover:cursor-pointer"/></a></li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


