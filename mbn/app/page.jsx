"use client"

import { useEffect, useState } from 'react';
import ScrollCards from "../components/Cards-Scroll";
import Navbar from "../components/Navbar-Abajo"
import Card from "../components/Carrousel"
import Link from "next/link"

export default function Landing() {
    const [isFooterVisible, setFooterVisible] = useState(false);
    const footerRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setFooterVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
  
      if (footerRef.current) observer.observe(footerRef.current);
  
      return () => {
        if (footerRef.current) observer.unobserve(footerRef.current);
      };
    }, []);

  return (   
      <div className="h-[532vh] bg-gradient-to-r from-[#0e0511] via-[#292d47] to-[#0e0511] overflow-hidden">
        <header>
          <Navbar isFooterVisible={isFooterVisible} />
        </header>
        <main className="flex min-h-screen flex-col">
          <section className="w-[100vw] h-[70vh] flex justify-between items-center flex-col mb-[10vw]">
            <div>
              <img src="/mbn.png" alt="" className="h-[4.3vw] w-[5.5vw] m-2" />
            </div>
            <div>
              <p className="text-[6vw] select-none">Money Beyond Numbers</p>
            </div>
          </section>
          <section className="w-[100vw] h-[20vw] my-[10vw] flex items-start">
            <Card />
          </section>
          <ScrollCards />
          <footer
            ref={footerRef}
            className="flex flex-row items-center justify-center w-full bg-neutral-900 h-[100vh] px-[4%] py-[10%]"
          >
            <div className="m-4 w-[45%] h-[75vh] rounded-md p-10">
              <div className="text-[4.3vw] text-[#c2c1c1]">The only</div>
              <div className="text-[4.3vw] text-[#c2c1c1] leading-[0.5] flex flex-row items-center justify-center">
                Way
                <p className="font-[100] text-[1.5rem] mx-4 text-neutral-500 w-[6vw]">
                  ――――
                </p>
                To bank
              </div>
              <div className="text-[4.3vw] ml-24 text-[#c2c1c1]">
                Your bitcoin
              </div>
              <div className="flex items-center justify-around mt-20 border border-gray-600 hover:border-gray-400 duration-300 h-[30%]">
                <p className="text-3xl">Start here</p>
                <Link href="./register">
                  <button className="px-6 py-4 border border-neutral-900 bg-neutral-800 rounded-full text-xl hover:bg-neutral-700 transition-all duration-300">
                    Create your account ➞
                  </button>
                </Link>
              </div>
            </div>
            <div className="m-4 border border-gray-600 w-[55%] h-[70vh] rounded-md p-10"></div>
          </footer>
        </main>
      </div>
    );
  }
