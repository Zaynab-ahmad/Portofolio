"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ProjectCard from "@/components/ProjectCard";
import SecTitle from "@/ui/SecTitle";

interface Project {
  id: string;
  type: string;
  title: string;
  description: string;
  demoLink?: string;
  gitLink?: string;
  image: string;
  createdAt?: any;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData: Project[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Project[];

        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;

  // show only first 3 unless showAll is true
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="container w-full mx-auto py-20">
      <SecTitle
        title="Case Studies"
        description="Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <div className="grid grid-cols-1 gap-20 mt-6">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            badge={project.type}
            title={project.title}
            description={project.description}
            color="orange"
            img={project.image}
            demoLink={project.demoLink}
            gitLink={project.gitLink}
            reverse={index % 2 === 1}
          />
        ))}
      </div>

      {projects.length > 3 && (
        <div className="mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-orange-500 font-bold hover:underline"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;
