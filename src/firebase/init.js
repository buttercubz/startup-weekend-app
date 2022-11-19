// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKs1j8XdIBqjbAs2AddV6y14Sk4Wy9KIY",
  authDomain: "startup-weekend-6c105.firebaseapp.com",
  projectId: "startup-weekend-6c105",
  storageBucket: "startup-weekend-6c105.appspot.com",
  messagingSenderId: "727964365897",
  appId: "1:727964365897:web:d388f9b2cfda34ca07fb98",
  measurementId: "G-WLYBWWKRP4",
};

// Initialize Firebase
export const App = initializeApp(firebaseConfig);
export const Auth = getAuth(App);
const analytics = getAnalytics(App);
