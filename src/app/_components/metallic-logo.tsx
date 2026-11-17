"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function MetallicLogo() {
  const logo = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [play, setPlay] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = logo.current;
    const probe = document.createElement("video");
    if (!element || !("IntersectionObserver" in window) || !probe.canPlayType('video/webm; codecs="vp9"')) return;
    if (/iPad|iPhone|iPod/i.test(navigator.userAgent) || /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    const update = () => {
      const shouldPlay = inView && !preference.matches;
      setPlay(shouldPlay);
      if (shouldPlay) setStarted(true);
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });
    observer.observe(element);
    preference.addEventListener("change", update);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const media = video.current;
    if (!media) return;
    if (!play) {
      media.pause();
      return;
    }

    let cancelled = false;
    media.play().catch((error: unknown) => {
      if (!cancelled && !(error instanceof DOMException && error.name === "AbortError")) {
        setFailed(true);
      }
    });
    return () => { cancelled = true; };
  }, [play, started]);

  return (
    <div ref={logo} className="home-feature-layout__metallic-logo" data-video-ready={ready && !failed} aria-hidden="true">
      <Image src="/eivis-metallic-logo.png" alt="" width={1080} height={1080} sizes="(max-width: 600px) 220px, (max-width: 1280px) 23vw, 300px" />
      {started && !failed && (
        <video
          ref={video}
          src="/eivis-metallic-logo.webm"
          muted
          loop
          playsInline
          onPlaying={() => setReady(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
