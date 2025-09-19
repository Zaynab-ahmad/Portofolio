import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA-2t1KlTFrfDlSQQWApIBVIeRKP5d7JnE",
  authDomain: "portofolio-91ba0.firebaseapp.com",
  projectId: "portofolio-91ba0",
  storageBucket: "portofolio-91ba0.appspot.com",
  messagingSenderId: "416353471178",
  appId: "1:416353471178:web:a9fea7859cfad9b13d8233",
  measurementId: "G-GD9G34HH4Z",
};
// Initialize Firebase only once (important for Next.js hot reload)
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);


