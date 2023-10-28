/* eslint-disable no-unused-vars */
import React from "react";

function FormArea() {
  return (
    <>
      <div className="mx-4 md:mx-0 flex flex-col justify-center items-center gap-y-12 mb-16 pt-[140px] lg:pt-0">
        <span className="text-[36px] leading-[36px] md:text-[90px] md:leading-[92px] text-white font-light">
          Partner on <span className="faded-green">Web3</span>
        </span>
        <span className="text-base text-[#DFDFDF] leading-[22px] font-light opacity-80">
          Interested in learning more? Fill out this form to have an team member
          reach out.
        </span>
        <form
          className="flex flex-col md:w-2/4 gap-y-8 w-full"
          data-gtm-form-interact-id="0">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-black text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit"
            name="name"
            data-gtm-form-interact-field-id="0"
          />
          <input
            type="text"
            placeholder="Your Organization"
            className="bg-black text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit"
            name="organization"
            spellCheck="false"
            data-ms-editor="true"
            data-gtm-form-interact-field-id="1"
          />
          <div className="opacity-100">
            <input
              placeholder="Your Email"
              className="bg-black text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit w-full mb-8"
              type="email"
              name="email"
            />

            <textarea
              name="message"
              placeholder="Message"
              className="bg-black text-[20px] mt-8 leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit w-full mb-8"
              spellCheck="false"
              data-ms-editor="true"></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="border-faded-green-lime text-[#FCFCFC] hover:border-faded-green-lime-hover text-base font-light leading-[22px]  px-8 py-4 md:w-2/5 w-full flex justify-center items-center">
              <a
                href="mailto:contactnyoton@gmail.com"
                style={{ width: "100%" }}>
                Submit
              </a>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormArea;
