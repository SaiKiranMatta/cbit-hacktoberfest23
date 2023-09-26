"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";

import Hero from "@/components/Hero";
import Mentors from "@/components/Mentors";
import Sponsors from "@/components/Sponsors";
import TimelineMain from "@/components/TimelineCon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className=" spacer layer1">
        <section id="home" className="  section">
          <Hero />
        </section>
        <section
          id="about"
          className=" section justify-between w-full md:mt-6 pt-10 h-100"
        >
          <About />
        </section>
      </div>

      {/* <div className="spacer layer2"></div> */}
      <section id="schedule" className=" spacer layer2 w-full section relative">
        <TimelineMain />
      </section>

      <div className=" spacer layer5 flex flex-col justify-center w-full mb-12">
        <section id="mentors" className=" section pt-16">
          <Mentors />
        </section>
        {/* <Sponsors /> */}
        <section id="contact" className=" section w-full pt-28">
          <Contact />
        </section>
      </div>
    </main>
  );
}
