"use client";
import React, { useRef, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiAlignJustify } from "react-icons/fi";

const page = () => {

    const [count, setCount] = useState(1);
    const [open, isOpen] = useState(false);

    return (
        <main className="bg-white font-[Poppins] min-w-[320px]">
            <div
                style={{ backgroundImage: `url(${"/images/landing-back1.png"})` }}
                className="bg-contain h-full  "
            >
                <div className="h-full  w-[100%] text-[#FFF]  ">
                    <ul className="lg:flex pt-7  px-5 text-2xl font-[Ultra] md:mx-14 justify-between text-center items-center  max-lg:text-lg max-lg:flex-wrap ">
                        <li className=" max-lg:flex max-lg:justify-between max-lg:w-full ">
                            <img
                                src="/images/lemon.png"
                                className="max-md:w-22 max-w-[110px] max-md:max-w-[90px]"
                                alt="not found"
                            />
                            <span
                                onClick={() => isOpen(!open)}
                                className="pt-5 text-3xl lg:hidden "
                            >
                                <FiAlignJustify />
                            </span>
                        </li>
                        <div
                            className={`flex md:mx-20 max-lg:items-center gap-10 text-center items-center max-xl:flex-wrap max-md:text-lg max-lg:flex-col ${open ? "" : "max-lg:hidden"
                                }`}
                        >
                            <li

                                className="flex-auto cursor-pointer "
                            >
                                {" "}
                                <a href='/'>
                                    Home
                                </a>
                            </li>
                            <li
                                className="flex-auto cursor-pointer"
                            >
                                <a href='/'
                                >
                                    Features
                                </a>
                            </li>
                            <li
                                className="flex-auto cursor-pointer "
                            >
                                {" "}
                                <a href='/'>
                                    Testimonials
                                </a>
                            </li>
                            <li
                                className="flex-auto cursor-pointer "
                            >
                                {" "}
                                <a href='/'>
                                    FAQ
                                </a>
                            </li>
                            <li
                                className="flex-auto cursor-pointer "
                            >
                                <a href='/'>
                                    Contact
                                </a>
                            </li>
                        </div>
                        <li>
                            <button
                                className={`bg-[#FFCE00] text-black whitespace-nowrap py-1 max-lg:mt-9 text-xl font-sans rounded-2xl px-4 ${open ? "" : "max-lg:hidden"
                                    }`}
                            >
                                Get Started
                            </button>
                        </li>
                    </ul>
                    <div className="flex max-lg:flex-col gap-28 pb-28 max-md:pb-14 ">
                        <div className=" leading-tight md:pl-24 max-lg:px-10 max-lg:pb-10 ">
                            <div className="text-white  mt-28 font-[Ultra] items-center text-[37px] ">
                                Delete
                                <span className="text-[#FFCC18] "> Account</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* third block */}
            <div className="md:w-[85%] mx-auto max-md:px-10 py-10 flex justify-center">
                <div className="flex flex-col gap-2  md:w-[50%] w-[90%] lg:w-[40%] xl:w-[30%] xs:w-[90%]">
                    <div className="flex col-4 grow max-md:mt-6 w-full">
                        <input
                            className="outline-none border-none rounded-xl w-full bg-black  text-white indent-5 py-4"
                            type="text"
                            placeholder="Email Address/Phone-Number"
                        />
                    </div>
                    <div className="flex flex-col-5 grow max-md:mt-6">
                        <input
                            className="outline-none border-none rounded-xl w-full bg-black  text-white indent-5 py-4"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className={`bg-[#FFCE00] text-black whitespace-nowrap py-2 w-full text-md font-sans rounded-2xl px-5 "
                            }`}
                        >
                            Delete My Account
                        </button>
                    </div>
                </div>
            </div>

            {/* fourth block */}
            <div className="flex justify-center border-t-2 items-center self-stretch px-24 py-8 w-full bg-black max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full max-md:mx-auto">
                    <div className="flex gap-5 justify-between w-full text-2xl leading-7 text-center text-white whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full ">
                        <img
                            src="/images/lemon.png"
                            alt="not found"
                            className="shrink-0 max-w-full aspect-[1.09] w-[90px]"
                        />
                        <div className="flex gap-6 my-auto text-xl  max-lg:flex-wrap  max-md:max-w-full">
                            <div className="flex flex-auto gap-5 my-auto max-md:flex-wrap cursor-pointer">
                                <div
                                    className="grow my-auto"
                                >
                                    Home
                                </div>
                                <div className="my-auto">
                                    Features
                                </div>
                                <div
                                    className="flex-auto my-auto"
                                >
                                    Testimonials
                                </div>
                                <div
                                    className="flex-auto my-auto"
                                >
                                    FAQ
                                </div>
                                <div
                                    className="flex-auto my-auto"
                                >
                                    Contact
                                </div>
                            </div>
                            <div className="flex gap-6 justify-between px-5 max-md:flex-wrap">
                                <img
                                    loading="lazy"
                                    src="/images/fb.png"
                                    className="shrink-0 aspect-square w-[50px]"
                                />
                                <img
                                    loading="lazy"
                                    src="/images/insta.png"
                                    className="shrink-0 aspect-square w-[50px]"
                                />
                                <img
                                    loading="lazy"
                                    src="/images/x.png"
                                    className="shrink-0 aspect-square w-[50px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="shrink-0 mt-5 h-px  border-solid bg-white bg-opacity-50 border-white border-opacity-50 max-md:max-w-full" />
                    <div className="flex gap-5 mt-7 w-full text-base leading-9 capitalize max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                        <div className="flex-auto text-zinc-400 max-md:max-w-full">
                            Copyright © 2024 KJ Lemon Dating App. All Rights Reserved.
                        </div>
                        <div className="flex gap-5 self-start text-white">
                            <a href='/privacy-policy' className="flex-auto">Privacy Policy</a>
                            <a href='/terms-of-service' className="flex-auto">Terms of Service</a>
                            <a href='/disclaimer' className="flex-auto">Disclaimer</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page