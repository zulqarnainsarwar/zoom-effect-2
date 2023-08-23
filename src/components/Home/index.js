import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../common/Modal";
import CustomLinkButton from "../common/CustomLinkButton";

const MainPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  const [showModal, setModelShow] = useState(false);
  const handleCloseModal = () => {
    setModelShow(false);
  };
  return (
    <div className="overflow-auto">
      <Modal handleCloseModal={handleCloseModal} showModal={showModal} />
      <div className="h-[1043px] w-[1920px] bg-cover bg-hero_image bg-no-repeat bg-center text-center relative flex items-center justify-center overflow-y-scroll overflow-x-scroll">
        <a
          className="block z-20 w-[11px] h-[11px]"
          onClick={() => setModelShow(true)}
          // target="_"
          style={{ position: "absolute", left: "24.8044%", top: "46%" }}
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
            Book an Appointment
          </span>
        </a>
        <CustomLinkButton
          top={46}
          left={90}
          text={"Next Billboard"}
          link={"/slide"}
        />
      </div>
    </div>
  );
};

export default MainPage;
