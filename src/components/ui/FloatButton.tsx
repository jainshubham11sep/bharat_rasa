"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FloatButton() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 640) {
        setVisible(window.scrollY > 49);
      } else {
        setVisible(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      className={`gg-float-btn${visible ? " show" : ""}`}
      aria-label="Book a Free Strategy Call"
      onClick={() => router.push("/contact")}
    >
      Contact Us
    </button>
  );
}
