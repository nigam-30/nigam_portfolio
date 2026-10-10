"use client";

import { useEffect } from "react";

export default function ScrollToTopOnRefresh() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Tell browser not to restore previous scroll position on reload
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Remove hash if present so browser doesn't anchor-jump on reload
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    // 3. Force scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    // 4. Fallback for browsers that delay initial paint layout calculations
    const rafId = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    // 5. Ensure scrollRestoration stays manual before unload
    const handleBeforeUnload = () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
}
