/* eslint-disable no-unused-vars */
import React from "react";
import { NavHashLink } from "react-router-hash-link";

import videoImage from "../../../assets/videos/buy.mp4";

function Section2() {
  return (
    <>
      <div className="square-dots-bg mt-20">
        <div className="mx-4">
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="grid grid-cols-12">
              <div className="col-span-12 grid grid-cols-12">
                <div
                  data-aos="fade-up"
                  data-aos-duration="400"
                  className="col-span-12 pb-12"
                >
                  <div className="flex text-[36px] text-white font-light">
                    <span className="">
                      <span className="text-[#7C7C7C] text-[2.5rem] lg:mr-20">
                        {"//"}
                      </span>
                      <span className="faded-light-blue leading-[36px] tracking-[-2%]">
                        How&nbsp;
                      </span>
                      NYT
                    </span>
                  </div>
                  <div className="flex text-[36px] text-white font-light leading-[36px] tracking-[-2%]">
                    <span className="faded-light-blue">Gathers </span>{" "}
                    &nbsp;Data
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-delay="300"
                className="col-span-12 lg:block"
              >
                <video
                  className="videoTag w-full lg:w-[737px] xl:w-[720px]"
                  autoPlay
                  muted
                  loop
                  // src="https://www.vyvo.com/videos/atom-loop.mp4"
                >
                  <source src={videoImage} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
