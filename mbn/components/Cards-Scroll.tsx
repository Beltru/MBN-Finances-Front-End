"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    img: "iMac Pro Render.png",
    heading: "Earn",
    subtext: "Fund your account by raising capital or transferring funds from an external account."
  },
  {
    img: "/chatty-extension.png",
    heading: "Invest",
    subtext: "Use the funds to invest in opportunities and watch your balance grow."
  },
  {
    img: "/chatbot-github.png",
    heading: "Control your earnings",
    subtext: "Your investments have paid off, and your account is thriving."
  },
];

const ScrollCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sections = cardData.length;

    ScrollTrigger.create({
      trigger: cardRef.current,
      start: "center center",
      end: () => `+=${window.innerHeight * (sections - 1.3)}`,
      scrub: true,
      pin: cardRef.current,
      onUpdate: (self) => {
        const scrollIndex = Math.floor(self.progress * (sections - 0.5));
        setCurrentIndex(scrollIndex);
      },
    });

    ScrollTrigger.create({
      trigger: textRef.current,
      start: "center center",
      end: () => `+=${window.innerHeight * (sections - 1.3)}`, 
      scrub: true,
      pin: textRef.current,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="h-[250vh] flex items-start justify-center border-t-2 border-[#CCCCCC]">
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative flex flex-row items-end justify-center">
          <div
            ref={cardRef}
            className="w-[40vw] h-[45vh] p-8 bg-gray-600 bg-opacity-30 border border-opacity-30 border-gray-900 rounded-lg shadow-lg flex justify-center items-center"
          >
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                className="">
              
                <div className="w-[40vw] h-[40vh] flex justify-center items-center">
                  <img src={cardData[currentIndex].img} alt="" className='w-[30vw] max-h-[54vh]' />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            ref={textRef}
            className="mt-12 ml-12 w-[30vw] text-white"
          >
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                className=""
              >
                <h1 className="text-4xl font-bold mb-4">{cardData[currentIndex].heading}</h1>
                <p className="text-lg text-gray-400">{cardData[currentIndex].subtext}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollCard