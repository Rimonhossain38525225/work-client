/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// css
import "./section12.css";
import { NavHashLink } from "react-router-hash-link";

const syleDiv = {
  opacity: 1,
  transform: "none",
};
const Section12 = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);
  return (
    <>
      <div className="mx-12">
        <div className="flex justify-between items-center">
          <span className="text-white text-[90px] leading-[91px] font-normal">
            FAQs
          </span>
          <NavHashLink className="" to="/contact-us#">
            <button className="border-faded-pink py-4 px-8 w-full flex justify-center items-center hover:border-faded-pink-pressed">
              <span className="text-white">Contact Us</span>
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
        <div className=" mt-20">
          <div className="chakra-accordion bg-transparent css-0">
            <div>
              <div style={syleDiv}>
                <div className="chakra-accordion__item css-mwf1ir">
                  <h2
                    onClick={() => {
                      setToggle1(!toggle1);
                      setToggle2(false); // Close other FAQ items
                      setToggle3(false);
                      setToggle4(false);
                      setToggle5(false);
                      setToggle6(false);
                    }}>
                    <button
                      className="chakra-accordion__button bg-black hover:bg-transparent border-t-0 flex items-center css-1k491gn"
                      type="button"
                      id="accordion-button-:r4c:"
                      aria-expanded={toggle1 ? "true" : "false"}
                      aria-controls="accordion-panel-:r4c:"
                      data-index="0">
                      <span className="text-[20px] font-light opacity-40 text-[#FCFCFC] mr-20">
                        01.
                      </span>
                      <span
                        className={
                          toggle1
                            ? "faded-lilac text-[36px] leading-[44px] font-light py-4 css-1eziwv"
                            : "text-[#FCFCFC] opacity-40 text-[36px] leading-[44px] font-light py-4 css-1eziwv"
                        }>
                        What is Nyoton Smart Chain Network?
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="chakra-icon chakra-accordion__icon css-186l2rg"
                        aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    className="chakra-collapse"
                    style={
                      toggle1
                        ? {
                            overflow: "hidden",
                            display: "block",
                            opacity: "1",
                            height: "auto",
                          }
                        : {
                            overflow: "hidden",
                            display: "none",
                            opacity: 0,
                            height: "0px",
                          }
                    }>
                    <div
                      role="region"
                      id="accordion-panel-:r4c:"
                      aria-labelledby="accordion-button-:r4c:"
                      className="chakra-accordion__panel opacity-50 text-[#F6F6F6] font-light text-base leading-[22px] flex w-3/5 css-1hb5ode">
                      <span className="text-[20px] duration-[5s] ease-in-out font-light opacity-40 text-[#FCFCFC] mr-20 invisible">
                        01.
                      </span>
                      Nyoton Smart Chain Network is a Layer 1
                      Ethereum-compatible blockchain network. It is the latest
                      blockchain framework that aims to ensure data security and
                      decentralization through hybrid Proof-of-Stake (PoS) and
                      Proof-of-Sensing (PoSe) validation protocols.
                    </div>
                  </div>
                </div>
              </div>
              <div style={syleDiv}>
                <div className="chakra-accordion__item css-1dy2maw">
                  <h2
                    onClick={() => {
                      setToggle2(!toggle2);
                      setToggle1(false); // Close other FAQ items
                      setToggle3(false);
                      setToggle4(false);
                      setToggle5(false);
                      setToggle6(false);
                    }}>
                    <button
                      className="chakra-accordion__button bg-black hover:bg-transparent border-t-0 css-1k491gn"
                      type="button"
                      id="accordion-button-:r4e:"
                      aria-expanded="false"
                      aria-controls="accordion-panel-:r4e:"
                      data-index="1">
                      <span className="text-[20px] font-light opacity-40 text-[#FCFCFC] mr-20">
                        02.
                      </span>
                      <span
                        className={
                          toggle2
                            ? "faded-lilac text-[36px] leading-[44px] font-light py-4 css-1eziwv"
                            : "text-[#FCFCFC] opacity-40 text-[36px] leading-[44px] font-light py-4 css-1eziwv"
                        }>
                        What is Proof-of-Sensing?
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="chakra-icon chakra-accordion__icon css-186l2rg"
                        aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    className="chakra-collapse"
                    style={
                      toggle2
                        ? {
                            overflow: "hidden",
                            display: "block",
                            opacity: "1",
                            height: "auto",
                          }
                        : {
                            overflow: "hidden",
                            display: "none",
                            opacity: 0,
                            height: "0px",
                          }
                    }>
                    <div
                      role="region"
                      id="accordion-panel-:r4e:"
                      aria-labelledby="accordion-button-:r4e:"
                      className="chakra-accordion__panel opacity-50 text-[#F6F6F6] font-light text-base leading-[22px] flex w-3/5 css-1hb5ode">
                      <span className="text-[20px] font-light opacity-40 text-[#FCFCFC] mr-20 invisible">
                        03.
                      </span>
                      Proof-of-Sensing (PoSe) is a validation protocol utilised
                      by Nyoton Smart Chain to authenticate health data
                      generated by IoT wearable devices. It verifies the
                      authenticity of data and ensures that it comes from real
                      users.
                    </div>
                  </div>
                </div>
              </div>
              <div style={syleDiv}>
                <div className="chakra-accordion__item css-1dy2maw">
                  <h2
                    onClick={() => {
                      setToggle3(!toggle3);
                      setToggle2(false); // Close other FAQ items
                      setToggle1(false);
                      setToggle4(false);
                      setToggle5(false);
                      setToggle6(false);
                    }}>
                    <button
                      className="chakra-accordion__button bg-black hover:bg-transparent border-t-0 flex items-center css-1k491gn"
                      type="button"
                      id="accordion-button-:r4g:"
                      aria-expanded="false"
                      aria-controls="accordion-panel-:r4g:"
                      data-index="2">
                      <span className="text-[20px] font-light opacity-40 text-[#FCFCFC] mr-20">
                        03.
                      </span>
                      <span
                        className={
                          toggle3
                            ? "faded-lilac text-[36px] leading-[44px] font-light py-4 css-1eziwv"
                            : "text-[#FCFCFC] opacity-40 text-[36px] leading-[44px] font-light py-4 css-1eziwv"
                        }>
                        What is Nyoton Coin $(NYT)?
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="chakra-icon chakra-accordion__icon css-186l2rg"
                        aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    className="chakra-collapse"
                    style={
                      toggle3
                        ? {
                            overflow: "hidden",
                            display: "block",
                            opacity: "1",
                            height: "auto",
                          }
                        : {
                            overflow: "hidden",
                            display: "none",
                            opacity: 0,
                            height: "0px",
                          }
                    }>
                    <div
                      role="region"
                      id="accordion-panel-:r4g:"
                      aria-labelledby="accordion-button-:r4g:"
                      className="chakra-accordion__panel opacity-50 text-[#F6F6F6] font-light text-base leading-[22px] flex w-3/5 css-1hb5ode">
                      <span className="text-[20px] font-light opacity-40 text-[#FCFCFC] mr-20 invisible">
                        04.
                      </span>
                      Nyoton Coin ($NYT) is the native cryptocurrency of Nyoton
                      Smart Chain Network. It is used for various purposes
                      within the ecosystem, including staking and rewarding
                      users for contributions.
                    </div>
                  </div>
                </div>
              </div>
              <div style={syleDiv}>
                <div className="chakra-accordion__item css-1dy2maw">
                  <h2
                    onClick={() => {
                      setToggle4(!toggle4);
                      setToggle2(false); // Close other FAQ items
                      setToggle3(false);
                      setToggle1(false);
                      setToggle5(false);
                      setToggle6(false);
                    }}>
                    <button
                      className="chakra-accordion__button bg-black hover:bg-transparent border-t-0 flex items-center css-1k491gn"
                      type="button"
                      id="accordion-button-:r4i:"
                      aria-expanded="false"
                      aria-controls="accordion-panel-:r4i:"
                      data-index="3">
                      <span className="text-[20px] font-light opacity-40 text-[#FCFCFC] mr-20">
                        04.
                      </span>
                      <span
                        className={
                          toggle4
                            ? "faded-lilac text-[36px] leading-[44px] font-light py-4 css-1eziwv"
                            : "text-[#FCFCFC] opacity-40 text-[36px] leading-[44px] font-light py-4 css-1eziwv"
                        }>
                        What is the Burn and Mint Mechanism?
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="chakra-icon chakra-accordion__icon css-186l2rg"
                        aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    className="chakra-collapse"
                    style={
                      toggle4
                        ? {
                            overflow: "hidden",
                            display: "block",
                            opacity: "1",
                            height: "auto",
                          }
                        : {
                            overflow: "hidden",
                            display: "none",
                            opacity: 0,
                            height: "0px",
                          }
                    }>
                    <div
                      role="region"
                      id="accordion-panel-:r4i:"
                      aria-labelledby="accordion-button-:r4i:"
                      className="chakra-accordion__panel opacity-50 text-[#F6F6F6] font-light text-base leading-[22px] flex w-3/5 css-1hb5ode">
                      <span className="text-[20px] font-light opacity-40 text-[#FCFCFC] mr-20 invisible">
                        05.
                      </span>
                      The Burn-and-Mint Economics of $NYT to $VDC relationship
                      is designed to maintain a supply of $NYT that responds to
                      data purchase trends. This equilibrium ensures that the
                      amount of $NYT in circulation remains constant
                      month-to-month, while the amount of $VDC produced by
                      burning $NYT will fluctuate based on the USD price of
                      $NYT.
                    </div>
                  </div>
                </div>
              </div>
              <div style={syleDiv}>
                <div className="chakra-accordion__item css-1dy2maw">
                  <h2
                    onClick={() => {
                      setToggle5(!toggle5);
                      setToggle2(false); // Close other FAQ items
                      setToggle3(false);
                      setToggle1(false);
                      setToggle4(false);
                      setToggle6(false);
                    }}>
                    <button
                      className="chakra-accordion__button bg-black hover:bg-transparent border-t-0 flex items-center css-1k491gn"
                      type="button"
                      id="accordion-button-:r4k:"
                      aria-expanded="false"
                      aria-controls="accordion-panel-:r4k:"
                      data-index="4">
                      <span className="text-[20px] font-light opacity-40 text-[#FCFCFC] mr-20">
                        05.
                      </span>
                      <span
                        className={
                          toggle5
                            ? "faded-lilac text-[36px] leading-[44px] font-light py-4 css-1eziwv"
                            : "text-[#FCFCFC] opacity-40 text-[36px] leading-[44px] font-light py-4 css-1eziwv"
                        }>
                        What is the Decentralized Digital Health (DDH) Platform?
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="chakra-icon chakra-accordion__icon css-186l2rg"
                        aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    className="chakra-collapse"
                    style={
                      toggle5
                        ? {
                            overflow: "hidden",
                            display: "block",
                            opacity: "1",
                            height: "auto",
                          }
                        : {
                            overflow: "hidden",
                            display: "none",
                            opacity: 0,
                            height: "0px",
                          }
                    }>
                    <div
                      role="region"
                      id="accordion-panel-:r4k:"
                      aria-labelledby="accordion-button-:r4k:"
                      className="chakra-accordion__panel opacity-50 text-[#F6F6F6] font-light text-base leading-[22px] flex w-3/5 css-1hb5ode">
                      <span className="text-[20px] font-light opacity-40 text-[#FCFCFC] mr-20 invisible">
                        06.
                      </span>
                      The Decentralised Digital Health (DDH) is a platform
                      within the Nyoton Smart Chain ecosystem that enables
                      researchers and institutions to access authenticated
                      health data generated by IoT devices.
                    </div>
                  </div>
                </div>
              </div>
              <div style={syleDiv}>
                <div className="chakra-accordion__item css-1dy2maw">
                  <h2
                    onClick={() => {
                      setToggle6(!toggle6);
                      setToggle2(false);
                      setToggle3(false);
                      setToggle1(false);
                      setToggle4(false);
                      setToggle5(false);
                    }}>
                    <button
                      className="chakra-accordion__button bg-black hover:bg-transparent border-t-0 flex items-center css-1k491gn"
                      type="button"
                      id="accordion-button-:r4m:"
                      aria-expanded="false"
                      aria-controls="accordion-panel-:r4m:"
                      data-index="5">
                      <span className="text-[20px] font-light opacity-40 text-[#FCFCFC] mr-20">
                        06.
                      </span>
                      <span
                        className={
                          toggle6
                            ? "faded-lilac text-[36px] leading-[44px] font-light py-4 css-1eziwv"
                            : "text-[#FCFCFC] opacity-40 text-[36px] leading-[44px] font-light py-4 css-1eziwv"
                        }>
                        Is my data safe?
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="chakra-icon chakra-accordion__icon css-186l2rg"
                        aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    className="chakra-collapse"
                    style={
                      toggle6
                        ? {
                            overflow: "hidden",
                            display: "block",
                            opacity: "1",
                            height: "auto",
                          }
                        : {
                            overflow: "hidden",
                            display: "none",
                            opacity: 0,
                            height: "0px",
                          }
                    }>
                    <div
                      role="region"
                      id="accordion-panel-:r4m:"
                      aria-labelledby="accordion-button-:r4m:"
                      className="chakra-accordion__panel opacity-50 text-[#F6F6F6] font-light text-base leading-[22px] flex w-3/5 css-1hb5ode">
                      <span className="text-[20px] font-light opacity-40 text-[#FCFCFC] mr-20 invisible">
                        07.
                      </span>
                      Yes, Nyoton Smart Chain prioritises data security and
                      privacy. The use of the NYT-PoSe Encryption Chip ensures
                      that data generated by wearable devices is authenticated
                      and kept anonymous on the blockchain network, ensuring the
                      security of user data.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section12;
