import Link from "next/link";
import React from "react";

const Contact = () => {
    const location =
        "Chaitanya Bharathi Institute of Technology, Gandipet, Hyderabad.";
    const email = "cosc@cbit.ac.in";
    const phone = "Akil: +91 94426 21187";
    const phone2 = "Ritesh: +91 96182 66824";

    return (
        <div className="p-4 py-0 mx-auto my-0 sm:w-1/2 h-fit">
            <div className="flex flex-col items-center gap-2 ">
                <h1 className="justify-center text-3xl text-center  justify-items-center text-bblue-200 shimmerb">
                    Contact Information
                </h1>
                <div className=" h-[2px] bg-bblue-200 w-16"></div>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg ">
                {/* <h2 className="mb-4 text-lg font-semibold text-center">Contact Information</h2> */}
                <div className="p-3 mt-3 border border-solid rounded-md border-bgold-200">
                    <h3 className="font-medium text-md text-bblue-100">
                        Location:
                    </h3>
                    <p className="text-gray-700">{location}</p>
                </div>
                <div className="p-3 mt-3 border border-solid rounded-md border-bgold-200">
                    <h3 className="font-medium text-md text-bblue-100">
                        Email:
                    </h3>

                    <Link
                        href="mailto:cosc@cbit.ac.in "
                        className="text-gray-700 hover:underline"
                    >
                        {email}
                    </Link>
                </div>
                <div className="flex flex-col p-3 mt-3 border border-solid rounded-md border-bgold-200">
                    <h3 className="font-medium text-md text-bblue-100">
                        Phone:
                    </h3>

                    <Link href="tel:+919442621187" className="text-gray-700">
                        {phone}
                    </Link>
                    <Link href="tel:+919618266824" className="text-gray-700">
                        {phone2}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
