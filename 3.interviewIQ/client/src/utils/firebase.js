
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
   authDomain: "fir-1649e.firebaseapp.com",
  projectId: "fir-1649e",
  storageBucket: "fir-1649e.firebasestorage.app",
  messagingSenderId: "59433885869",
  appId: "1:59433885869:web:323d580f8423d49f16a624"
};
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}