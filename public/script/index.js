// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIwzxvlLd9UTZXC_qc3fqZ9Qarifhjzcs",
  authDomain: "school-openhouse.firebaseapp.com",
  projectId: "school-openhouse",
  storageBucket: "school-openhouse.appspot.com",
  messagingSenderId: "321971868041",
  appId: "1:321971868041:web:66ddb25a464ab8ea11d158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getUser(db) {
    const User = collection(db, 'users');
    const userSnapshot = await getDocs(User);
    const userList = userSnapshot.docs.map(doc => doc.data());
    return userList;
};

const User = await getUser(db)

console.log(User)