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
