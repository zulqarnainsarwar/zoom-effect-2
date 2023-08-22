import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      {showModal && (
        <div className="w-[600px] h-[400px] bg-white relative rounded-xl ">
          <div className="">
            <button
              class="absolute top-2 right-3 text-xl bg-transparent cursor-pointer text-black "
              onClick={handleCloseModal}
            >
              &times;
            </button>

            <h2 className="text-center text-4xl font-semibold	font-sans pt-4 bg-gradient-to-r from-teal-300 to-purple-500 text-transparent bg-clip-text ">
              Book an Appointment
            </h2>
            <form class="px-8 pt-8">
              <div className="mb-6">
                <input
                  className="shadow appearance-none border rounded w-[90%] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-6">
                <input
                  class="shadow appearance-none border rounded w-[90%] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Enter Your Email"
                />
              </div>
              <div class="mb-6">
                <input
                  className="shadow appearance-none border rounded w-[90%] pb-16 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="text"
                  type="text"
                  placeholder="Enter Your Text Here"
                />
              </div>
              <div className="flex items-center justify-between ml-8">
                <button
                  class="bg-blue-500 hover:bg-blue-700   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
      <span
        className="border border-white h-6 w-6 transition-all duration-500   text-white flex items-center justify-between ease-in-out font-bold "
        style={{
          borderRadius: "12.5px",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px 0px",
          textShadow: "rgba(0, 0, 0, 0.3) 0px 0px 10px",
          width: "24px",
          position: "absolute",
          right: "0px",
          top: "50%",
          left: "33%",
          cursor: isArrowHovered ? "pointer" : "default",
        }}
        onMouseEnter={() => setIsArrowHovered(true)}
        onMouseLeave={() => setIsArrowHovered(false)}
      >
        <span
          className="block absolute"
          style={{ top: "6px", left: "auto", right: "5px" }}
        >
          <svg
            width="13"
            height="11"
            viewBox="0 0 13 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            className={`rotate-180	 ${isArrowHovered ? "cursor-pointer" : ""}`}
          >
            <line
              x1="11.7052"
              y1="4.77742"
              x2="6.8748"
              y2="9.60777"
              strokeWidth="2"
            ></line>
            <path d="M10.2912 4.77745L6.89487 1.38135" strokeWidth="2"></path>
            <line
              x1="10.5151"
              y1="5.45581"
              x2="0.998047"
              y2="5.45581"
              strokeWidth="2"
            ></line>
          </svg>
        </span>
        <Link to="/slide/ThirdBillboard">
          <span
            className={`block  transition-opacity duration-500 ease-in-out antialiased     ${
              isArrowHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{
              whiteSpace: "nowrap",
              position: "absolute",
              top: "0px",
              lineHeight: "1",
              padding: "3px 22px 3px 15px",
              right: "0px",
              left: "auto",
            }}
          >
            Next Billboard
          </span>
        </Link>
      </span>
      <span
        className="border border-white h-6 w-6 transition-all duration-500   text-white flex items-center justify-between ease-in-out font-bold "
        style={{
          borderRadius: "12.5px",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px 0px",
          textShadow: "rgba(0, 0, 0, 0.3) 0px 0px 10px",
          width: "24px",
          position: "absolute",
          right: "0px",
          top: "50%",
          left: "10%",
          cursor: isSlideHovered ? "pointer" : "default",
        }}
        onMouseEnter={() => setISlideHovered(true)}
        onMouseLeave={() => setISlideHovered(false)}
      >
        <span
          className="block absolute"
          style={{ top: "6px", left: "auto", right: "5px" }}
        >
          <svg
            width="13"
            height="11"
            viewBox="0 0 13 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            className={`rotate-180	 ${isSlideHovered ? "cursor-pointer" : ""}`}
          >
            <line
              x1="11.7052"
              y1="4.77742"
              x2="6.8748"
              y2="9.60777"
              strokeWidth="2"
            ></line>
            <path d="M10.2912 4.77745L6.89487 1.38135" strokeWidth="2"></path>
            <line
              x1="10.5151"
              y1="5.45581"
              x2="0.998047"
              y2="5.45581"
              strokeWidth="2"
            ></line>
          </svg>
        </span>
        <Link to="/">
          <span
            className={`block  transition-opacity duration-500 ease-in-out antialiased     ${
              isSlideHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{
              whiteSpace: "nowrap",
              position: "absolute",
              top: "0px",
              lineHeight: "1",
              padding: "3px 22px 3px 15px",
              right: "0px",
              left: "auto",
            }}
          >
            Previous Slide
          </span>
        </Link>
      </span>
    </div>
  );
};

export default SlidePage;
