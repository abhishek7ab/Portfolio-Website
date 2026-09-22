import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import CurrentLearning from "@/components/sections/CurrentLearning";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import GitHubStats from "@/components/sections/GitHubStats";
import Blog from "@/components/sections/Blog";
import Certificates from "@/components/sections/Certificates";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <CurrentLearning />
      <Projects />
      <Experience />
      <Testimonials />
      <Suspense fallback={<div className="section-padding" />}>
        <GitHubStats />
      </Suspense>
      <Blog />
      <Certificates />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
