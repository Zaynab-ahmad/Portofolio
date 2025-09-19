interface CertificationCardProps {
  title: string;
  description: string;
  certLink: string; // should be a Cloudinary PDF URL
}

export default function CertificationCard({
  title,
  description,
  certLink,
}: CertificationCardProps) {
  return (
    <div className="border border-gray-700 rounded-xl p-6 bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <blockquote className="text-gray-300 italic mb-4">
        <p>“{description}”</p>
      </blockquote>

      {/* PDF Preview */}
    
      {/* View button */}
      <a
        href={certLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-blue-500 hover:underline cursor-pointer "
      >
        View Full Certification
      </a>
    </div>
  );
}
