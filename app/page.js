import Image from "next/image";
import HeroSection from "../component/HeroSection/page";
import Navbar from "../component/Navbar";
import About from "./AboutSection/page";
import ProjectSection from "./projectSection/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <ProjectSection />
    </>
  );
}
