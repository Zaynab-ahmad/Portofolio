import Badge from "@/ui/Badge";
import Button from "@/ui/Button";
import Image from "next/image";

interface ProjectCardProps {
  badge: string;
  title: string;
  description: string; // corrected spelling
  color: "orange" | "blue" | "green";
  img: string;
  demoLink?: string;
  gitLink?: string;
  reverse?: boolean; 
}

// خريطة لتحويل اللون إلى فئة Tailwind كاملة (يمكن تخصيص الدرجات)
const colorToBgClass = {
  orange: "bg-orange-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
};

function ProjectCard({
  badge,
  title,
  description,
  color,
  img,
  demoLink,
  reverse = false,
  gitLink,
}: ProjectCardProps) {
  const bgClass = colorToBgClass[color];

  return (
    <div
      className={`w-full flex justify-between items-center gap-6 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="flex flex-col space-y-4 w-1/2">
        <Badge text={badge} color={color} />
        <h3 className="font-bold text-2xl text-black">{title}</h3>
        <p>{description}</p>
        <div className="flex space-x-2">
          {demoLink && (
            <Button
              text="Project Demo"
              bgColor={bgClass}
              onClick={() => window.open(demoLink, "_blank")}
            />
          )}
          {gitLink && (
            <Button
              text="Project Github"
              bgColor={bgClass}
              onClick={() => window.open(gitLink, "_blank")}
            />
          )}
        </div>
      </div>
      <div className="w-1/2 relative h-full">
        {" "}
        {img && (
          <Image
            src={img}
            alt="project image"
            fill
            className="object-cover rounded-lg"
          />
        )}
      </div>
    </div>
  );
}


export default ProjectCard;
