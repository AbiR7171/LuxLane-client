// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMIl65GG8rkxMGGtF46MdIgtZaY3B4Km4",
  authDomain: "luxlane-client.firebaseapp.com",
  projectId: "luxlane-client",
  storageBucket: "luxlane-client.appspot.com",
  messagingSenderId: "1003110846154",
  appId: "1:1003110846154:web:d2541c9de12c4386e6ee33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;