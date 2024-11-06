"use client";

import { AnimatePresence, motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export default function Landing() {
  const images = [
    "/image-1.jpg",
    "/image-2.jpg",
    "/image-3.jpg",
    "/image-4.jpg",
    "/image-5.jpg",
    "/image-6.jpg",
    "/image-7.jpg",
    "/image-8.jpg",
  ];
  
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;
  const [duration, setDuration] = useState(FAST_DURATION);
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => controls?.stop();
  }, [duration, mustFinish, rerender, width, xTranslation]);

  const Card = ({ image }) => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
      <motion.div
        className="relative overflow-hidden h-[300px] min-w-[300px] bg-slate-400 rounded-xl flex justify-center items-center"
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
      >
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
              <motion.h1
                className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
              >
                <span>Explore Now</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_707_6)">
                    <path d="M10.0294 20.0589C15.5161 20.0589 20.0589 15.5063 20.0589 10.0294C20.0589 4.54274 15.5063 0 10.0196 0C4.54274 0 0 4.54274 0 10.0294C0 15.5063 4.55257 20.0589 10.0294 20.0589ZM13.2054 12.5466C12.7531 12.5466 12.4581 12.2319 12.4581 11.7501V10.0098L12.6056 8.42668L11.1406 9.9901L7.43357 13.7069C7.27624 13.8544 7.08943 13.9429 6.84361 13.9429C6.40113 13.9429 6.09632 13.6479 6.09632 13.1857C6.09632 12.9891 6.19464 12.7826 6.34214 12.6351L10.0688 8.91832L11.6519 7.44341L10.1474 7.60073H8.31852C7.82688 7.60073 7.51224 7.30575 7.51224 6.86327C7.51224 6.41097 7.81705 6.11598 8.29886 6.11598H13.0972C13.6184 6.11598 13.9527 6.35196 13.9527 6.95177V11.7305C13.9527 12.2024 13.6479 12.5466 13.2054 12.5466Z" fill="black" fillOpacity="0.85"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_707_6">
                      <rect width="19.9903" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
        <Image src={image} alt="Descripción de la imagen" fill style={{ objectFit: "cover" }} />
      </motion.div>
    );
  };

  return (
        <section className=" overflow-hidden">
          <motion.div
            className="absolute left-0 flex gap-4"
            style={{ x: xTranslation }}
            ref={ref}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
          >
            {[...images, ...images].map((item, idx) => (
              <Card image={`${item}`} key={`${item}-${idx}`} />
            ))}
          </motion.div>
        </section>
  );
}
