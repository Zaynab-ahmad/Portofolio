"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import profilePic from "../assets/Zaynab.Gh.Ahmad.jpg";

function Hero() {
  const texts = [
    "Hello I'm Zaynab Ahmad",
    "Front-End Developer",
    "UI/UX Learner",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0); // لمكان الحرف
  const [textIndex, setTextIndex] = useState(0); // لأي جملة
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const interval = setInterval(() => {
      if (!deleting && index < currentText.length) {
        // كتابة
        setDisplayedText((prev) => prev + currentText[index]);
        setIndex((prev) => prev + 1);
      } else if (deleting && index > 0) {
        // مسح
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else if (index === currentText.length) {
        // لما يخلص الكتابة -> يبدأ المسح بعد مهلة
        setTimeout(() => setDeleting(true), 700);
      } else if (index === 0 && deleting) {
        // خلص المسح -> انتقل للجملة اللي بعدها
        setDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [index, deleting, textIndex, texts]);

  const languages = [
    "JavaScript",
    "CSS",
    "HTML5",
    "Tailwind",
    "Next.js",
    "React",
  ];

  return (
    <div id="hero" className="bg-background w-full">
      <div className="container mx-auto flex flex-col justify-around min-h-screen relative pt-20 py-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Text Section */}
          <div className="flex flex-col space-y-6 w-full md:w-1/2 order-2 md:order-1">
            <div className="flex flex-col space-y-2.5">
              <h1 className="font-extrabold text-[32px] md:text-[44px] text-white">
                {displayedText}
                <span className="animate-pulse">|</span>
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
