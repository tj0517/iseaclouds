"use client";

import { useEffect, useState } from "react";
import ClientNews from "./ClientNews";
import { Article } from "../types/article";

export default function ClientNewsWrapper({ articles }: { articles: Article[] }) {
  const [i, setI] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setI(0);
      } else {
        setI(1);
      }
    }

    // wywołanie na starcie
    handleResize();

    // słuchacz zmiany rozmiaru
    window.addEventListener("resize", handleResize);

    // czyszczenie przy unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <ClientNews i={i} articles={articles} />;
}
