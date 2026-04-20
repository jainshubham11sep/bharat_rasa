"use client";

import { useEffect, useRef } from "react";
import QuoteForm from "./QuoteForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: string;
}

export default function ContactModal({ isOpen, onClose, service }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="gg-mask"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a Call"
    >
      <div className="gg-modal" ref={modalRef}>
        <button className="gg-close" aria-label="Close modal" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
        <div className="gg-modal-inner">
          <QuoteForm service={service} />
        </div>
      </div>
    </div>
  );
}
