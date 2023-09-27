"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";

// import "./sectionMAnimation.css"; // Import your CSS file?

gsap.registerPlugin(ScrollTrigger);

const TimelineMobile = () => {
  const triggerRef = useRef(null);

  const sectionMs = useRef(null);
  useEffect(() => {
    // Select all elements with the class "sectionM"
    const sectionMs = document.querySelectorAll(".sectionM");

    sectionMs.forEach((sectionM) => {
      gsap.fromTo(
        sectionM,
        {
          translateX: "-100%", // Starting state (initial position)
          opacity: 0, // Starting state (initial opacity)
        },
        {
          translateX: 0, // Ending state (final position)
          opacity: 1, // Ending state (final opacity)
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionM,
            start: "top+=200px bottom",
            end: "bottom+=200px bottom",
            scrub: true,
          },
        }
      );
    });
  }, []);
  return (
    <div>
      <div className=" flex flex-col items-center gap-2 mb-3 mt-4">
        <h1 className=" text-center text-4xl text-bgold-200 shimmer">
          Timeline
        </h1>
        <div className=" h-[2px] bg-bblue-200 w-16"></div>
      </div>
      <div className=" flex justify-center">
        <div className=" flex flex-col items-center gap-10">
          <div className="sectionM  mt-4 w-[60vmin] text-bgold-200 md:h-60 h-30 md:px-8 md:py-4 px-4 py-2 border-2 border-bgold-200 rounded-xl flex flex-col justify-between  text-xl ">
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
          <div className="sectionM   w-[60vmin]  text-bgold-200 md:h-60 h-30 md:px-8    md:py-4 px-4 py-2 border-2 border-bgold-200 rounded-xl flex flex-col justify-between  text-xl ">
            <div className=" tracking-tighter md:text-2xl text-sm">
              <h1>
                4th October
                <span className=" hidden md:inline">, 2023</span>
              </h1>
              <h1>11:59 PM</h1>
            </div>
            <div className=" flex flex-col items-start">
              <span className="  text-sm  pb-3 text-bblue-200">
                Registrations End
              </span>
              <p className=" text-sm"></p>
            </div>
          </div>

          <div className="sectionM   w-[60vmin]  text-bgold-200 md:h-60 h-30  md:px-8 md:py-4 px-4 py-2    border-2 border-bgold-200 rounded-xl flex flex-col justify-between  text-xl ">
            <div className=" tracking-tighter md:text-2xl text-sm">
              <h1>
                6th October
                <span className=" hidden md:inline">, 2023</span>
              </h1>
              <h1>7:00 PM</h1>
            </div>
            <div className=" flex flex-col items-start">
              <span className=" text-sm pb-3 text-bblue-200">
                Introductory Session
              </span>
              <p className=" text-sm text-bgold-300 md:inline hidden ">
                A short introductory session on GitHub and Discord.
              </p>
            </div>
          </div>

          <div className="sectionM   w-[60vmin]  text-bgold-200 md:h-60 h-30 md:px-8 md:py-4 px-4 py-2    border-2 border-bgold-200 rounded-xl flex flex-col justify-between text-xl ">
            <div className=" tracking-tighter md:text-2xl text-sm">
              <h1>
                7th October
                <span className=" hidden md:inline">, 2023</span>
              </h1>
              <h1>4:00 PM</h1>
            </div>
            <div className=" flex flex-col items-start">
              <span className=" text-sm pb-3 text-bblue-200">
                Opening Ceremony
              </span>
              <p className=" text-sm text-bgold-300 md:inline hidden">
                The inauguration of the 10th installation of the CBIT
                Hacktoberfest Hackathon will be set underway
              </p>
            </div>
          </div>

          <div className="sectionM   w-[60vmin]  text-bgold-200 md:h-60 h-30 md:px-8 md:py-4 px-4 py-2    border-2 border-bgold-200 rounded-xl flex flex-col justify-between  text-xl ">
            <div className=" tracking-tighter md:text-2xl text-sm">
              <h1>
                7th October
                <span className=" hidden md:inline">, 2023</span>
              </h1>
              <h1>6:00 PM</h1>
            </div>
            <div className=" flex flex-col items-start">
              <span className="text-sm pb-3 text-bblue-200">
                Releasing Problem Statements
              </span>
              <p className=" text-sm text-bgold-300 md:inline hidden">
                The problem statements will be made public
              </p>
            </div>
          </div>

          <div className="sectionM   w-[60vmin] text-bgold-200 md:h-60 h-30 md:px-8 md:py-4 px-4 py-2    border-2 border-bgold-200 rounded-xl flex flex-col justify-between  text-xl ">
            <div className=" tracking-tighter md:text-2xl text-sm">
              <h1>
                7th October
                <span className=" hidden md:inline">, 2023</span>
              </h1>
              <h1>6:30 PM</h1>
            </div>
            <div className=" flex flex-col items-start">
              <span className=" text-sm pb-3 text-bblue-200">
                Selection of problem statements
              </span>
              <p className=" text-sm text-bgold-300 md:inline hidden">
                Teams will be given until 6:45 PM to fill out their choices
              </p>
            </div>
          </div>

          <div className="sectionM   w-[60vmin]  text-bgold-200 md:h-60 h-30 md:px-8 md:py-4 px-4 py-2    border-2 border-bgold-200 rounded-xl flex flex-col justify-between  text-xl ">
            <div className=" tracking-tighter md:text-2xl text-sm">
              <h1>
                7th October
                <span className=" hidden md:inline">, 2023</span>
              </h1>
              <h1>7:00 PM</h1>
            </div>
            <div className=" flex flex-col items-start">
              <span className=" md:text-xl text-sm pb-3 text-bblue-200">
                Coding begins!
              </span>
              <p className=" text-sm text-bgold-300 md:inline hidden">
                The contestants now set sail and begin their voyage towards
                success.
              </p>
            </div>
          </div>

          <div className="sectionM w-[60vmin]   text-bgold-200 md:h-60 h-30 md:px-8 md:py-4 px-4 py-2    border-2 border-bgold-200 rounded-xl flex flex-col justify-between text-xl ">
            <div className=" tracking-tighter md:text-2xl text-sm">
              <h1>
                8th October
                <span className=" hidden md:inline">, 2023</span>
              </h1>
              <h1>2:00 AM & 9:00 AM</h1>
            </div>
            <div className=" flex flex-col items-start">
              <span className=" md:text-xl text-sm pb-3 text-bblue-200">
                Ice Breaker Sessions
              </span>
              <p className=" text-sm text-bgold-300 md:inline hidden">
                Help melt the awkwardness and forge connections.
              </p>
            </div>
          </div>

          <div className="sectionM w-[60vmin]    text-bgold-200 md:h-60 h-30 md:px-8 md:py-4 px-4 py-2    border-2 border-bgold-200 rounded-xl flex flex-col justify-between  text-xl ">
            <div className=" tracking-tighter md:text-2xl text-sm">
              <h1>
                8th October
                <span className=" hidden md:inline">, 2023</span>
              </h1>
              <h1>2:00 PM</h1>
            </div>
            <div className=" flex flex-col items-start">
              <span className=" text-sm pb-3 text-bblue-200">Coding Ends</span>
              <p className=" text-sm text-bgold-300 md:inline hidden  ">
                The time for the contestants to finish up has finally come.
              </p>
            </div>
          </div>

          <div className=" sectionM w-[60vmin]   text-bgold-200 md:h-60 h-30 md:px-8 md:py-4 px-4 py-2    border-2 border-bgold-200 rounded-xl flex flex-col justify-between  text-xl ">
            <div className=" tracking-tighter md:text-2xl text-sm">
              <h1>
                8th October
                <span className=" hidden md:inline">, 2023</span>
              </h1>
              <h1>2:30 PM</h1>
            </div>
            <div className=" flex flex-col items-start">
              <span className=" text-sm pb-3 text-bblue-200">
                Submissions Close
              </span>
              <p className=" text-sm text-bgold-300 md:inline hidden ">
                Contestants must push their codes to GitHub before the deadline
                and delays will not be accepted
              </p>
            </div>
          </div>

          <div className="sectionM w-[60vmin]    text-bgold-200 md:h-60 h-30 md:px-8 md:py-4 px-4 py-2    border-2 border-bgold-200 rounded-xl flex flex-col justify-between  text-xl ">
            <div className=" tracking-tighter md:text-2xl text-sm">
              <h1>
                8th October
                <span className=" hidden md:inline">, 2023</span>
              </h1>
              <h1>3:00 PM</h1>
            </div>
            <div className=" flex flex-col items-start">
              <span className=" text-sm pb-3 text-bblue-200">
                Presentations
              </span>
              <p className=" text-sm text-bgold-300 md:inline hidden ">
                Pitching a solution to a panel of judges often acts as the
                deciding factor to ensuring victory!
              </p>
            </div>
          </div>

          <div className="sectionM   w-[60vmin]  text-bgold-200 md:h-60 h-30 md:px-8 md:py-4 px-4 py-2    border-2 border-bgold-200 rounded-xl flex flex-col justify-between  text-xl ">
            <div className=" tracking-tighter md:text-2xl text-sm">
              <h1>
                8th October
                <span className=" hidden md:inline text-xl">, 2023</span>
              </h1>
              <h1>7:30 PM</h1>
            </div>
            <div className=" flex flex-col items-start">
              <span className="text-sm pb-3 text-bblue-200">
                Closing Ceremony
              </span>
              <p className=" text-sm text-bgold-300 md:inline hidden  ">
                It’s time for closing remarks and to finally announce the much
                awaited winners!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineMobile;
