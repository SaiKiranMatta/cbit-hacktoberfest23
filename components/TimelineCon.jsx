"use client";

import React, { useEffect, useState } from "react";

import Timeline from "@/components/Timeline";
import TimelineMobile from "@/components/TimelineMobile";

const TimelineMain = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Use useEffect to update isMobile based on screen size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the screen size threshold as needed
    };

    // Initial check and add event listener for window resize
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div>
      {isMobile ? <TimelineMobile /> : <Timeline />}{" "}
      {/* Conditional rendering */}
    </div>
  );
};

export default TimelineMain;
