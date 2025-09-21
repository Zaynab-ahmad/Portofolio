import Badge from "@/ui/Badge";
import Button from "@/ui/Button";
import Image from "next/image";

interface ProjectCardProps {
  badge: string;
  title: string;
  description: string;
  color: "orange" | "blue" | "green";
  img: string;
  demoLink?: string;
  gitLink?: string;
  reverse?: boolean;
}

// Map color to Tailwind classes
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
      className={`w-full flex flex-col lg:flex-row justify-between items-center gap-6 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="flex flex-col space-y-4 w-full lg:w-1/2">
        <Badge text={badge} color={color} />
        <h3 className="font-bold text-2xl text-black">{title}</h3>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
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

      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-64 relative mt-4 lg:mt-0">
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
