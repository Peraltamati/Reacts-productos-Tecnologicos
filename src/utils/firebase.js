
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6QvAOx3P7CyN7oy_PUJw0u-xyaPU_DmA",
  authDomain: "productotecnologicos-3c6e0.firebaseapp.com",
  projectId: "productotecnologicos-3c6e0",
  storageBucket: "productotecnologicos-3c6e0.appspot.com",
  messagingSenderId: "708475694473",
  appId: "1:708475694473:web:a38b69704522ab4c838558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);