import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../common/Modal";
import CustomLinkButton from "../common/CustomLinkButton";
const ThirdBillboard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  const [isSecondHovered, setIsSecondHovered] = useState(false);
  const [isSlideHovered, setISlideHovered] = useState(false);
  const [showModal, setModelShow] = useState(false);
  const [showSecondModal, setModelSecondShow] = useState(false);
  const handleCloseModal = () => {
    setModelShow(false);
    setModelSecondShow(false);
  };
  return (
    <div className="min-h-[1043px] min-w-[1920px] bg-cover bg-hero_three  bg-no-repeat bg-center text-center relative flex items-center justify-center">
      <Modal
        handleCloseModal={() => {
          setModelShow(false);
        }}
        showModal={showModal}
      />
      <a
        className="block z-20 w-[11px] h-[11px]"
        onClick={() => setModelShow(true)}
        style={{ position: "absolute", left: "87%", top: "48%" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-20 w-20 bg-white/5 rounded-full flex justify-center items-center animation-pulse">
          <div className="h-4 w-4 bg-white rounded-full" />
        </div>
        <span
          className={`text-2xl block bg-white/10 w-[230px] py-2 rounded text-white ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Book Your Packages
        </span>
      </a>
      {/*** Show 2nd pulse circle */}
      <Modal
        handleCloseModal={() => {
          setModelSecondShow(false);
        }}
        showModal={showSecondModal}
      />
      <a
        className="block z-20 w-[11px] h-[11px]"
        onClick={() => setModelSecondShow(true)}
        style={{ position: "absolute", left: "7.8%", top: "48%" }}
        onMouseEnter={() => setIsSecondHovered(true)}
        onMouseLeave={() => setIsSecondHovered(false)}
      >
        <div className="h-20 w-20 bg-white/5 rounded-full flex justify-center items-center animation-pulse">
          <div className="h-4 w-4 bg-white rounded-full" />
        </div>
        <span
          className={`text-2xl block bg-white/10 w-[230px] py-2 rounded text-white ${
            isSecondHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Book Your Packages
        </span>
      </a>

      {/****End 2nd circle */}
      <CustomLinkButton
        top={78}
        left={20}
        text={"Next Billboard"}
        rotate={180}
        link={"/"}
      />
      {/***Previous slide button */}
      <CustomLinkButton
        top={80}
        right={5}
        text={"  Previous Slide"}
        rotate={0}
        link={"/slide"}
      />
    </div>
  );
};

export default ThirdBillboard;
