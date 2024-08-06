"use client";
import React, { useRef, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiAlignJustify } from "react-icons/fi";

const PrivacyPolicy = () => {
  const [open, isOpen] = useState(false);



  return (
    <main className="bg-white font-[Poppins] min-w-[320px]">
      <div
        style={{ backgroundImage: `url(${"/images/landing-back1.png"})` }}
        className="bg-contain h-full  "
      >
        <div className="h-full  w-[100%] text-[#FFF]  ">
          <ul className="lg:flex pt-7 gap-5 px-5 text-2xl font-[Ultra] md:mx-14 justify-between text-center items-center  max-lg:text-lg max-lg:flex-wrap ">
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
                <span className="text-[#FFCC18] "> Disclaimer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third block */}
      <div className="md:w-[85%] mx-auto max-md:px-10 py-10">
      <div className="flex justify-center font-bold text-3xl mb-6 underline">
        DISCLAIMER
      </div>
      <div className="space-y-4 text-sm font-bold">
        <p>
          Kjlemon app is an online dating and matchmaking platform. It does not offer escort listings.
        </p>
        <p>
          Kjlemon's services are provided "as is" and we do not make, and cannot make, any representations about the content or features of our services or member content.
        </p>
        <p>
          Kjlemon provides our services on an "as is" and "as available" basis and to the extent permitted by applicable law, grants no warranties of any kind, whether express, implied, statutory or otherwise with respect to our services (including all content contained therein), including, without limitation, any implied warranties of satisfactory quality, merchantability, fitness for a particular purpose or non-infringement. Kjlemon does not represent or warrant that
        </p>
        <p>
          (a) our services will be uninterrupted, secure, or error free,
        </p>
        <p>
          (b) any defects or errors in our services will be discovered or corrected, or
        </p>
        <p>
          (c) that any content or information you obtain on or through our services will be accurate, complete, current or appropriate for your purposes. Furthermore, Kjlemon makes no guarantees as to the number of active users at any time; users' ability or desire to communicate with or meet you, or the ultimate compatibility with or conduct by users you meet through the services.
        </p>
        <p>
          Kjlemon app does not promote nudity. All the users are advised not to upload any obscene pictures.
        </p>
        <p>
          All the users shall be 18 years and above.
        </p>
        <p>
          All users shall be required to open account in order to use the service, chat, call and video call.
        </p>
        <p>
          The app will have two kinds of accounts: basic and premium account.
        </p>
        <p>
          The basic account, a user will not pay but can chat and communicate with others users, and for the premium account, users will be required to subscribe in order to enjoy premium features , include, video call , receiving gifts from others users, can see when another user read my messages.
        </p>
        <p>
          Users can create an account by using Apple account, Facebook account or google account, will have google analytics and google location engine or tool.
        </p>
        <p>
          Please note that KJLEMON app neither authenticates any information of users nor it is responsible for any incorrect or inaccurate information provided by the users. Hence, all the users are strongly advised to verify the information and credentials as posted by other users before taking a final decision.
        </p>
        <p>
          KJLEMON app is committed to provide a smooth, trouble-free and safe matchmaking experience to its users by following the industry standard procedures.
        </p>
        <p>
          However, KJLEMON app is not responsible for any technical malfunctioning related to computer, internet services and telephone network, including problems in connecting with the customer support team, failure in email delivery or any problem in browsing the app.
        </p>
        <p>
          Also, KJLEMON app doesn't warranty that the app is free from viruses or any other infection.
        </p>
        <p>
          The profiles listed on KJLEMON app should not be taken as offered or suggested or recommended by the app. Thus, KJLEMON app shall not be responsible for any direct, indirect, special, incidental or consequential damages arising out of the use in the services provided by the app.
        </p>
        <p>
          Under no circumstances, shall KJLEMON app be liable to pay for any indirect, special, incidental, consequential, punitive or exemplary losses or damages to the users arising out of using KJLEMON app.
        </p>
        <p>
          KJLEMON app reserves all the rights to add, delete or modify the contents, presentation and format of the information provided at any time without giving any prior notice.
        </p>
        <p>
          All the users need to refer and agree to the privacy policy and terms of use while accessing the app.
        </p>
        <p>
          KJLEMON app may accept advertisements for display provided by the third parties. It is the user's responsibility to check the authenticity of these advertisements and KJLEMON app will not be responsible for any direct or indirect loss arising to users as a result of using the products or services displayed in the advertisements. Also, the third party advertisers need to ensure that their material complies with all the USA and International laws and regulations. KJLEMON app reserves all the rights to suspend any advertisement at any point of time.
        </p>
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
  );
};

export default PrivacyPolicy;

const slide = [
  { title: "wmf SDNF", name: "sachin", description: "SDKNsdfnsnfsdf" },
  { title: "wmfddf SDNF", name: "sachin", description: "SDKNsdfnsnfsdf" },
  { title: "wmf56 SDNF", name: "sachin", description: "SDKNsdfnsnfsdf" },
];
