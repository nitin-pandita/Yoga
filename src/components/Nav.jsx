import React from "react";
import Logo from "../images/logo.png";
import "@fortawesome/fontawesome-free/css/all.css";
const Nav = () => {
    return (
        <nav className="flex justify-around mx-auto container  items-center bg-[#F4F9FC] h-[15vh] sm:flex-wrap lg:h-[50%] sm:justify-center ">
            <div className="flex items-center ">
                <a href="#">
                    <img src={Logo} alt="logo" />
                </a>
            </div>
            <ul className="flex space-x-7 justify-center text-center items-center p-5 sm:w-[80%]">
                <li className="first:ml-12 hover:bg-blue-300 p-3 rounded-lg">
                    <a href="" className="text-xl">
                        Courses and Programs
                    </a>
                </li>
                <li className="hover:bg-blue-300 p-3 rounded-lg">
                    <a href="" className="text-xl">
                        Price
                    </a>
                </li>
                <li className="hover:bg-blue-300 p-3 rounded-lg">
                    <a href="" className="text-xl">
                        Teachers
                    </a>
                </li>
                <li className="hover:bg-blue-300 p-3 rounded-lg">
                    <a href="" className="text-xl">
                        Reviews
                    </a>
                </li>
                <li className="hover:bg-blue-300 p-3 rounded-lg">
                    <a href="" className="text-xl">
                        Contact
                    </a>
                </li>
                <div className="icons p-5 flex">
                    <a
                        href=""
                        className="rounded-full border-2 p-3 transition-all hover:ease-in duration-500
    text-gray-400 hover:bg-pink-500 hover:text-white mx-2 w-10 h-10 flex items-center justify-center"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href=""
                        className="rounded-full border-2 p-3 transition-all hover:ease-in duration-500
    text-gray-400 hover:bg-pink-500 hover:text-white mx-2 w-10 h-10 flex items-center justify-center"
                    >
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a
                        href=""
                        className="rounded-full border-2 p-3 transition-all hover:ease-in duration-500
    text-gray-400 hover:bg-pink-500 hover:text-white mx-2 w-10 h-10 flex items-center justify-center"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>

                <button className="p-3 border-2 border-blue-500 text-blue-600 hover:bg-blue-500 transition hover:text-white duration-500">
                    Get started now <i class="fa-solid fa-arrow-right"></i>
                </button>
            </ul>
        </nav>
    );
};

export default Nav;
