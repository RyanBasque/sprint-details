import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC00qP_vBenxr-eg7BiYee-OIRbhNtgygQ",
  authDomain: "sprint-details.firebaseapp.com",
  projectId: "sprint-details",
  storageBucket: "sprint-details.appspot.com",
  messagingSenderId: "199172981241",
  appId: "1:199172981241:web:0282164c0b2d74788c7d28",
  measurementId: "G-BNZC68RV20",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

auth.languageCode = "pt-BR";

export { auth };
