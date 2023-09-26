"use client";

import React, { useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Card from "./Card";
import Image from "next/image";

const mentors = [
  {
    Name: "Dhruv Saxena",
    Github: "https://github.com/Dhruv16S",
    LinkedIn: "https://www.linkedin.com/in/dhruv-saxena-30489525a/",
    Designation: "President",
    imgSrc: "/images/mentors/Dhruv Saxena.jpg",
  },
  {
    Name: "Gopal Matcha",
    Github: "https://github.com/gopalM-3",
    LinkedIn: "https://www.linkedin.com/in/gopalmatcha/",
    Designation: "Vice President",
    imgSrc: "/images/mentors/Gopal Matcha.jpg",
  },
  {
    Name: "Arshia Parveen",
    Github: "https://github.com/Arshia-parveen",
    LinkedIn: "https://www.linkedin.com/in/arshia-parveen-8a39ba215/",
    Designation: "General Secretary",
    imgSrc: "/images/mentors/Arshia Parveen.jpeg",
  },
  {
    Name: "Nikhil Maroju",
    Github: "https://github.com/Maroju-Nikhil",
    LinkedIn: "https://www.linkedin.com/in/nikhil-maroju/",
    Designation: "General Secretary",
    imgSrc: "/images/mentors/Nikhil Maroju.jpg",
  },
  {
    Name: "Roopika Ponnur",
    Github: "https://github.com/roopika253",
    LinkedIn: "https://www.linkedin.com/in/roopika-ponnur-2423b3216/",
    Designation: "General Secretary",
    imgSrc: "/images/mentors/Roopika Ponnur .jpg",
  },

  {
    Name: "Asritha Reddy",
    Github: "https://github.com/Asritha-Reddy",
    LinkedIn: "https://www.linkedin.com/in/asritha-reddy-04a32a230/",
    Designation: "Joint Secretary",
    imgSrc: "/images/mentors/D. Asritha Reddy .jpg",
  },
  {
    Name: "Kodali Bhavana",
    Github: "https://github.com/kbhavana14",
    LinkedIn: "https://www.linkedin.com/in/kbhavana14/",
    Designation: "Joint Secretary",
    imgSrc: "/images/mentors/Bhavana.jpg",
  },
  {
    Name: "Nishanth Artham",
    Github: "https://github.com/Nishanthartham",
    LinkedIn: "https://www.linkedin.com/in/nishanth-artham-1a572b212/",
    Designation: "Joint Secretary",
    imgSrc: "/images/mentors/Nishanth Artham.jpeg",
  },
  {
    Name: "Meghana Veeramallu",
    Github: "https://github.com/Meghanasveeramallu",
    LinkedIn: "https://www.linkedin.com/in/meghana-sreeya-veeramallu/",
    Designation: "Joint Secretary",
    imgSrc: "/images/mentors/Meghana Veeramallu.jpg",
  },
  {
    Name: "Peddi Sai Lohith",
    Github: "https://github.com/lohith1392",
    LinkedIn: "https://www.linkedin.com/in/peddi-lohith-3a0851203/",
    Designation: "Joint Secretary",
    imgSrc: "/images/mentors/Lohith.jpeg",
  },
  {
    Name: "Adi Yerabati",
    Github: "https://github.com/adiyerabati",
    LinkedIn:
      "https://www.linkedin.com/in/adityanarayana-rao-yerabati-7969161b0/",
    Designation: "External Affairs",
    imgSrc: "/images/mentors/Adi.jpg",
  },
];

const Slider = ({ children, options }) => {
  // 2. initialize EmblaCarousel using the custom hook
  const [emblaRef, emblaApi] = useEmblaCarousel({
    // slidesToScroll: 1,
    align: 0.02,
    loop: true,
    dragFree: true,
    ...options,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    // 3. set ref as emblaRef.
    // make sure we have overflow-hidden and flex so that it displays properly
    <div className=" relative">
      <div className="top-0 bottom-0 left-5 absolute  justify-center items-center z-10 md:flex hidden">
        <button className="embla__prev " onClick={scrollPrev}>
          <Image
            src={"images/leftarrow.svg"}
            alt="embla_prev"
            width={30}
            height={30}
          />
        </button>
      </div>
      <div className=" top-0 bottom-0 right-3 absolute md:flex hidden justify-center items-center z-10">
        <button className="embla__next" alt="embla_next" onClick={scrollNext}>
          <Image
            src={"/images/rightarrow.svg"}
            alt="rightarrow"
            width={30}
            height={30}
          />
        </button>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex  ">{children}</div>
      </div>
    </div>
  );
};

function Mentors() {
  return (
    <>
      <div className=" flex flex-col items-center gap-2 h-min">
        <h1 className=" text-center text-3xl text-bblue-200 shimmerb">
          Mentors
        </h1>
        <div className=" h-[2px] bg-bblue-200 w-16"></div>
      </div>
      <div className=" w-full">
        <Slider>
          {mentors.map((mentor, i) => (
            <div key={i} className="flex">
              <Card {...mentor} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Mentors;
