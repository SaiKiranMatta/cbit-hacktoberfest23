"use client";

import React, { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

function ScrollSection() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const isMdScreen = window.matchMedia("(max-width: 768px)").matches; // Adjust the breakpoint as per your Tailwind CSS configuration
        const translateXValue = isMdScreen ? "-275vmin" : "-460vmin";
        const translateXvalStart = isMdScreen ? "8vmin" : "25vmin";
        const end = isMdScreen ? "2500 top" : "4000 top";
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: translateXvalStart,
            },
            {
                translateX: translateXValue,
                ease: "none",
                duration: 1.2,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: end,
                    scrub: 1,
                    pin: true,
                },
            }
        );

        const mask = document.querySelector("#recfill");

        gsap.to(mask, {
            width: "998",
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top left",
                end: end,
                scrub: 1,
            },
        });

        return () => {
            {
                /* A return function for killing the animation on component unmount */
            }
            pin.kill();
        };
    }, []);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time) {
            lenis.raf(time);
            ScrollTrigger.update();
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);
    return (
        <section className="relative scroll-section-outer">
            {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

            {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}

            <div ref={triggerRef}>
                <div className="absolute w-full  top-24">
                    <h1 className="mx-auto text-4xl  w-min shimmer">
                        Timeline
                    </h1>
                </div>
                <svg
                    className="absolute w-full px-8 mx-auto  top-40"
                    width="1004"
                    height="11"
                    viewBox="0 0 1004 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="1"
                        y="1"
                        width="1000"
                        height="9"
                        rx="4.5"
                        stroke="#D2B863"
                        strokeWidth="2"
                    />
                    <rect
                        id="recfill"
                        x="2"
                        y="2"
                        width="10"
                        height="7"
                        rx="3.5"
                        fill="#33B6D8"
                    />
                </svg>
                <div ref={sectionRef} className="relative scroll-section-inner">
                    <div className="flex flex-col  md:flex-row mt-60">
                        <div className="scroll-section    mx-4 mb-6 w-[50vmin]">
                            <div className="flex flex-col justify-between w-full h-40 px-4 py-2 text-xl border-2  text-bgold-200 md:h-60 md:px-8 md:py-4 border-bgold-200 rounded-xl">
                                <h1 className="text-sm tracking-tighter  md:text-2xl">
                                    27th September
                                    <span className="hidden  md:inline">
                                        , 2023
                                    </span>
                                </h1>
                                <div className="flex flex-col items-start">
                                    <span className="text-sm  md:text-xl text-bblue-200">
                                        Registrations Begin
                                    </span>
                                    {/* <Link href="/register">
                    <button className="px-3 py-1 my-2 mt-3 duration-300 border rounded-lg  md:px-6 md:py-3 bg-none hover:bg-Manga-100 hover:bg-opacity-10 text-bgold-200 border-bgold-200 md:text-xl">
                      Register
                    </button>
                  </Link> */}
                                </div>
                            </div>
                        </div>

                        <div className="scroll-section mx-4 w-[50vmin] ">
                            <div className="flex flex-col justify-between w-full h-40 px-4 py-2 mb-6 text-xl border-2  text-bgold-200 md:h-60 md:px-8 md:py-4 border-bgold-200 rounded-xl">
                                <div className="text-sm tracking-tighter  md:text-2xl">
                                    <h1>
                                        4th October
                                        <span className="hidden  md:inline">
                                            , 2023
                                        </span>
                                    </h1>
                                    <h1>11:59 PM</h1>
                                </div>
                                <div className="flex flex-col items-start ">
                                    <span className="pb-3  md:text-xl text-bblue-200">
                                        Registrations End
                                    </span>
                                    <p className="text-sm "></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col  md:flex-row mt-60">
                        <div className="scroll-section mx-4 w-[50vmin] ">
                            <div className="flex flex-col justify-between w-full h-40 px-4 py-2 mb-6 text-xl border-2  text-bgold-200 md:h-60 md:px-8 md:py-4 border-bgold-200 rounded-xl">
                                <div className="text-sm tracking-tighter  md:text-2xl">
                                    <h1>
                                        6th October
                                        <span className="hidden  md:inline">
                                            , 2023
                                        </span>
                                    </h1>
                                    <h1>7:00 PM</h1>
                                </div>
                                <div className="flex flex-col items-start ">
                                    <span className="pb-3  md:text-xl text-bblue-200">
                                        Introductory Session
                                    </span>
                                    <p className="hidden text-sm  text-bgold-300 md:inline">
                                        A short introductory session on GitHub
                                        and Discord.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="scroll-section mx-4 w-[50vmin] ">
                            <div className="flex flex-col justify-between w-full h-40 px-4 py-2 mb-6 text-xl border-2  text-bgold-200 md:h-60 md:px-8 md:py-4 border-bgold-200 rounded-xl">
                                <div className="text-sm tracking-tighter  md:text-2xl">
                                    <h1>
                                        7th October
                                        <span className="hidden  md:inline">
                                            , 2023
                                        </span>
                                    </h1>
                                    <h1>4:00 PM</h1>
                                </div>
                                <div className="flex flex-col items-start ">
                                    <span className="pb-3  md:text-xl text-bblue-200">
                                        Opening Ceremony
                                    </span>
                                    <p className="hidden text-sm  text-bgold-300 md:inline">
                                        The inauguration of the 10th
                                        installation of the CBIT Hacktoberfest
                                        Hackathon will be set underway
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center  md:flex-row mt-60">
                        <div className="scroll-section mx-4 w-[50vmin] ">
                            <div className="flex flex-col justify-between w-full h-40 px-4 py-2 mb-6 text-xl border-2  text-bgold-200 md:h-60 md:px-8 md:py-4 border-bgold-200 rounded-xl">
                                <div className="text-sm tracking-tighter  md:text-2xl">
                                    <h1>
                                        7th October
                                        <span className="hidden  md:inline">
                                            , 2023
                                        </span>
                                    </h1>
                                    <h1>6:00 PM</h1>
                                </div>
                                <div className="flex flex-col items-start ">
                                    <span className="pb-3  md:text-xl text-bblue-200">
                                        Releasing Problem Statements
                                    </span>
                                    <p className="hidden text-sm  text-bgold-300 md:inline">
                                        The problem statements will be made
                                        public
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-section mx-4 w-[50vmin] ">
                            <div className="flex flex-col justify-between w-full h-40 px-4 py-2 mb-6 text-xl border-2  text-bgold-200 md:h-60 md:px-8 md:py-4 border-bgold-200 rounded-xl">
                                <div className="text-sm tracking-tighter  md:text-2xl">
                                    <h1>
                                        7th October
                                        <span className="hidden  md:inline">
                                            , 2023
                                        </span>
                                    </h1>
                                    <h1>6:30 PM</h1>
                                </div>
                                <div className="flex flex-col items-start ">
                                    <span className="pb-3  md:text-xl text-bblue-200">
                                        Selection of problem statements
                                    </span>
                                    <p className="hidden text-sm  text-bgold-300 md:inline">
                                        Teams will be given until 6:45 PM to
                                        fill out their choices
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center  md:flex-row mt-60">
                        <div className="scroll-section mx-4 w-[50vmin] ">
                            <div className="flex flex-col justify-between w-full h-40 px-4 py-2 mb-6 text-xl border-2  text-bgold-200 md:h-60 md:px-8 md:py-4 border-bgold-200 rounded-xl">
                                <div className="text-sm tracking-tighter  md:text-2xl">
                                    <h1>
                                        7th October
                                        <span className="hidden  md:inline">
                                            , 2023
                                        </span>
                                    </h1>
                                    <h1>7:00 PM</h1>
                                </div>
                                <div className="flex flex-col items-start ">
                                    <span className="pb-3  md:text-xl text-bblue-200">
                                        Coding begins!
                                    </span>
                                    <p className="hidden text-sm  text-bgold-300 md:inline">
                                        The contestants now set sail and begin
                                        their voyage towards success.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="scroll-section mx-4 w-[50vmin] ">
                            <div className="flex flex-col justify-between w-full h-40 px-4 py-2 mb-6 text-xl border-2  text-bgold-200 md:h-60 md:px-8 md:py-4 border-bgold-200 rounded-xl">
                                <div className="text-sm tracking-tighter  md:text-2xl">
                                    <h1>
                                        8th October
                                        <span className="hidden  md:inline">
                                            , 2023
                                        </span>
                                    </h1>
                                    <h1>2:00 AM & 9:00 AM</h1>
                                </div>
                                <div className="flex flex-col items-start ">
                                    <span className="pb-3  md:text-xl text-bblue-200">
                                        Ice Breaker Sessions
                                    </span>
                                    <p className="hidden text-sm  text-bgold-300 md:inline">
                                        Help melt the awkwardness and forge
                                        connections.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center  md:flex-row mt-60">
                        <div className="scroll-section mx-4 w-[50vmin] ">
                            <div className="flex flex-col justify-between w-full h-40 px-4 py-2 mb-6 text-xl border-2  text-bgold-200 md:h-60 md:px-8 md:py-4 border-bgold-200 rounded-xl">
                                <div className="text-lg tracking-tighter  md:text-2xl">
                                    <h1>
                                        8th October
                                        <span className="hidden  md:inline">
                                            , 2023
                                        </span>
                                    </h1>
                                    <h1>2:00 PM</h1>
                                </div>
                                <div className="flex flex-col items-start ">
                                    <span className="pb-3  md:text-xl text-bblue-200">
                                        Coding Ends
                                    </span>
                                    <p className="hidden text-sm  text-bgold-300 md:inline">
                                        The time for the contestants to finish
                                        up has finally come.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="scroll-section mx-4 w-[50vmin] ">
                            <div className="flex flex-col justify-between w-full h-40 px-4 py-2 mb-6 text-xl border-2  text-bgold-200 md:h-60 md:px-8 md:py-4 border-bgold-200 rounded-xl">
                                <div className="text-sm tracking-tighter  md:text-2xl">
                                    <h1>
                                        8th October
                                        <span className="hidden  md:inline">
                                            , 2023
                                        </span>
                                    </h1>
                                    <h1>2:30 PM</h1>
                                </div>
                                <div className="flex flex-col items-start ">
                                    <span className="pb-3  md:text-xl text-bblue-200">
                                        Submissions Close
                                    </span>
                                    <p className="hidden text-sm  text-bgold-300 md:inline">
                                        Contestants must push their codes to
                                        GitHub before the deadline and delays
                                        will not be accepted
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center  md:flex-row mt-60">
                        <div className="scroll-section mx-4 w-[50vmin] ">
                            <div className="flex flex-col justify-between w-full h-40 px-4 py-2 mb-6 text-xl border-2  text-bgold-200 md:h-60 md:px-8 md:py-4 border-bgold-200 rounded-xl">
                                <div className="text-sm tracking-tighter  md:text-2xl">
                                    <h1>
                                        8th October
                                        <span className="hidden  md:inline">
                                            , 2023
                                        </span>
                                    </h1>
                                    <h1>3:00 PM</h1>
                                </div>
                                <div className="flex flex-col items-start ">
                                    <span className="pb-3  md:text-xl text-bblue-200">
                                        Presentations
                                    </span>
                                    <p className="hidden text-sm  text-bgold-300 md:inline">
                                        Pitching a solution to a panel of judges
                                        often acts as the deciding factor to
                                        ensuring victory!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="scroll-section mx-4 w-[50vmin] ">
                            <div className="flex flex-col justify-between w-full h-40 px-4 py-2 mb-6 text-xl border-2  text-bgold-200 md:h-60 md:px-8 md:py-4 border-bgold-200 rounded-xl">
                                <div className="text-sm tracking-tighter  md:text-2xl">
                                    <h1>
                                        8th October
                                        <span className="hidden text-xl  md:inline">
                                            , 2023
                                        </span>
                                    </h1>
                                    <h1>7:30 PM</h1>
                                </div>
                                <div className="flex flex-col items-start ">
                                    <span className="pb-3  md:text-xl text-bblue-200">
                                        Closing Ceremony
                                    </span>
                                    <p className="hidden text-sm  text-bgold-300 md:inline">
                                        It’s time for closing remarks and to
                                        finally announce the much awaited
                                        winners!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScrollSection;
