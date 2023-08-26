import React from "react";
import Background from "../images/yoga6.jpg";
import Button from "../components/Button";
const Contact = () => {
  return (
    <div className="container bg-[#F3F8FB] pt-[15%]">
      <div className="min-h-screen w-[80%] m-auto relative">
        <img src={Background} alt="" />
        <div className="flex justify-center w-[90%] m-auto bg-white absolute h-[40%] bottom-0 left-[5%]">
          <form className="flex justify-between w-[80%] items-center text-center ">
            <div className="info flex flex-col ">
              <input
                type="text"
                className="p-4 outline-none text-xl text-left w-[100%]"
                placeholder="Enter your Name"
              />
              <span className="h-[0.5px] bg-blue-500 w-[100%]"></span>
              <input
                type="number"
                className="my-2 p-1 text-xl outline-none w-[100%]"
                placeholder="Enter you Contact"
              />
              <span className="h-[1px] bg-blue-500 w-[100%] mb-5"></span>
              <button className="px-2 py-4 bg-blue-600 text-xl text-white">
                SEND
              </button>
            </div>
            <div className="info flex flex-col items-start">
              <h1 className="text-6xl text-blue-500 mb-5">
                Are you Interested ?
              </h1>
              <h1 className="text-6xl text-blue-500 mb-5">Contact Us</h1>
              <h5 className="text-xl mb-5">Email us at or call this number</h5>
              <p className="text-2xl text-blue-500">+(123)456-78-90</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
