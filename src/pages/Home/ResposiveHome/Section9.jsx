/* eslint-disable no-unused-vars */
import React from "react";

// css
import "./section9.css";
import { NavHashLink } from "react-router-hash-link";
function Section9() {
  return (
    <>
      <div className="mx-4 mt-8">
        <div className="huge-dots-left"></div>
        <div className="huge-dots-right">
          <div className="grid grid-cols-12 gap-y-10 relative top-[-100px]">
            <div className="col-span-12">
              <span className="text-[36px] text-[#FCFCFC] leading-[34px] font-light">
                Join the&nbsp;
                <span className="faded-pink-tertiary">Worldwide Community</span>
              </span>
            </div>
            <div className="col-span-12 text-base font-light leading-[22px] text-[#FCFCFC] opacity-50">
              Join a fast-growing community that is creating an ecosystem that
              ensures data ownership, privacy, and unlocking data monetization
              for users.
            </div>
            <div
              className="col-span-12"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="col-span-12 grid grid-cols-12">
                <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-y-8">
                  <a
                    className="col-span-6"
                    href="https://twitter.com/nyotonwealth"
                  >
                    <button className="text-base font-normal text-[#FCFCFC] leading-[21px] hover:faded-lilac flex justify-center items-center">
                      Twitter
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
                  </a>

                  <NavHashLink className="col-span-6" to="/contact-us#">
                    <button className="text-base font-normal text-[#FCFCFC] leading-[21px] hover:faded-lilac flex justify-center items-center">
                      Contact-us
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
                  <a className="col-span-6" href="https://t.me/nyotonwealth">
                    <button className="text-base font-normal text-[#FCFCFC] leading-[21px] hover:faded-lilac flex justify-center items-center">
                      Telegram
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section9;
