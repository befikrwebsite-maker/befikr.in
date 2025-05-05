"use client";

import { createContext, useContext, useRef, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
    });

    lenisRef.current = lenis;
    setReady(true);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {ready ? children : null}
    </LenisContext.Provider>
  );
};
