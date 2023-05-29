// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW5RoPbTzTm0CUAumahd5-LAyKK9ZjZ5M",
  authDomain: "proyect-react-bcc76.firebaseapp.com",
  projectId: "proyect-react-bcc76",
  storageBucket: "proyect-react-bcc76.appspot.com",
  messagingSenderId: "776606420364",
  appId: "1:776606420364:web:c694d72dea326869bb9aa9",
  measurementId: "G-8369WVFEQE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
