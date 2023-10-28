/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

function ContactUsFormSection() {
  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_t5d4535",
  //       "template_rldydto",
  //       form.current,
  //       "WnqO_Hqhg2YnJhZGs"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         alert("Submit was succesfully")
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <>
      <div className="mx-4 md:mx-0 flex flex-col justify-center items-center gap-y-12 mb-16 pt-[140px] lg:pt-0">
        <span className="text-[36px] leading-[36px] md:text-[90px] md:leading-[92px] text-white font-light">
          Contact Us
        </span>
        <span className="text-base text-[#DFDFDF] leading-[22px] font-light opacity-80">
          Complete the form below and we will get back to you shortly.
        </span>
        <form
          // ref={form}
          // onSubmit={sendEmail}
          className="flex flex-col w-full md:w-2/4 gap-y-8">
          <div className="opacity-100">
            <input
              placeholder="Your Name"
              className="bg-black text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] placeholder-inherit w-full mb-8 border-b-[#FFFFFFCC]"
              type="text"
              name="to_name"
            />
            <input
              placeholder="Your Email"
              className="bg-black text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit w-full mb-8"
              type="email"
              name="from_name"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="bg-black text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit mb-8 w-full"
              spellCheck="false"
              data-ms-editor="true"></textarea>
          </div>
          <div className="flex justify-center"></div>
        </form>
        <button
          // type="submit"
          className="border-faded-pink flex text-[#FCFCFC] hover:border-faded-pink-pressed text-base font-light leading-[22px] px-8 py-4 md:w-2/5 w-full flex justify-center items-center">
          <a href="mailto:contactnyoton@gmail.com" style={{ width: "100%" }}>
            Submit
            
          </a>

        </button>
      </div>
    </>
  );
}

export default ContactUsFormSection;
