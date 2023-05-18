// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyCKNYmzCnCcolP9j3Ynx8u3DWq21I6mOLU",
//   authDomain: "toy-marketplace-a9011.firebaseapp.com",
//   projectId: "toy-marketplace-a9011",
//   storageBucket: "toy-marketplace-a9011.appspot.com",
//   messagingSenderId: "994034860966",
//   appId: "1:994034860966:web:e2d37580e2e1b460fbc567"
apiKey:import.meta.env.VITE_apiKey ,
authDomain:import.meta.env.VITE_authDomain ,
projectId:import.meta.env.VITE_projectId ,
storageBucket:import.meta.env.VITE_storageBucket ,
messagingSenderId:import.meta.env.VITE_messagingSenderId ,
appId:import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app