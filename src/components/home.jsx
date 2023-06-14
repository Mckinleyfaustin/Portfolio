import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Background from '../assets/bg.jpg';

const home = () => {
  return (
    <div name="home" style={{backgroundImage: `url(${Background})`}} className="w-full h-screen bg-[#160e52]">
      {/* Container */}
      <div className="max-w-[575px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#42e648] border-black text-2xl font-bold"> Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#cfd6ee]">
          McKinley Faustin
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#42e648]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#42e648] py-4 max-w-[700px]">
          specializing in building and designing exceptional digital
          experiences. I'm focused on building full responsive softwares and web
          applications.
        </p>
        <div>
        <Link to="work" smooth={true} duration={500}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#42e648] hover:text-[#160e52] hover:border-[#42e648]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default home;
