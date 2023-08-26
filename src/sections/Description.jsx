import React from "react";
import Background from "../images/description.jpg";
import Button from "../components/Button";
const Description = () => {
  return (
    <div className="container min-h-[85vh]  relative">
      <div className="absolute w-[100%] h-[100%]">
        <img
          className="w-[100%] h-[100%] object-cover relative"
          src={Background}
          alt=""
        />
        <div className="content absolute top-[20%] left-[10%]">
          <h4 className="bg-white rounded-full p-2 w-[50%] text-center">
            <span className="text-pink-600">20% Off</span> for the first 3
            months
          </h4>
          <h1 className="text-7xl my-8 font-bold text-white">
            Empowerment comes <br /> from within
          </h1>
          <p className="text-2xl w-[60%] mb-6 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
            dolores.
          </p>
          <div className="flex justify-between w-[60%] items-center">
            <Button />
            <div className="text-2xl text-white">
              <a
                href=""
                className="hover:text-pink-500 transition duration-150"
              >
                <i class="fa-regular fa-circle-play fa-2xl "></i> Where to Begin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
