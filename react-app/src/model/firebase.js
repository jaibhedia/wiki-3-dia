// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbYl8_iDlNkT67WZId1UUTXeDTpQovD0g",
  authDomain: "web3wiki-61703.firebaseapp.com",
  projectId: "web3wiki-61703",
  storageBucket: "web3wiki-61703.appspot.com",
  messagingSenderId: "807828188635",
  appId: "1:807828188635:web:5df37150221db0dbef4bfe",
  measurementId: "G-RFWCY6WFDJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;