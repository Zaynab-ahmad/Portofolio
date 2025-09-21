import Image from "next/image";
import React from "react";
import profilePic from "../assets/Zaynab.Gh.Ahmad.jpg";

function Hero() {
  const languages = ["JavaScript", "CSS", "HTML5", "Tailwind", "Next.js", "React"];

  return (
    <div className="bg-background w-full">
      <div className="container mx-auto flex flex-col justify-around min-h-screen relative py-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Text Section */}
          <div className="flex flex-col space-y-6 w-full md:w-1/2 order-2 md:order-1">
            <div className="flex flex-col space-y-2.5">
              <h1 className="font-extrabold text-[32px] md:text-[44px] text-white">
                Zaynab Ahmad
              </h1>
              <p className="font-plex leading-6 text-gray-300">
                I am a passionate{" "}
                <span className="font-semibold text-white">
                  Front-End Developer
                </span>{" "}
                with experience building responsive and user-friendly web
                applications. Currently, I am expanding my skills through{" "}
                <span className="font-semibold text-white">
                  UI/UX design training
                </span>{" "}
                to create interfaces that are not only functional but also
                engaging. Alongside my technical background, I also have
                professional experience in{" "}
                <span className="font-semibold text-white">translation</span>{" "}
                and{" "}
                <span className="font-semibold text-white">
                  article writing
                </span>
                , which sharpened my communication skills and attention to
                detail.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center w-full md:w-1/2 order-1 md:order-2">
            <Image
              src={profilePic}
              alt="profilePic"
              width={240}
              height={240}
              className="rounded-full w-48 h-48 md:w-60 md:h-60 object-cover"
            />
          </div>
        </div>

        {/* Worked With Section */}
        <div className="flex flex-col space-y-4 mt-10 w-full">
          <p className="text-white font-medium">Worked With</p>
          <div className="flex space-x-4 pb-2 w-full overflow-x-scroll hide-scrollbar">
            {" "}
            {/* Add 'hide-scrollbar' here */}
            {languages.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 grow-1 min-w-[150px] border border-gray-600 px-6 py-3 text-gray-300 rounded-md text-sm md:text-base flex items-center justify-center text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
