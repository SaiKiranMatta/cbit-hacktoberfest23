import React from "react";
//import './Sponsors.css';
import Image from "next/image";
import Link from "next/link";
const Sponsors = () => {
    return (
        // <div className="sponsors-container">
        //   <h2>Our Co-sponsor</h2>
        //   <div className="sponsor-grid">
        //     {sponsors.map((sponsor, index) => (
        //       <div key={index} className="sponsor">
        //         <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
        //           <Image width={200} height={200} src={sponsor.logo} alt={sponsor.name} />
        //         </a>
        //       </div>
        //     ))}
        //   </div>
        // </div>

        <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2 ">
                <h1 className="justify-center text-4xl text-center justify-items-center text-bblue-200 shimmerb">
                    Our Co-sponsor
                </h1>
                <div className=" h-[2px] bg-bblue-200 w-16"></div>
            </div>
            <div className="flex flex-row items-center gap-2">
                <Link href="https://interviewbuddy.in/" target="_blank">
                    <Image
                        src="/images/sponsors/interview-buddy.png"
                        width={284}
                        height={160}
                        className="rounded-xl"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Sponsors;
