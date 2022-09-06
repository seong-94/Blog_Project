import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXwey7B3rwIXCffZ8rMxrorunief_bCP8",
  authDomain: "blogproject-fbd00.firebaseapp.com",
  projectId: "blogproject-fbd00",
  storageBucket: "blogproject-fbd00.appspot.com",
  messagingSenderId: "38307082310",
  appId: "1:38307082310:web:5ed42934e5499262589a47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
