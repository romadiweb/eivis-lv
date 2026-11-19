"use client";

import Image, { type ImageProps } from "next/image";
import { Maximize2, X } from "lucide-react";
import { type ReactNode, useRef } from "react";
import "./image-lightbox.css";

type ImageLightboxProps = {
  src: ImageProps["src"];
  alt: string;
  children: ReactNode;
};

export function ImageLightbox({ src, alt, children }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openViewer() {
    dialogRef.current?.showModal();
  }

  function closeViewer() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        className="image-lightbox__trigger"
        type="button"
        aria-label={`Atvērt pilnekrāna attēlu: ${alt}`}
        onClick={openViewer}
      >
        {children}
        <span className="image-lightbox__expand" aria-hidden="true"><Maximize2 /></span>
      </button>

      <dialog
        ref={dialogRef}
        className="image-lightbox__dialog"
        aria-label={alt}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeViewer();
        }}
      >
        <div className="image-lightbox__frame">
          <Image className="image-lightbox__image" src={src} alt={alt} sizes="100vw" />
          <button className="image-lightbox__close" type="button" aria-label="Aizvērt attēlu" onClick={closeViewer}>
            <X aria-hidden="true" />
          </button>
        </div>
      </dialog>
    </>
  );
}
