"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import arrow from "../../../public/scroll-to-top-arrow.png";
import "./scroll-to-top.css";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY >= 480);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      className="scroll-to-top"
      data-visible={visible}
      inert={!visible}
      type="button"
      aria-label="Atgriezties lapas sākumā"
      onClick={() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
      }}
    >
      <Image src={arrow} alt="" width={48} height={48} />
    </button>
  );
}
