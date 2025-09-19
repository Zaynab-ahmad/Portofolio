"use client";

interface Project {
  id: string;
  title: string;
  description: string;
  demoLink: string;
  gitLink: string;
  image: string;
  createdAt: any; // Adjust based on your Firestore timestamp handling
}
interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.length === 0 ? (
        <p className="text-gray-500">No projects found.</p>
      ) : (
        projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
                onError={(e) => {
                  e.currentTarget.src = "/fallback-image.jpg"; // Optional: Fallback image
                }}
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md mb-4">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
            {/* Project Details */}
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Demo
              </a>
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
