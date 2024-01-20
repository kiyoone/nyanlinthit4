'use client'
import HomePage from "./home/page";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <HomePage />
    </main>
  )
}
