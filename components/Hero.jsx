import React from "react";
// import im from '../public/images/HFest23_Logo.png' ;
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" h-full">
      <div className=" mx-auto my-0 py-0 flex flex-col-reverse justify-center justify-items-center items-center w-[90%] h-4/5 hero-ios">
        <div className="mx-auto flex flex-col text-center items-center">
          <h1 className="text-4xl tracking-tight text-center ">
            <span className=" text-bblue-100">Welcome to</span>
            <br />

            <span className=" text-4xl text-bgold-200 font-semibold shimmer">
              CBIT Hacktoberfest Hackathon&apos;23
            </span>
          </h1>
          <span className="md:text-lg mt-6 ">
            The Biggest Technical Fest of CBIT{" "}
          </span>

          <span className=" md:text-lg  text-bred-200">
            7th and 8th October 2023
          </span>

          <Link href="/register" className=" self-center mt-6">
            <button className=" px-6 py-3 bg-none hover:bg-Manga-100 hover:bg-opacity-10 duration-300 my-2  text-bgold-200 border border-bgold-200 rounded-lg text-2xl md:text-3xl mt-3">
              Register
            </button>
          </Link>
        </div>
        <div className="h-max my-0 mt-24 md:mt-16 mb-24 md:mb-12">
          <Image
            width={1000}
            height={400}
            src="/images/HFest23_LogoCrop.png"
            styles={{
                "z-index": 1,
              }}
            alt="Logo"
            className=""
            style={{ margin: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
