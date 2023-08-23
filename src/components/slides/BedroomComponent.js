import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../common/Modal";
import CustomLinkButton from "../common/CustomLinkButton";
const SlidePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  const [isSlideHovered, setISlideHovered] = useState(false);
  const [showModal, setModelShow] = useState(false);
  const handleCloseModal = () => {
    setModelShow(false);
  };
  return (
    <div className="min-h-[1043px] min-w-[1920px] bg-cover bg-hero_two bg-no-repeat bg-center text-center relative flex items-center justify-center">
      <Modal handleCloseModal={handleCloseModal} showModal={showModal} />
      <a
        className="block z-20 w-[11px] h-[11px]"
        onClick={() => setModelShow(true)}
        style={{ position: "absolute", left: "57.2%", top: "42.8%" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-20 w-20 bg-white/5 rounded-full flex justify-center items-center animation-pulse">
          <div className="h-4 w-4 bg-white rounded-full" />
        </div>
        <span
          className={`text-2xl block bg-white/10 w-[300px] py-2 rounded text-white ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Book Your Packages
        </span>
      </a>
      <CustomLinkButton
        top={50}
        left={33}
        text={"Next Billboard"}
        rotate={0}
        link={"/slide/ThirdBillboard"}
      />
      <CustomLinkButton
        top={50}
        left={10}
        text={" Previous Slide"}
        rotate={180}
        link={"/"}
      />
    </div>
  );
};

export default SlidePage;
