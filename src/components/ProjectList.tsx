// "use client";

// interface Project {
//   id: string;
//   title: string;
//   description: string;
//   demoLink: string;
//   gitLink: string;
//   image: string;
//   createdAt: any;
// }
// interface ProjectListProps {
//   projects: Project[];
// }

// export default function ProjectList({ projects }: ProjectListProps) {
//   return (
//     <div className="flex flex-col gap-6">
//       {projects.length === 0 ? (
//         <p className="text-gray-500">No projects found.</p>
//       ) : (
//         projects.map((project) => (
//           <div
//             key={project.id}
//             className="flex flex-col lg:flex-row border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
//           >
//             {/* Image */}
//             {project.image ? (
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full md:w-48 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-4"
//                 onError={(e) => {
//                   e.currentTarget.src = "/fallback-image.jpg";
//                 }}
//               />
//             ) : (
//               <div className="w-full md:w-48 h-48 bg-gray-200 flex items-center justify-center rounded-md mb-4 md:mb-0 md:mr-4">
//                 <span className="text-gray-500">No Image</span>
//               </div>
//             )}
//             {/* Project Details */}
//             <div className="flex-1">
//               <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <div className="flex space-x-4">
//                 <a
//                   href={project.demoLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   Demo
//                 </a>
//                 <a
//                   href={project.gitLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
