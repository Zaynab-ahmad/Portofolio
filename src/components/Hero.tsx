import Image from 'next/image'
import React from 'react'
import profilePic from "../assets/Zaynab.Gh.Ahmad.jpg";
import Button from '@/ui/Button';

function Hero() {
    const languages = ["JavaScript", "CSS", "HTML5", "Tailwind", "Next", "React" ]
  return (
    <div className="bg-background w-full">
      <div className="container mx-auto flex flex-col justify-around h-[100vh] relative">
        <div className="flex justify-between items-end ">
          <div className="flex flex-col space-y-[30px] w-1/2">
            <div className="flex flex-col space-y-2.5">
              <h1 className="font-extrabold text-[44px] text-white">
                {" "}
                Zaynab Ahmad
              </h1>
              <p className="font-plex leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique dolore esse consectetur. Totam tempora eaque ex
                deleniti alias neque voluptatem reiciendis est, incidunt at quae
                ad voluptas tenetur, aspernatur officiis.
              </p>
            </div>
            <Button text="Lets Get Started" bgColor="bg-[#3F8E00]" />

          </div>
          <div className="flex flex-col justify-center items-center w-1/2">
            <Image
              src={profilePic}
              alt="profilePic"
              width={200}
              height={200}
              className="rounded-full  w-60 h-60 relative"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="">Worked With</p>
          <div className="flex justify-between space-x-4">
            {languages.map((item, i) => (
              <div
                key={i}
                className="border-1 border-gray p-6 text-gray-600 w-full rounded-sm flex items-center justify-center"
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

export default Hero


