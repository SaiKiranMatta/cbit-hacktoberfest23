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
    <section className="scroll-section-outer relative">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}

      <div ref={triggerRef}>
        <div className=" top-24 absolute w-full">
          <h1 className=" w-min mx-auto shimmer text-4xl">Timeline</h1>
        </div>
        <svg
          className=" top-40 absolute mx-auto px-8 w-full"
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
        <div ref={sectionRef} className="scroll-section-inner relative">
          <div className=" flex md:flex-row flex-col  mt-60">
            <div className="scroll-section    mx-4 mb-6 w-[50vmin]">
              <div className="  text-bgold-200 md:h-60 h-40 md:px-8 md:py-4 px-4 py-2 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full text-xl ">
                <h1 className=" md:text-2xl text-sm  tracking-tighter ">
                  27th September
                  <span className=" hidden md:inline">, 2023</span>
                </h1>
                <div className="flex flex-col items-start">
                  <span className=" md:text-xl text-sm text-bblue-200">
                    Registrations Begin
                  </span>
                  <Link href="/register">
                    <button className=" md:px-6 md:py-3 px-3 py-1 bg-none hover:bg-Manga-100 hover:bg-opacity-10 duration-300 my-2  text-bgold-200 border border-bgold-200 rounded-lg md:text-xl mt-3">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="scroll-section mx-4 w-[50vmin] ">
              <div className="  text-bgold-200 md:h-60 h-40 md:px-8 mb-6 md:py-4 px-4 py-2 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full text-xl ">
                <div className=" tracking-tighter md:text-2xl text-sm">
                  <h1>
                    4th October
                    <span className=" hidden md:inline">, 2023</span>
                  </h1>
                  <h1>11:59 PM</h1>
                </div>
                <div className=" flex flex-col items-start">
                  <span className="  md:text-xl  pb-3 text-bblue-200">
                    Registrations End
                  </span>
                  <p className=" text-sm"></p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex md:flex-row flex-col mt-60">
            <div className="scroll-section mx-4 w-[50vmin] ">
              <div className="  text-bgold-200 md:h-60 h-40  md:px-8 md:py-4 px-4 py-2 mb-6 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full text-xl ">
                <div className=" tracking-tighter md:text-2xl text-sm">
                  <h1>
                    6th October
                    <span className=" hidden md:inline">, 2023</span>
                  </h1>
                  <h1>7:00 PM</h1>
                </div>
                <div className=" flex flex-col items-start">
                  <span className=" md:text-xl pb-3 text-bblue-200">
                    Introductory Session
                  </span>
                  <p className=" text-sm text-bgold-300 md:inline hidden ">
                    A short introductory session on GitHub and Discord.
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-section mx-4 w-[50vmin] ">
              <div className="  text-bgold-200 md:h-60 h-40 md:px-8 md:py-4 px-4 py-2 mb-6 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full text-xl ">
                <div className=" tracking-tighter md:text-2xl text-sm">
                  <h1>
                    7th October
                    <span className=" hidden md:inline">, 2023</span>
                  </h1>
                  <h1>4:00 PM</h1>
                </div>
                <div className=" flex flex-col items-start">
                  <span className=" md:text-xl pb-3 text-bblue-200">
                    Opening Ceremony
                  </span>
                  <p className=" text-sm text-bgold-300 md:inline hidden">
                    The inauguration of the 10th installation of the CBIT
                    Hacktoberfest Hackathon will be set underway
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex md:flex-row flex-col justify-center mt-60">
            <div className="scroll-section mx-4 w-[50vmin] ">
              <div className="  text-bgold-200 md:h-60 h-40 md:px-8 md:py-4 px-4 py-2 mb-6 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full text-xl ">
                <div className=" tracking-tighter md:text-2xl text-sm">
                  <h1>
                    7th October
                    <span className=" hidden md:inline">, 2023</span>
                  </h1>
                  <h1>6:00 PM</h1>
                </div>
                <div className=" flex flex-col items-start">
                  <span className=" md:text-xl pb-3 text-bblue-200">
                    Releasing Problem Statements
                  </span>
                  <p className=" text-sm text-bgold-300 md:inline hidden">
                    The problem statements will be made public
                  </p>
                </div>
              </div>
            </div>
            <div className="scroll-section mx-4 w-[50vmin] ">
              <div className="  text-bgold-200 md:h-60 h-40 md:px-8 md:py-4 px-4 py-2 mb-6 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full text-xl ">
                <div className=" tracking-tighter md:text-2xl text-sm">
                  <h1>
                    7th October
                    <span className=" hidden md:inline">, 2023</span>
                  </h1>
                  <h1>6:30 PM</h1>
                </div>
                <div className=" flex flex-col items-start">
                  <span className=" md:text-xl pb-3 text-bblue-200">
                    Selection of problem statements
                  </span>
                  <p className=" text-sm text-bgold-300 md:inline hidden">
                    Teams will be given until 6:45 PM to fill out their choices
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex md:flex-row flex-col justify-center mt-60">
            <div className="scroll-section mx-4 w-[50vmin] ">
              <div className="  text-bgold-200 md:h-60 h-40 md:px-8 md:py-4 px-4 py-2 mb-6 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full text-xl ">
                <div className=" tracking-tighter md:text-2xl text-sm">
                  <h1>
                    7th October
                    <span className=" hidden md:inline">, 2023</span>
                  </h1>
                  <h1>7:00 PM</h1>
                </div>
                <div className=" flex flex-col items-start">
                  <span className=" md:text-xl pb-3 text-bblue-200">
                    Coding begins!
                  </span>
                  <p className=" text-sm text-bgold-300 md:inline hidden">
                    The contestants now set sail and begin their voyage towards
                    success.
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-section mx-4 w-[50vmin] ">
              <div className="  text-bgold-200 md:h-60 h-40 md:px-8 md:py-4 px-4 py-2 mb-6 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full text-xl ">
                <div className=" tracking-tighter md:text-2xl text-sm">
                  <h1>
                    8th October
                    <span className=" hidden md:inline">, 2023</span>
                  </h1>
                  <h1>2:00 AM & 9:00 AM</h1>
                </div>
                <div className=" flex flex-col items-start">
                  <span className=" md:text-xl pb-3 text-bblue-200">
                    Ice Breaker Sessions
                  </span>
                  <p className=" text-sm text-bgold-300 md:inline hidden">
                    Help melt the awkwardness and forge connections.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex md:flex-row flex-col justify-center mt-60">
            <div className="scroll-section mx-4 w-[50vmin] ">
              <div className="  text-bgold-200 md:h-60 h-40 md:px-8 md:py-4 px-4 py-2 mb-6 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full text-xl ">
                <div className=" tracking-tighter md:text-2xl text-lg">
                  <h1>
                    8th October
                    <span className=" hidden md:inline">, 2023</span>
                  </h1>
                  <h1>2:00 PM</h1>
                </div>
                <div className=" flex flex-col items-start">
                  <span className=" md:text-xl pb-3 text-bblue-200">
                    Coding Ends
                  </span>
                  <p className=" text-sm text-bgold-300 md:inline hidden ">
                    The time for the contestants to finish up has finally come.
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-section mx-4 w-[50vmin] ">
              <div className="  text-bgold-200 md:h-60 h-40 md:px-8 md:py-4 px-4 py-2 mb-6 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full text-xl ">
                <div className=" tracking-tighter md:text-2xl text-sm">
                  <h1>
                    8th October
                    <span className=" hidden md:inline">, 2023</span>
                  </h1>
                  <h1>2:30 PM</h1>
                </div>
                <div className=" flex flex-col items-start">
                  <span className=" md:text-xl pb-3 text-bblue-200">
                    Submissions Close
                  </span>
                  <p className=" text-sm text-bgold-300 md:inline hidden ">
                    Contestants must push their codes to GitHub before the
                    deadline and delays will not be accepted
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex md:flex-row flex-col justify-center mt-60">
            <div className="scroll-section mx-4 w-[50vmin] ">
              <div className="  text-bgold-200 md:h-60 h-40 md:px-8 md:py-4 px-4 py-2 mb-6 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full text-xl ">
                <div className=" tracking-tighter md:text-2xl text-sm">
                  <h1>
                    8th October
                    <span className=" hidden md:inline">, 2023</span>
                  </h1>
                  <h1>3:00 PM</h1>
                </div>
                <div className=" flex flex-col items-start">
                  <span className=" md:text-xl pb-3 text-bblue-200">
                    Presentations
                  </span>
                  <p className=" text-sm text-bgold-300 md:inline hidden ">
                    Pitching a solution to a panel of judges often acts as the
                    deciding factor to ensuring victory!
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-section mx-4 w-[50vmin] ">
              <div className="  text-bgold-200 md:h-60 h-40 md:px-8 md:py-4 px-4 py-2 mb-6 border-2 border-bgold-200 rounded-xl flex flex-col justify-between w-full text-xl ">
                <div className=" tracking-tighter md:text-2xl text-sm">
                  <h1>
                    8th October
                    <span className=" hidden md:inline text-xl">, 2023</span>
                  </h1>
                  <h1>7:30 PM</h1>
                </div>
                <div className=" flex flex-col items-start">
                  <span className=" md:text-xl pb-3 text-bblue-200">
                    Closing Ceremony
                  </span>
                  <p className=" text-sm text-bgold-300 md:inline hidden  ">
                    It’s time for closing remarks and to finally announce the
                    much awaited winners!
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
