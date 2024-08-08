"use client";
import React, { useRef, useState } from "react";
import { FaGift } from "react-icons/fa6";
import { BsChatFill } from "react-icons/bs";
import { HiHandThumbUp } from "react-icons/hi2";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FaPlus } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Home = () => {
  const [count, setCount] = useState(1);
  const [open, isOpen] = useState(false);
  const slider = useRef(null);

  const [expand, setExpand] = useState();
  const handleExpand = (isExpand: any, value: any) => {
    setExpand(isExpand ? value : false);
  };

  const Home = useRef();
  const Features = useRef();
  const Testimonials = useRef();
  const FAQ = useRef();
  const Contact = useRef();

  const scollHandler = (elmRef: any) => {
    window.scrollTo({
      top: elmRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="bg-[#f0d7d7] font-[Poppins] min-w-[320px]">
      <div
        style={{ backgroundImage: `url(${"/images/landing-back1.png"})` }}
        className="bg-contain h-full  "
      >
        <div ref={Home} className="h-full  w-[100%] text-[#FFF]  ">
          <ul className="lg:flex pt-7 gap-1 text-2xl font-[Ultra] md:mx-14 justify-between text-center items-center  max-lg:text-lg max-lg:flex-wrap ">
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
              className={`flex md:mx-20 max-lg:items-center gap-10 text-center items-center max-xl:flex-wrap max-md:text-lg max-lg:flex-col ${
                open ? "" : "max-lg:hidden"
              }`}
            >
              <li
                onClick={() => scollHandler(Home)}
                className="flex-auto cursor-pointer "
              >
                {" "}
                <span
                  onClick={() => setCount(1)}
                  className={count === 1 ? "text-[#EF7FBF]" : "text-[#FFF]"}
                >
                  Home
                </span>
              </li>
              <li
                onClick={() => scollHandler(Features)}
                className="flex-auto cursor-pointer"
              >
                <span
                  onClick={() => setCount(2)}
                  className={count === 2 ? "text-[#EF7FBF]" : "text-[#FFF]"}
                >
                  Features
                </span>
              </li>
              <li
                onClick={() => scollHandler(Testimonials)}
                className="flex-auto cursor-pointer "
              >
                {" "}
                <span
                  onClick={() => setCount(3)}
                  className={count === 3 ? "text-[#EF7FBF]" : "text-[#FFF]"}
                >
                  Testimonials
                </span>
              </li>
              <li
                onClick={() => scollHandler(FAQ)}
                className="flex-auto cursor-pointer "
              >
                {" "}
                <span
                  onClick={() => setCount(4)}
                  className={count === 4 ? "text-[#EF7FBF]" : "text-[#FFF]"}
                >
                  FAQ
                </span>
              </li>
              <li
                onClick={() => scollHandler(Contact)}
                className="flex-auto cursor-pointer "
              >
                <span
                  onClick={() => setCount(5)}
                  className={count === 5 ? "text-[#EF7FBF]" : "text-[#FFF]"}
                >
                  Contact
                </span>
              </li>
            </div>
            <li>
              <button
                className={`bg-[#FFCE00] text-black whitespace-nowrap py-3 max-lg:mt-9 text-xl rounded-2xl px-4 ${
                  open ? "" : "max-lg:hidden"
                }`}
              >
                Get Started
              </button>
            </li>
          </ul>
          <div className="flex max-lg:flex-col gap-28 justify-between max-lg:items-end ">
            <div className=" leading-tight md:pl-24 max-lg:px-10 max-lg:pb-10 ">
              <div className="text-white  mt-28 font-[Ultra] items-center text-[37px] ">
                Find someone who makes you
                <span className="text-[#FFCC18] "> smile.</span>
              </div>
              <p className="text-base font-[Poppins] mt-2 items-center text-[#FFF]">
                “Redefining Connections, One Authentic Moment at a Time”.
              </p>
              <div className="gap-5 flex mt-9 max-md:mx-auto max-md:flex-wrap max-w-[400px] d-flex justify:center align:center">
                {/* <div className="max-w-[200px]">
                  <img
                    className="rounded-full"
                    src="/images/get_app_store.png"
                    alt="Get App Store"
                  />
                </div> */}
                {/* <div className=" max-w-[200px]">
                  <img
                    className="rounded-full"
                    src="/images/get_play_store.png"
                    alt="Get Play Store"
                  />
                </div> */}
              </div>
            </div>
            <div className=" translate-y-10 max-lg:hidden">
              <img
                src="/images/half-heart.png"
                className="max-w-[450px] justify-end flex-auto mx-auto"
                alt="not found"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full ">
        {/* second block */}
        <div className="flex justify-between max-lg:flex-col md:pl-16 md:pr-24 max-md:pl-10">
          {/* <div className="relative top-[200px] left-10">
            <img className="min-h-[220px]" src="/images/sidebar.png" alt="" />
            <div className="absolute top-5 p-4">
              <div
                style={{
                  filter: "drop-shadow(0px 1.25px 2.5px rgba(0, 0, 0, 0.15))",
                }}
                className="border-2 p-3 mb-2  bg-gray-300 text-white rounded-full"
              >
                <FaGift />
              </div>
              <div
                style={{
                  filter: "drop-shadow(0px 1.25px 2.5px rgba(0, 0, 0, 0.15))",
                }}
                className="border-2 p-3 mb-2 bg-gray-300 text-white rounded-full"
              >
                <BsChatFill />
              </div>
              <div
                style={{
                  filter: "drop-shadow(0px 1.25px 2.5px rgba(0, 0, 0, 0.15))",
                }}
                className="border-2 p-3 mb-2 bg-gray-300 text-[#EF7FBF] rounded-full"
              >
                <HiHandThumbUp />
              </div>
            </div>
          </div> */}
          <div className="flex max-md:gap-3 md:gap-5 max-md:px-2 max-lg:justify-center max-lg:pt-10">
            <div className="flex flex-col text-base font-bold text-center my-auto bg-white rounded-tl-[35px] rounded-bl-[35px] whitespace-nowrap max-w-[66px]">
              <div className="flex relative flex-col justify-center px-3 py-7 w-full ">
                <div className="flex relative gap-1 flex-col justify-center items-center">
                  <div className="flex flex-col w-11 text-white">
                    <div className="px-3 w-full h-11 rounded-full border border-solid bg-gray-300 bg-opacity-50 border-white border-opacity-30 shadow-[0px_1px_3px_rgba(0,0,0,0.15)]">
                      <div className="flex items-center mt-3 mx-auto w-full ">
                        <FaGift />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2.5 w-11 text-white">
                    <div className="px-3 w-full h-11 rounded-full border border-solid bg-gray-300 bg-opacity-50 border-white border-opacity-30 shadow-[0px_1px_3px_rgba(0,0,0,0.15)]">
                      <div className="flex items-center mx-auto mt-3 w-full ">
                        <BsChatFill />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2.5 w-11 text-white">
                    <div className="px-3 w-full h-11 rounded-full border border-solid bg-gray-300 bg-opacity-50 border-white border-opacity-30 shadow-[0px_1px_3px_rgba(0,0,0,0.15)]">
                      <div className="flex items-center mt-3 w-full mx-auto text-[#EF7FBF]">
                        <HiHandThumbUp />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex max-w-[400px] items-end max-lg:justify-center w-full">
              <div className="relative">
                <img className="" src="/images/phone-hand.png" alt="" />
              </div>
            </div>
          </div>

          <div className="flex max-md:mt-5 max-md:max-w-full max-lg:flex-col">
            <div className="flex max-md:mt-10 max-md:max-w-full max-md:items-center max-lg:flex-col">
              <div className="flex flex-col self-stretch  px-5 mt-28 capitalize max-md:mt-5 max-md:max-w-full">
                <div className="max-lg:flex max-lg:justify-center text-4xl max-md:text-3xl whitespace-nowrap font-[Ultra] leading-[62px] max-md:max-w-full  max-md:items-center">
                  How it <span className="text-pink-400"> works</span>?
                </div>
                <div className="flex flex-col items-center w-[260px]  mx-auto mt-5 px-10 pt-10 pb-20 bg-white shadow-sm rounded-[250px] max-md:max-w-full ">
                  <img
                    loading="lazy"
                    src="/images/gift.png"
                    className="z-10 self-stretch mt-1 w-[120px] mx-auto aspect-[1.2] max-md:max-w-full"
                  />
                  <div className=" text-lg mt-7 font-semibold text-center leading-7 text-black">
                    Create Your Profile
                  </div>
                  <div className="mt-1 text-sm leading-5 text-center text-neutral-400 w-[175px]">
                    Complete your profile with essential details to start
                    connecting with like-minded individuals.
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-7  pb-10 gap-4  z-50 capitalize">
                <div className="flex flex-col items-center w-[260px]  mx-auto mt-5 px-10 pt-7 pb-10 bg-white shadow-sm rounded-[250px] max-md:max-w-full ">
                  <img
                    loading="lazy"
                    src="/images/game.png"
                    className="z-10 self-stretch mt-1 w-[120px] h-[120px] mx-auto aspect-[1.2]"
                  />
                  <div className=" text-lg mt-1 font-semibold leading-7 text-black">
                    Discover Matches
                  </div>
                  <div className="mt-1 text-sm leading-5 text-center text-neutral-400 w-[175px]">
                    Swipe through profiles of potential matches. Use the heart
                    icon to express interest and the cross icon to skip. Find
                    users who share your interests and values.
                  </div>
                </div>
                <div className="flex flex-col items-center w-[260px]  mx-auto mt-5 px-10 pt-7 pb-10 bg-white shadow-sm rounded-[250px] max-md:max-w-full ">
                  <img
                    loading="lazy"
                    src="/images/stand-couple.png"
                    className="z-10 self-stretch mt-1 w-[130px] h-[120px] mx-auto aspect-[1.2] "
                  />
                  <div className=" text-lg mt-4 font-semibold leading-7 text-black">
                    Start Connecting
                  </div>
                  <div className="mt-1 text-sm leading-5 text-center text-neutral-400 w-[175px]">
                    Once you find a match, start a conversation through our
                    secure messaging platform. Send texts to get to know your
                    match better.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third block */}
      <div
        ref={Features}
        // style={{ backgroundImage: `url(${"/images/wave.png"})` }}
        className="bg-white relative w-full text-black py-20 max-md:pt-10"
      >
        <div className="flex z-10   flex-col items-center px-20 w-full max-md:max-w-full">
          <div className="text-4xl text-center font-[Ultra] capitalize leading-[62px] max-md:max-w-full max-md:text-3xl max-md:leading-[55px]">
            Explore our Additional <br />
            <span className="text-pink-400">Features</span>.
          </div>
          <div className="flex gap-5 mt-10 capitalize max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="text-xl font-semibold leading-7 text-black max-md:max-w-full">
                <span className="text-pink-400">01.</span> Monetization
              </div>
              <div className="mt-4 leading-5 text-neutral-600 max-md:max-w-full">
                <li>
                  <span className="font-bold">
                    Virtual Gifts & In-App Currency:
                  </span>{" "}
                  Send gifts to interact within the app
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Premium Features:</span> Gain
                  visibility, advanced filters, and more matches.
                </li>
              </div>
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="text-xl font-semibold leading-7 text-black max-md:max-w-full">
                <span className="text-pink-400">02. </span>User Verification &
                Safety
              </div>
              <div className="mt-3 text-base leading-5 text-neutral-600 max-md:max-w-full ">
                <li>
                  <span className="font-bold">Reporting & Moderation:</span>{" "}
                  Maintain a safe environment with reporting and moderation.
                </li>
                <li>
                  <span className="font-bold">Profile Verification: </span>
                  Increase trust with phone number or email verification.
                </li>
                <li>
                  <span className="font-bold">Privacy Settings: </span>Control
                  your profile visibility, block users, and report inappropriate
                  behavior.
                </li>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-10 capitalize max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="text-xl font-semibold leading-7 text-black max-md:max-w-full">
                <span className="text-pink-400">03.</span>Matching &
                Communication
              </div>
              <div className="mt-4 text-base leading-5 text-neutral-600 max-md:max-w-full">
                <li>
                  <span className="font-bold">User Matching :</span> Get
                  suggested matches based on your preferences.
                </li>
                <li>
                  <span className="font-bold">Messaging:</span> Chat with
                  matches through text, voice messages, and video calls.
                </li>
                <li>
                  <span className="font-bold"> Discovery:</span> Explore
                  profiles beyond suggested matches.
                </li>
              </div>
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="text-xl font-semibold leading-7  text-black max-md:max-w-full">
                <span className="text-pink-400">04. </span>Additional Features
                (Optional)
              </div>
              <div className="mt-3 text-base leading-5 text-neutral-600 max-md:max-w-full">
                <li>
                  <span className="font-bold">Location-Based Services: </span>
                  Connect with nearby users
                </li>
                <li>
                  <span className="font-bold"> Age Filtering: </span>Find
                  matches within your preferred age range.
                </li>
                <li>
                  <span className="font-bold">Simplified Profiles: </span>Create
                  a profile with minimal information.
                </li>
                <li>
                  <span className="font-bold">Notifications & Alerts:</span>{" "}
                  Stay informed about app activity.
                </li>
                <li>
                  <span className="font-bold">Premium Subscriptions: </span>
                  Access exclusive features and benefits
                </li>
                <li>
                  <span className="font-bold">User Feedback & Ratings: </span>
                  Share your experience and help improve the app.
                </li>
                <li>
                  <span className="font-bold">Data Privacy & Security: </span>
                  The app protects your data and complies with regulations.
                </li>
                <li>
                  <span className="font-bold">User Analytics:</span>App usage
                  data is used to improve features.
                </li>
                <li>
                  <span className="font-bold">Support & Help Center:</span> Get
                  help whenever you need it.
                </li>
              </div>
            </div>
          </div>
          {/* <div className="flex gap-5 mt-10 capitalize max-md:flex-wrap max-md:mt-10 max-md:pb-[250px]">
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="text-xl font-semibold leading-7 text-black max-md:max-w-full">
                <span className="text-pink-400">05.</span> Lorem ipsum dolor sit
                amet consectetur.
              </div>
              <div className="mt-4 text-base leading-5 text-neutral-400 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Massa arcu neque ornare
                aliquam scelerisque feugiat netus. At pellentesque porttitor a
                viverra vitae mattis non. Sem quam enim volutpat at elit
                molestie.{" "}
              </div>
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="text-xl font-semibold leading-7 text-black max-md:max-w-full">
                <span className="text-pink-400">06. </span>Lorem ipsum dolor sit
                amet consectetur.
              </div>
              <div className="mt-3 text-base leading-5 text-neutral-400 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Massa arcu neque ornare
                aliquam scelerisque feugiat netus. At pellentesque porttitor a
                viverra vitae mattis non. Sem quam enim volutpat at elit
                molestie.
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* fourth block */}
      <div className=" justify-center items-center ">
        <div
          ref={Testimonials}
          className="text-4xl text-center font-[Ultra] mx-4 mt-24 max-md:mt-10 max-md:max-w-full max-md:pb-10 max-md:text-4xl max-md:leading-[55px]"
        >
          Say Hello to
          <span className="text-pink-400"> Love</span>.
        </div>
        <div className="flex max-w-[550px] mx-auto mt-10 gap-5 p-5 text-center ">
          <div className="relative">
            <img src="/images/twoGirl.png" alt="" />
            <div className="">
              <div className=" absolute top-5 -left-[120px] flex flex-col justify-center w-[180px] bg-white shadow-xl rounded-[20px] max-md:-top-[20px] max-md:left-0 max-md:max-w-[140px] ">
                <div className="flex z-10 flex-col py-2 mx-auto items-center  -mt-10 max-w-[50px]">
                  <img
                    loading="lazy"
                    src="/images/girl1.png"
                    className="self-center border-[3px] border-gray-200 rounded-full aspect-square w-[95px]"
                  />
                  <div className="flex gap-2 mt-1 text-sm text-start mx-auto text-black">
                    <div className="grow whitespace-nowrap font-bold font-sans">
                      Alice, 26
                    </div>
                    <img
                      loading="lazy"
                      src="/images/verify.png"
                      className="shrink-0 w-4 h-4 my-auto aspect-square"
                    />
                  </div>
                  <div className="text-xs whitespace-nowrap text-zinc-500">
                    Professional model
                  </div>
                </div>
              </div>
              <div className=" absolute bottom-4 -right-[85px] flex flex-col justify-center w-[180px] bg-white shadow-xl rounded-[20px] max-md:-top-[20px] max-md:right-0 max-md:max-w-[140px] max-md:h-[65px]">
                <div className="flex z-10 flex-col py-2 mx-auto items-center  -mt-10 max-w-[50px]">
                  <img
                    loading="lazy"
                    src="/images/girl2.png"
                    className="self-center border-[3px] border-gray-200 rounded-full aspect-square w-[95px]"
                  />
                  <div className="flex gap-2 mt-1 text-sm text-start mx-auto text-black">
                    <div className="grow whitespace-nowrap self-center font-bold font-sans">
                      Dakota, 30
                    </div>
                    <img
                      loading="lazy"
                      src="/images/verify.png"
                      className="shrink-0 w-4 h-4 my-auto aspect-square"
                    />
                  </div>
                  <div className="text-xs whitespace-nowrap text-zinc-500">
                    Professional model
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5 justify-between  mx-[170px] mt-16 items-start px-5 whitespace-nowrap max-md:flex-wrap max-md:justify-center">
          <div className="flex flex-col ">
            <div className="text-4xl text-center font-[Ultra] text-pink-400 max-md:text-4xl">
              +200M
            </div>
            <div className="self-center mt-7 text-2xl text-black">
              Downloads
            </div>
          </div>
          <div className="border-r-4 h-[130px] border-[#D1C4E9] max-md:hidden"></div>
          <div className="border-b-4  w-full border-[#D1C4E9] lg:hidden"></div>

          <div className="flex flex-col text-center">
            <div className="text-4xl text-pink-400 font-[Ultra] max-md:text-4xl">
              +480M
            </div>
            <div className="self-center mt-7 text-2xl text-black">Matched</div>
          </div>
          <div className="border-r-4 h-[130px] border-[#D1C4E9] max-md:hidden"></div>
          <div className="border-b-4  w-full border-[#D1C4E9] lg:hidden"></div>

          <div className="flex flex-col mt-1.5">
            <div className="text-4xl text-center font-[Ultra] text-pink-400 max-md:text-4xl">
              180M
            </div>
            <div className="self-center mt-7 text-2xl text-black">Ratings</div>
          </div>
        </div>

        {/* <div className="flex flex-col pt-20 md:mx-28 md:p-10  bg-stone-700 bg-opacity-70 md:rounded-[139px] mt-10 max-md:max-w-full  max-md:mt-10">
          <div className="overflow-hidden max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <Slider ref={slider} {...settings}>
              {slide.map((item, idx) => {
                return (
                  <div key={idx}>
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0  ">
                      <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full max-w-[450px]">
                        <img
                          className=" h-full"
                          src="/images/slide1.png"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col w-1/2 ml-5  max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-start mt-7  capitalize leading-[124%] max-md:mr-2.5 max-md:max-w-full">
                          <div className="text-3xl font-[Ultra] text-white max-md:max-w-full max-md:text-4xl">
                            Hear from Our{" "}
                            <span className="text-pink-400">Clients</span>.
                          </div>
                          <div className="mt-12 text-xl font-[Poppins] text-white max-md:mt-10 max-md:max-w-full">
                            Alice, 26 - Professional Model
                          </div>
                        </div>
                        <div className="flex flex-col items-start mt-2 max-md:mt-3 max-md:max-w-full">
                          <div
                            style={{ scrollbarWidth: "none" }}
                            className="self-stretch text-sm font-[Poppins] leading-6 overflow-y-scroll max-h-[200px]  capitalize text-neutral-300 max-md:max-w-full"
                          >
                            "KJLemon completely changed my dating experience.
                            The video authentication feature made it easy to
                            connect with genuine people, and I love how simple
                            and user-friendly the app is. I've met amazing
                            friends and even found my perfect match! With over
                            200 million users, it's incredible to see how many
                            people are finding real connections just like I did.
                            Highly recommended!"
                          </div>
                          <img
                            loading="lazy"
                            src="/images/star.png"
                            className="mt-8 max-w-full aspect-[6.25] w-[241px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div className="flex justify-center gap-3.5 xl:relative xl:-mb-10 -top-10 max-md:mt-10 max-md:py-4 max-lg:py-4">
              <button
                onClick={() => slider.current.slickPrev()}
                style={{ background: "rgba(255, 255, 255, 0.44" }}
                className=" text-2xl text-white rounded-full px-3.5 py-1.5"
              >
                &lt;
              </button>
              <button
                onClick={() => slider.current.slickNext()}
                style={{ background: "rgba(255, 255, 255, 0.44" }}
                className=" text-2xl text-white rounded-full px-3.5 py-1.5"
              >
                &gt;
              </button>
            </div>
          </div>
        </div> */}
        <div ref={FAQ} className="pt-20 md:mx-28 max-md:mx-7">
          <div className=" pb-6 text-4xl text-center font-[Ultra] capitalize leading-[62px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Clearing Your <span className="text-pink-400">Doubts</span>.
          </div>
          <Accordion
            // elevation={0} sx={{ '&:before':{height:'0px'}}}
            expanded={expand === "one"}
            onChange={(event, isExpand) => handleExpand(isExpand, "one")}
            // style={{ backgroundColor: "rgba(245, 30, 154, 0.16)" }}
            className={`mb-4 shadow-none  ${
              expand === "one"
                ? "bg-[#f51e9a] bg-opacity-[0.1]"
                : "bg-[#f0d7d7]"
            }`}
          >
            <AccordionSummary
              expandIcon={
                expand === "one" ? (
                  <RxCross1 className="bg-black rounded-full text-white text-[30px] p-2" />
                ) : (
                  <FaPlus />
                )
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className="font-bold">
                {" "}
                <span className="pr-10 text-[#EF7FBF] text-2xl font-bold">
                  01
                </span>{" "}
                How does KJLemon ensure user authenticity?
              </div>
            </AccordionSummary>
            <AccordionDetails className="pl-20">
              kjLemon enhances security with robust two-factor authentication,
              leveraging both email and SMS OTPs to ensure secure and reliable
              user verification.
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expand === "two"}
            onChange={(event, isExpand) => handleExpand(isExpand, "two")}
            // style={{ backgroundColor: "rgba(245, 30, 154, 0.16)" }}
            className={`mb-4 shadow-none  ${
              expand === "two"
                ? "bg-[#f51e9a] bg-opacity-[0.1]"
                : "bg-[#f0d7d7]"
            }`}
          >
            <AccordionSummary
              expandIcon={
                expand === "two" ? (
                  <RxCross1 className="bg-black rounded-full text-white text-[30px] p-2" />
                ) : (
                  <FaPlus />
                )
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className="font-bold">
                {" "}
                <span className="pr-10 text-[#EF7FBF] text-2xl font-bold">
                  02
                </span>{" "}
                Can I control who sees my profile?
              </div>
            </AccordionSummary>
            <AccordionDetails className="pl-20">
              Yes, KJLemon offers comprehensive privacy settings. You can
              control who can view your profile, hide your location, age, and
              other personal details from specific users, and even block or
              report users if you feel uncomfortable or unsafe.
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expand === "three"}
            onChange={(event, isExpand) => handleExpand(isExpand, "three")}
            // style={{ backgroundColor: "rgba(245, 30, 154, 0.16)" }}
            className={`mb-4 shadow-none  ${
              expand === "three"
                ? "bg-[#f51e9a] bg-opacity-[0.1]"
                : "bg-[#f0d7d7]"
            }`}
          >
            <AccordionSummary
              expandIcon={
                expand === "three" ? (
                  <RxCross1 className="bg-black rounded-full text-white text-[30px] p-2" />
                ) : (
                  <FaPlus />
                )
              }
              aria-controls="panel1-content"
              id="panel1-header"
              // className={`${expand==="three"?"bg-pink-300":"bg-[#FFF3F3]"}`}
            >
              <div className="font-bold">
                {" "}
                <span className="pr-10 text-[#EF7FBF] text-2xl font-bold">
                  03
                </span>{" "}
                What makes KJLemon different from other dating apps?
              </div>
            </AccordionSummary>
            <AccordionDetails className="pl-20">
              KJLemon stands out by prioritizing authenticity, simplicity, and
              meaningful connections. Features like location-based matching, and
              age filtering help users find genuine connections. Additionally,
              our user-friendly interface and robust security measures make the
              dating experience both enjoyable and safe.
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expand === "four"}
            onChange={(event, isExpand) => handleExpand(isExpand, "four")}
            // style={{ backgroundColor: "rgba(245, 30, 154, 0.16)" }}
            className={`mb-4 shadow-none  ${
              expand === "four"
                ? "bg-[#f51e9a] bg-opacity-[0.1]"
                : "bg-[#f0d7d7]"
            }`}
          >
            <AccordionSummary
              expandIcon={
                expand === "four" ? (
                  <RxCross1 className="bg-black rounded-full text-white text-[30px] p-2" />
                ) : (
                  <FaPlus />
                )
              }
              aria-controls="panel1-content"
              id="panel1-header"
              // className={`${expand==="four"?"bg-pink-300":"bg-[#FFF3F3]"}`}
            >
              <div className="font-bold">
                {" "}
                <span className="pr-10 text-[#EF7FBF] text-2xl font-bold">
                  04
                </span>{" "}
                Are there any premium features available on KJLemon?
              </div>
            </AccordionSummary>
            <AccordionDetails className="pl-20">
              Yes, KJLemon offers premium subscription plans that provide
              enhanced features such as video calls, unlimited swipes, can
              withdraw the gift received, you can also turn on and off receipts,
              ad-free browsing, advanced matching options, and priority customer
              support. These features are designed to elevate your dating
              experience and increase your chances of finding the perfect match.
            </AccordionDetails>
          </Accordion>
        </div>
        <div
          ref={Contact}
          style={{ backgroundImage: `url(${"/images/landing-back1.png"})` }}
          className="bg-contain bg-no mt-20  h-full flex max-md:max-w-full max-lg:flex-col justify-between"
        >
          {/* first */}
          <div className="flex md:pl-28 md:pt-20 md:pb-5 flex-col max-lg:p-5 ">
            <div className="w-full text-4xl font-[Ultra] text-white max-md:max-w-full max-md:text-4xl">
              Contact <span className="text-pink-400">Us</span>.
              <div className="flex gap-2 justify-start max-md:flex-wrap">
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
            {/* <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-6">
                    <div className="text-2xl text-white mb-3">First name</div>
                    <input
                      className="outline-none border-none rounded-xl bg-white bg-opacity-10 text-white indent-5 py-4"
                      type="text"
                      placeholder="First name"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-6">
                    <div className="text-2xl mb-3 text-white">Last name</div>
                    <input
                      className="outline-none border-none rounded-xl  bg-white bg-opacity-10 text-white indent-5 py-4"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="mt-5 mb-3 w-full text-2xl text-white max-md:max-w-full">
              Email
            </div>

            <input
              className="outline-none border-none rounded-xl bg-white bg-opacity-10 text-white indent-5 py-4"
              type="text"
              placeholder="Ex JohnDoe214@gmail.com"
            />
            <div className="mt-8 mb-3 w-full text-2xl text-white max-md:max-w-full">
              What can we help you with ?
            </div>
            <textarea
              className="outline-none border-none h-[120px] rounded-xl bg-white bg-opacity-10 text-white pl-5 py-4"
              placeholder="Type here your message"
              name="sffsfs"
            ></textarea>
            <button className="justify-center items-center  py-2 mt-10 w-full text-lg leading-10 text-center text-black capitalize whitespace-nowrap bg-yellow-400 rounded-[100px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              Submit
            </button> */}
          </div>
          {/* second */}
          <div className="relative max-lg:hidden">
            <img
              className="max-w-[35vw] py-5  mt-20 px-10 max-lg:mx-auto "
              src="/images/phones.png"
              alt=""
            />
          </div>
        </div>
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
                    onClick={() => scollHandler(Home)}
                    className="grow my-auto"
                  >
                    Home
                  </div>
                  <div
                    onClick={() => scollHandler(Features)}
                    className="my-auto"
                  >
                    Features
                  </div>
                  <div
                    onClick={() => scollHandler(Testimonials)}
                    className="flex-auto my-auto"
                  >
                    Testimonials
                  </div>
                  <div
                    onClick={() => scollHandler(FAQ)}
                    className="flex-auto my-auto"
                  >
                    FAQ
                  </div>
                  <div
                    onClick={() => scollHandler(Contact)}
                    className="flex-auto my-auto"
                  >
                    Contact
                  </div>
                </div>
                {/* <div className="flex gap-6 justify-between px-5 max-md:flex-wrap">
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
                </div> */}
              </div>
            </div>
            <div className="shrink-0 mt-5 h-px  border-solid bg-white bg-opacity-50 border-white border-opacity-50 max-md:max-w-full" />
            <div className="flex gap-5 mt-7 w-full text-base leading-9 capitalize max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
              <div className="flex-auto text-zinc-400 max-md:max-w-full">
                Copyright © 2024 KJ Lemon Dating App. All Rights Reserved.
              </div>
              <div className="flex gap-5 self-start text-white">
                <a href="/privacy-policy" className="flex-auto">
                  Privacy Policy
                </a>
                <a href="/terms-of-service" className="flex-auto">
                  Terms of Service
                </a>
                <a href="/disclaimer" className="flex-auto">
                  Disclaimer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

const slide = [
  { title: "wmf SDNF", name: "sachin", description: "SDKNsdfnsnfsdf" },
  { title: "wmfddf SDNF", name: "sachin", description: "SDKNsdfnsnfsdf" },
  { title: "wmf56 SDNF", name: "sachin", description: "SDKNsdfnsnfsdf" },
];
