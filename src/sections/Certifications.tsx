"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import CertificationCard from "@/components/CertificationCard";
import SecTitle from "@/ui/SecTitle";

interface Certification {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  createdAt?: any;
}

function Certifications() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const q = query(
      collection(db, "certifications"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const certsData: Certification[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Certification[];

        setCertifications(certsData);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching certifications:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe(); 
  }, []);

  if (loading) return <p>Loading certifications...</p>;

  const displayedCertifications = showAll
    ? certifications
    : certifications.slice(0, 4);

  return (
    <div id="certifications" className=" bg-black text-white">
      <div className="container w-full mx-auto py-20">
        <SecTitle
          title="Certifications"
          description="Here are my professional certifications and achievements."
          dark= {true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {displayedCertifications.map((cert) => (
            <CertificationCard
              key={cert.id}
              title={cert.title}
              description={cert.description}
              certLink={cert.fileUrl}
            />
          ))}
        </div>

        {certifications.length > 4 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-orange-500 font-bold hover:underline"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certifications;
