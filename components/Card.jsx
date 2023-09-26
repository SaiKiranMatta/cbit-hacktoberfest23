import Image from "next/image";
import Link from "next/link";

const Card = (mentor) => {
  return (
    <div className=" md:w-72 w-52 md:py-4 md:px-8 px-4 py-4  bg-none shadow-xl rounded-xl md:mx-10 mx-5  my-20 border-2 border-bgold-200 flex flex-col items-center text-bgold-200  justify-between">
      <div>
        <Image
          alt={mentor.Name}
          height={200}
          width={200}
          src={mentor.imgSrc}
          className=" rounded-full"
        />
      </div>

      <h2 className=" md:text-xl text-sm text-bblue-100 font-bold my-2">
        {mentor.Name}
      </h2>
      <h2 className=" md:text-base text-xs text-bgold-200 ">
        {mentor.Designation},
      </h2>
      <h2>COSC</h2>

      <div className=" flex my-2">
        <div className="mx-1">
          <Link href={mentor.LinkedIn}>
            <Image
              src="/images/linkedin.svg"
              alt="Linkedin Icon"
              height={30}
              width={30}
            />
          </Link>
        </div>
        <div className="mx-1">
          <Link href={mentor.Github}>
            <Image
              src="/images/github.svg"
              alt="GitHub Icon"
              height={30}
              width={30}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
