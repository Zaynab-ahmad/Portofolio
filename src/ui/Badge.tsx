interface BadgeProps {
  text: string;
  color: "orange" | "blue" | "green";
}

function Badge({ text, color }: BadgeProps) {
  let background = "";
  let textColor = "";

  if (color === "orange") {
    background = "bg-[#FFF6E9]";
    textColor = "text-[#FFA217]";
  } else if (color === "blue") {
    background = "bg-[#D0E6FF]";
    textColor = "text-[#000AFF]";
  } else if (color === "green") {
    background = "bg-[#E0FFF8]";
    textColor = "text-[#2AB090]";
  }

  return (
    <div
      className={`p-2.5 rounded-[60px] font-plex font-bold text-[12px] w-fit ${background} ${textColor}`}
    >
      {text}
    </div>
  );
}

export default Badge;
