/* eslint-disable no-unused-vars */
import React from "react";

// video
import worldStart1Video from "../../.././assets/videos/niceWorld.mp4";
import { NavHashLink } from "react-router-hash-link";

function Section1() {
  return (
    <>
      <div className="mx-4">
        <div className="grid grid-cols-12 gap-y-12">
          <div
            className="col-span-12 text-white
       leading-tight overflow-hidden text-[40px] sm:text-[80px] pt-20"
          >
            <div className="relative">
              The{" "}
              <div className="animation bg-black">
                <div className="animation-window">
                  <ul className="">
                    <li className="absolute word-item  active faded-green ">
                      Value
                    </li>
                    <li className="absolute word-item  faded-light-blue  ">
                      Ownership
                    </li>
                    <li className="absolute word-item  ">Verification</li>
                    <li className="absolute word-item  ">Potential</li>
                    <li className="absolute word-item  ">Security</li>
                    <li className="absolute word-item  ">Validation</li>
                  </ul>
                </div>
              </div>
            </div>
            &nbsp;&nbsp;of<span className="faded-purple"> Data</span>
          </div>
        </div>
        <div className="col-span-12 mt-6">
          <div className="flex flex-col gap-y-4 align-bottom ">
            <img
              alt="circle image"
              loading="lazy"
              width="28"
              height="28"
              decoding="async"
              data-nimg="1"
              className="lg:ml-8"
              srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle.png&amp;w=32&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle.png&amp;w=64&amp;q=75 2x"
              src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle.png&amp;w=64&amp;q=75"
              style={{ color: "transparent" }}
            />
            <span>
              <span className="text-white text-right line-clamp-1 l">
                Revolutionizing health data management
              </span>
              <span className="text-white">
                through blockchain technology. Nyoton Smart Chain offers a
                secure and transparent platform that directly connects users and
                researchers.
              </span>
            </span>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-between mt-8">
          <a href="#quick-start-mobile">
            <button className="border-faded-purple px-6 py-4 flex items-center hover:border-faded-purple-pressed">
              <span className="text-white font-light">Start mining</span>
              <svg
                width="4"
                height="8"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#FCFCFC"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </a>
        </div>
        <div
          className="absolute"
          data-aos="fade-up"
          data-aos-easing="linear"
          // data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          data-aos-delay="500"
        >
          <video className="videoTag w-full" autoPlay muted loop>
            <source src={worldStart1Video} type="video/mp4" />
          </video>
        </div>
        <div className="grid grid-cols-12 relative mt-[50%] circle-bg bg-contain">
          <div className="h-0.5  bg-white/25 rounded-sm  w-full col-span-12"></div>
          <div className="col-span-6">
            <p className="text-[#979797] font-light text-[10px] mt-3">
              BUILD DATA-DRIVEN SOLUTIONS
            </p>
          </div>
          <div className="col-span-6">
            <p className="text-[#979797] font-light text-[10px] mt-3 text-right">
              NYOTON SMART CHAIN
            </p>
          </div>
          <div className="col-span-12 mt-[60px] grid grid-cols-12 text-white z-[9000]">
            <div
              className="col-span-12"
              style={{ opacity: 1, transform: "none" }}
            >
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-span-12 mb-12"
              >
                <p className="text-[24px] leading-[30px] mb-2 font-light">
                  Nyoton Smart Chain is the first&nbsp;
                  <span className="faded-lilac font-light">
                    heartbeat-powered blockchain
                  </span>
                  .
                </p>
                <p className="text-[24px] text-[#FCFCFC] leading-[30px] opacity-60 font-light">
                  Designed to provide users with access to rewards
                  <span className="faded-lilac">&nbsp;from the data&nbsp;</span>
                  they generate through wearable device usage.
                </p>
              </div>
            </div>
            {/* heartSvg  */}
            <div className="col-span-12 mt-8"></div>
            <div
              className="col-span-12"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="col-span-12 mb-20">
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="mb-8 text-[#AFAFAF] font-light indent-8"
                >
                  Nyoton Smart Chain (NYT)&apos;s platform anonymises
                  users&apos; data in a decentralized digital health (DDH)
                  platform, fuelling medical research and scientific discoveries
                  to create better solutions for tomorrow.
                </p>
                <NavHashLink to="/get-started-vsc#">
                  <button
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="border-faded-purple px-10 py-4 w-full flex justify-center items-center hover:border-faded-purple-pressed"
                  >
                    <span className="text-white">Learn More</span>
                    <img
                      alt="Arrow right"
                      loading="lazy"
                      width="4"
                      height="8"
                      decoding="async"
                      data-nimg="1"
                      className="ml-4"
                      src="https://www.vyvo.com/shapes/arrow-right.svg"
                      style={{
                        color: "transparent",
                        objectFit: "contain",
                        objectPosition: "left center",
                      }}
                    />
                  </button>
                </NavHashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
