"use client";

import { useEffect } from "react";

export default function PageFadeOut() {
  useEffect(() => {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent instant navigation
        const url = link.getAttribute("href");

        if (url && url !== window.location.pathname) {
          document.body.style.transition = "opacity 0.5s ease-in-out";
          document.body.style.opacity = "0";
          
          setTimeout(() => {
            window.location.href = url; // Navigate after fade-out
          }, 500); // Match duration to transition
        }
      });
    });

    return () => {
      links.forEach((link) => link.removeEventListener("click", () => {}));
    };
  }, []);

  return null; // No UI needed
}
