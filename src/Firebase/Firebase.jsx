import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const StartFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBNB3NzR_xH9xEdpAoov7vTpbNogmp8Txw",
        authDomain: "movieweb-c935e.firebaseapp.com",
        projectId: "movieweb-c935e",
        storageBucket: "movieweb-c935e.appspot.com",
        messagingSenderId: "1062059329561",
        appId: "1:1062059329561:web:e71883498e7443cf384288",
        measurementId: "G-B9W5TB3BPS"
      };
      const app = initializeApp(firebaseConfig);
      return getDatabase(app)
      
}
