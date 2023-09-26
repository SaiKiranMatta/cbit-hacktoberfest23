import React from "react";

function About() {
  return (
    <div>
      <div className=" flex flex-col items-center gap-2">
        <h1 className=" text-center text-4xl text-bgold-200 shimmer">
          About The Event
        </h1>
        <div className=" h-[2px] bg-bblue-200 w-16"></div>
      </div>
      {/* <p>
        CBIT Open Source Community, an esteemed tech community based in
        Chaitanya Bharathi Institute of Technology - Hyderabad, is dedicated to
        promoting an open-source ethos. We organize a diverse range of events
        such as hackathons, bootcamps, and workshops, aimed at educating
        students about various technologies while actively fostering a culture
        of open source. In these dynamic gatherings, students immerse themselves
        in collaborative coding sessions, innovative problem-solving challenges,
        and hands-on experiences, all centered around open source principles. By
        embracing this approach, we empower students to not only learn about
        cutting-edge technologies but also actively contribute to their
        development and dissemination.
      </p>
      <h1>About the event</h1> */}
      <div className=" py-6 w-[85%] mx-auto  items-center flex flex-col gap-8 md:text-xl text-base ">
        <span className=" md:inline hidden">
          Welcome to Hacktoberfest, the annual extravaganza
          that fuels the spirit of open source collaboration! 🚀
        </span>
        <div className=" px-4 py-2 bg-Manga-100 bg-opacity-10  rounded-xl shadow-lg border border-bgold-200 backdrop-blur-md">
          <span className=" text-bgold-200 shimmer font-bold ">
            What is Hacktoberfest?
          </span>
          <p className=" mt-2 text-xs md:text-base font-thin ">
            Hacktoberfest, presented by DigitalOcean, Appwrite, and ILLA Cloud, is a month-long open 
            source celebration. Its aim is to inspire students and enthusiasts while fostering community, 
            collaboration, and skill-building.

          </p>
        </div>
        <div className=" px-4 py-2 bg-Manga-100 bg-opacity-10  rounded-xl shadow-lg border border-bgold-200 backdrop-blur-md">
          <span className=" text-bgold-200 shimmer font-bold">
            Why We&apos;re Thrilled?
          </span>
          <p className=" mt-2 font-thin text-xs md:text-base">
            The &quot;CBIT Hacktoberfest Hackathon&quot; is an exciting 24-hour
            coding challenge within this event. It empowers individuals to make
            meaningful contributions, expand tech knowledge, and connect with
            open source enthusiasts.
          </p>
        </div>
        <div className=" px-4 py-2 bg-Manga-100 bg-opacity-10  rounded-xl shadow-lg border border-bgold-200 backdrop-blur-md">
          <span className=" text-bgold-200 shimmer font-bold">Who Are We?</span>
          <p className=" mt-2 font-thin text-xs md:text-base">
            We are the Chaitanya Bharathi Institute of Technology Open Source
            Community (COSC) in Hyderabad. Our mission is to Promote open source
            values, provide a platform for students to explore and contribute to
            tech, all while crafting experiences that nurture a lifelong love
            for open source.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
