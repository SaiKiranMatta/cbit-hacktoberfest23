"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";

import Hero from "@/components/Hero";
import Mentors from "@/components/Mentors";
import Sponsors from "@/components/Sponsors";
import TimelineMain from "@/components/TimelineCon";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen ">
            <div className=" spacer layer1">
                <section id="home" className=" section">
                    <Hero />
                </section>
                <section
                    id="about"
                    className="justify-between w-full pt-10  section md:mt-6 h-100"
                >
                    <About />
                </section>
            </div>

            {/* <div className="spacer layer2"></div> */}
            <section
                id="schedule"
                className="relative w-full  spacer layer2 section"
            >
                <TimelineMain />
            </section>

            <div className="flex flex-col justify-center w-full mb-12  spacer layer5">
                <section id="mentors" className="pt-16  section">
                    <Mentors />
                </section>
                <section id="sponsors" className="pt-16 section">
                    <Sponsors />
                </section>
                <section id="contact" className="w-full  section pt-28">
                    <Contact />
                </section>
            </div>
        </main>
    );
}
