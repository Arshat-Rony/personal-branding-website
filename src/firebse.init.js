// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADE016T53-T7zSt-wkaulmmz6YlSu_QUM",
    authDomain: "emily-jhonson-services.firebaseapp.com",
    projectId: "emily-jhonson-services",
    storageBucket: "emily-jhonson-services.appspot.com",
    messagingSenderId: "1042808373899",
    appId: "1:1042808373899:web:ccedb271355ba8f4434a8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;