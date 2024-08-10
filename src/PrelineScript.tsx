"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

interface PrelineScriptProps {
  children: React.ReactNode;
}

const PrelineScript: React.FC<PrelineScriptProps> = ({ children }) => {
  const path = usePathname();

  useEffect(() => {
    let isMounted = true;

    const loadPreline = async () => {
      try {
        // Dynamically import Preline
        await import("preline/preline");

        // Check if window.HSStaticMethods is available before calling autoInit
        if (isMounted && window.HSStaticMethods) {
          window.HSStaticMethods.autoInit();
        }
      } catch (error) {
        // console.error("Failed to load Preline:", error);
      }
    };

    loadPreline();

    // Cleanup function to avoid memory leaks
    return () => {
      isMounted = false;
    };
  }, [path]);

  return <>{children}</>;
};

export default PrelineScript;
