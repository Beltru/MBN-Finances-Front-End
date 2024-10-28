"use client";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 shadow-lg z-10">
      <div className="w-[100vw] flex items-center justify-between px-[4vw]">
        <a href="http://localhost:3000/home"  className="text-gray-300 text-xl font-bold cursor-pointer" >
          MBN Finances
        </a>

        <div className="flex space-x-4">
            <ul className="flex flex-row justify-evenly w-[21vw] items-center">
              <li>Beltran Cid</li>
              <li><img src="/profile-photo.jpg" alt="" className="rounded-full"/></li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;