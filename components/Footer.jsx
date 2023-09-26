import React from "react";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className=" w-[85%] mx-auto my-16 sm-spacing h-min bg-Manga-300 bg-opacity-10 backdrop-blur-md px-6 py-3 rounded-2xl outline-border">
      <div>
        <div className=" text-lg text-Manga-100 text-justify ">
          <h2 className="shimmerb text-bblue-200 text-center py-4 text-xl">
            What We Do?
          </h2>
          <p className=" text-sm md:text-base md:leading-6 ">
            We&apos;re a community dedicated to advancing the open source
            culture. We host <strong>hackathons</strong>, conduct{" "}
            <strong>bootcamps</strong>, and facilitate{" "}
            <strong>workshops</strong> to equip students with the skills they
            need to thrive in the world of technology.
          </p>
          <h2 className="shimmerb text-bblue-200 py-4 text-xl">
            Join Us on This Journey
          </h2>

          <p className="text-sm md:text-base md:leading-6">
            <strong>Hacktoberfest</strong> isn&apos;t just an event; it&apos;s a
            chance to be part of something bigger and to make an impact in the
            tech world. So, whether you&apos;re a seasoned developer, a curious
            beginner, or simply someone with a passion for technology, we invite
            you to join us on this exhilarating journey.
          </p>
        </div>
      </div>
      <div className=" self-center w-fit mx-auto my-8">
        <div className=" flex  gap-6">
          <Link href="https://www.facebook.com/cbitosc/">
            <Image
              alt="facebook"
              src="/images/facebook.svg"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://twitter.com/cbitosc?t=rWGqPsaidSTGfA8FpwPPUw&s=09">
            <Image
              alt="x(twitter)"
              src="/images/x.png"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.instagram.com/cbitosc/">
            <Image
              alt="instagram"
              src="/images/insta.svg"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.linkedin.com/company/cbitosc/">
            <Image
              alt="linkedin"
              src="/images/linkedin.svg"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>

      <div className=" flex justify-between font-thin  flex-col md:flex-row items-center gap-4 text-bgold-200">
        <div>
          <Link className="shimmer text-lg" href="https://hacktoberfest.com/">
            Hacktoberfest
          </Link>
        </div>
        <div>
          <Link className="shimmer" href="https://cbitosc.github.io/">
            CBIT Open Source Community
          </Link>
        </div>
        <div>
          <Link className="shimmer" href="https://cbitosc.github.io/coc/">
            Code Of Conduct
          </Link>
        </div>
      </div>

      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        async
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        async
      ></script>
    </div>
  );
}

export default Footer;
