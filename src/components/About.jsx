import React from "react";
import Background from '../assets/bg.jpg';

const About = () => {
  return (
    <div name="about" style={{backgroundImage: `url(${Background})`}} className="w-full h-screen bg-[#160e52] text-gray-200">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl inline border-b-4 border-[#42e648]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-12">
          <div className="sm:text-right text-3xl font-bold">
            <p className="">
            "If, at first, you do not succeed, call it version 1.0" 
            <span className="sm:text-right text-2xl"> Khayri R.R. Woulfe</span>
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
