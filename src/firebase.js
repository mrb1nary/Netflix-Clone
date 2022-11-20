// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBxZ9OJLlvFHaju4BP6uR1ymwOln3ChMec",
//   authDomain: "netflix-react-clone-anubhab.firebaseapp.com",
//   projectId: "netflix-react-clone-anubhab",
//   storageBucket: "netflix-react-clone-anubhab.appspot.com",
//   messagingSenderId: "358562468194",
//   appId: "1:358562468194:web:1fbd9ca85f860ab6631c3b",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
