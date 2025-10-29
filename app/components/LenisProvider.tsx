"use client";
import { createContext, useContext, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Provide the Lenis ref via context so other components can access the instance
const LenisContext = createContext<React.MutableRefObject<any> | null>(null);

export function useLenis() {
  const ref = useContext(LenisContext);
  return ref?.current ?? null;
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);
  const rafRef = useRef<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let mounted = true;

    (async () => {
      const Lenis = (await import("lenis")).default;
      if (!mounted) return;

      // tuned options for a stronger, smoother feel
      lenisRef.current = new Lenis({
        duration: 2.4, // longer duration = slower, smoother easing
        // stronger easing curve for a more 'weighty' feel
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        // wheel multiplier to make wheel/trackpad scroll feel more pronounced
        wheelMultiplier: 1.2,
        // lerp controls smoothing interpolation; lower = more smoothing
        lerp: 0.08,
      } as any);

      const loop = (time: number) => {
        lenisRef.current?.raf(time);
        rafRef.current = requestAnimationFrame(loop);
      };

      rafRef.current = requestAnimationFrame(loop);
    })();

    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current?.destroy) lenisRef.current.destroy();
    };
  }, []);

  // scroll to top on route change using lenis if available
  useEffect(() => {
    if (lenisRef.current && typeof lenisRef.current.scrollTo === "function") {
      lenisRef.current.scrollTo(0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
}

