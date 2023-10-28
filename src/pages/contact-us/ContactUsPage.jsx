/* eslint-disable no-unused-vars */
import React from "react";
import ContactUsFormSection from "./ContactUsFormSection";
import Marquee from "../../components/Marquee";

function ContactUsPage() {
  return (
    <>
      <div className="2xl:max-w-[1920px] 2xl:mx-auto">
        <ContactUsFormSection />
        <Marquee/>
      </div>
    </>
  );
}

export default ContactUsPage;
