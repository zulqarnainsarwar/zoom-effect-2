import React from "react";

const Modal = ({ handleCloseModal, showModal }) => {
  return (
    showModal && (
      <div className="left-[calc((100vw-400px)/2)] top-[calc((100vh-400px)/2)] w-[400px] h-[400px] bg-white rounded-xl fixed z-50">
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
    )
  );
};

export default Modal;
