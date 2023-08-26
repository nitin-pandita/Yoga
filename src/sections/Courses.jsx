import React from "react";
import Yoga1 from "../images/yoga1.jpg";
import Yoga2 from "../images/yoga2.jpg";
import Yoga3 from "../images/yoga3.jpg";
import Yoga4 from "../images/yoga4.jpg";
import Yoga5 from "../images/yoga5.jpg";
import Yoga6 from "../images/yoga6.jpg";
import Yoga7 from "../images/yoga7.jpg";
const Courses = () => {
  return (
    <div className="bg-[#F3F8FB]">
      <div className="container flex flex-col justify-center items-center min-h-screen w-[80%] m-auto  ">
        <h1 className="text-6xl font-light text-[#2E69EC] my-[4%]">
          Courses and Program
        </h1>
        <div class="flex flex-wrap justify-center items-center text-center">
          <div class="w-1/3 p-4">
            <img src={Yoga1} alt="Yoga 1 image" />
            <h4 className="text-3xl text-[#1E73BE] font-bold my-3">
              Yoga for Beginners
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              itaque nemo pariatur.
            </p>
          </div>
          <div class="w-1/3 p-4">
            <img src={Yoga2} alt="Yoga 1 image" />
            <h4 className="text-3xl text-[#1E73BE] font-bold  my-3">
              Ashtanga Yoga
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              itaque nemo pariatur.
            </p>
          </div>
          <div class="w-1/3 p-4">
            <img src={Yoga3} alt="Yoga 1 image" />
            <h4 className="text-3xl text-[#1E73BE] font-bold   my-3">
              Yoga for a slim figure
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              itaque nemo pariatur.
            </p>
          </div>
          <div class="w-1/3 p-4">
            <img src={Yoga4} alt="Yoga 1 image" />
            <h4 className="text-3xl text-[#2E69EC] font-bold my-3">
              Yoga for Beginners
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              itaque nemo pariatur.
            </p>
          </div>
          <div class="w-1/3 p-4">
            <img src={Yoga5} alt="Yoga 1 image" />
            <h4 className="text-3xl text-[#2E69EC] font-bold my-3">
              Yoga for Beginners
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              itaque nemo pariatur.
            </p>
          </div>
          <div class="w-1/3 p-4">
            <img src={Yoga6} alt="Yoga 1 image" />
            <h4 className="text-3xl text-[#2E69EC] font-bold my-3">
              Yoga for Beginners
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              itaque nemo pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
