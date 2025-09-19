"use client";
import { useEffect } from "react";
import { db } from "../lib/firebase"; // your Firestore db
import { collection, getDocs } from "firebase/firestore";

function DebugFirebase() {
  useEffect(() => {
    const fetchData = async () => {
      const colRef = collection(db, "projects"); // replace with your collection
      const snapshot = await getDocs(colRef);
      snapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    };
    fetchData();
  }, []);

  return (
    <p>debug</p>
  );
}

export default DebugFirebase;
