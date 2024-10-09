"use client"

import { transform } from 'next/dist/build/swc';
import React from 'react';
import { useState, useEffect } from 'react';

const ScrollCards = () => {
  const [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition < 300) {
        setActiveCard(1);
      } else if (scrollPosition >= 300 && scrollPosition < 800) {
        setActiveCard(2);
      } else if (scrollPosition >= 800) {
        setActiveCard(3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
     <section className='relative h-[100vh] overflow-hidden'>
         <div className={`${activeCard === 1 || 2 || 3 ? "fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-500 grid grid-rows-3 grid-cols-2 h-[100vh] w-[100vw] pl-[6vw] py-[8vh] pb-[16vh] gap-y-[4vw] gap-x-[8vw]" : 'hidden'}`}>
             <aside className={`row-span-3 col-span-1  rounded-2xl flex items-center justify-center transition-all duration-500 ${activeCard === 2 ? "bg-black" : "bg-white" }`}>
                
             </aside>
             <div className='col-start-2 row-start-3 transition-all duration-300 w-[16vw]'>
               <h1 className='text-[3vw]'>
                  {
                    activeCard === 1 ? 
                      "Earn" : 
                    activeCard === 2 ? 
                      "Spend" : 
                    activeCard === 3 ? 
                      "Raise" : ""
                  }
                </h1>
               <p className='text-lg'>
                  {
                    activeCard === 1 ? 
                      "Fund your account by raising on Capital or transferring funds from an existing external account" : 
                    activeCard === 2 ? 
                      "Activate a virtual debit card with just a tap to spend your funds anywhere" : 
                    activeCard === 3 ? 
                      "Automate the entire fundraising process from open to close" : ""
                  }
                </p>
             </div>
         </div>
     </section>
  );
};

export default ScrollCards;