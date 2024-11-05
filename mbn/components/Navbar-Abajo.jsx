"use client"

import Image from "next/image";
import React from 'react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeCard, setActiveCard] = useState(1);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition < 2000) {
          setActiveCard(1);
        } else if (scrollPosition >= 2000 && scrollPosition < 2700) {
          setActiveCard(2);
        } else if (scrollPosition >= 2700) {
          setActiveCard(3);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return(
    <nav className="flex justify-between flex-row items-center fixed bottom-[5vh] mx-[20vw] bg-[rgb(26,26,26,0.8)] w-[55vw] rounded-xl px-4 py-1 z-50">
        <div className="flex flex-row items-center">
          <div>
            <Image
              src={"/mbn.png"}
              alt=""
              width={55}
              height={55}
            />
          </div>
          <div className="divider">
            <hr className="line mx-2 mr-2"/>
          </div>
          <ul className="flex flex-row">
            <li className={`p-2 rounded-lg flex items-center justify-center hover:bg-[#303030] transition-all duration-500 cursor-pointer mx-1 ${activeCard === 1 ? "bg-[#303030]" : ""}`}>
              <Image 
                src={"/bank.svg"}
                alt=""
                width={18}
                height={18}
              />
            </li>
            <li className={`p-2 rounded-lg flex items-center justify-center hover:bg-[#303030] transition-all duration-500 cursor-pointer mx-1 ${activeCard === 2 ? "bg-[#303030]" : ""}`}>
              <Image 
                src={"/graph-up.svg"}
                alt=""
                width={18}
                height={18}
              />
            </li>
            <li className={`p-2 rounded-lg flex items-center justify-center hover:bg-[#303030] transition-all duration-500 cursor-pointer mx-1 ${activeCard === 3 ? "bg-[#303030]" : ""}`}>
              <Image 
                src={"/wallet2.svg"}
                alt=""
                width={18}
                height={18}
              />
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center">
          <ul className="flex flex-row">
            <li className="px-2 py-1 rounded-lg flex items-center justify-center hover:hover:bg-[#303030] duration-500 cursor-pointer mr-4 text-[0.95rem]">
              Team
            </li>
            <li className="px-2 py-1 rounded-lg flex items-center justify-center hover:hover:bg-[#303030] duration-500 cursor-pointer mr-4 text-[0.95rem]">
              Support
            </li>
            <a href="http://localhost:3000/login" className="px-2 py-1 rounded-lg flex items-center justify-center hover:hover:bg-[#303030] duration-500 cursor-pointer mr-4 text-[0.95rem]">
              Login
            </a>
            <a href="http://localhost:3000/register" className=" px-3 py-1 rounded-lg flex items-center justify-center bg-red-600 hover:hover:bg-red-700 duration-500 cursor-pointer mr-2 text-[0.95rem]">
              Sign Up
            </a> 
          </ul>
        </div>
      </nav>
    )
}

export default Navbar