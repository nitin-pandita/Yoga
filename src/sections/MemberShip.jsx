import React from "react";

const MemberShip = () => {
  return (
    <div className="container min-h-screen bg-[#F3F8FB] flex justify-center items-center m-auto px-[20vh]">
      <div>
        <h1 className="text-blue-600 text-5xl font-bold">
          Membership <br /> benefits
        </h1>
        <p className="w-[80%] my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          voluptate neque impedit.
        </p>
        <button className="p-3 border-2 border-blue-500 text-blue-600 hover:bg-blue-500 transition hover:text-white duration-500 rounded-sm">
          Read More <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="flex w-[80%] ">
        <div className="two-card w-[50%] h-[80vh] py-10">
          <div className="item1 bg-white shadow-xl h-[58%] flex justify-center flex-col px-5 items-center text-center mb-7 hover:cursor-pointer hover:bg-[#E1A0CC] hover:text-white transition duration-300">
            <i class="fa-solid fa-square-caret-up fa-2xl text-[#1E73BE]"></i>
            <p className="text-2xl text-blue-400 my-5">
              World Class <br />
              Teachers
            </p>
            <p className="text-sm mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              dicta?
            </p>
            <i class="fa-solid fa-arrow-right fa-2xl text-[#1E73BE]"></i>
          </div>
          <div className="item2  bg-white shadow-xl h-[55%] flex justify-center flex-col px-5 items-center text-center">
            <i class="fa-solid fa-cloud fa-2xl text-[#1E73BE]"></i>
            <h3 className="text-2xl text-blue-400 my-5">Execution control</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              dicta?
            </p>
            <i class="fa-solid fa-arrow-right fa-2xl text-[#1E73BE]"></i>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="item2  bg-white shadow-xl h-[60%] w-[60%] flex justify-center flex-col px-5 items-center text-center">
            <i class="fa-solid fa-cloud fa-2xl text-[#1E73BE]"></i>
            <h3 className="text-2xl text-blue-400 my-5">Execution control</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              dicta?
            </p>
            <i class="fa-solid fa-arrow-right fa-2xl text-[#1E73BE]"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
