import { FaChevronRight } from "react-icons/fa6";

interface ButtonProps {
  text: string;
  bgColor?: string; // يمكن أن يكون اسم فئة Tailwind كامل
  onClick?: () => void;
}

function Button({ text, onClick, bgColor = "bg-[#3F8E00]" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`justify-self-start px-16 py-6 ${bgColor} text-white rounded-sm text-base flex justify-center items-center cursor-pointer font-bold font-plex gap-2.5  hover:brightness-90`}
    >
      {text}
      <FaChevronRight />
    </button>
  );
}

export default Button;
