import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCNHs97vDTC_enFb02PbBuTjWeD3VazkCE",
    authDomain: "coderhouse-wtemarinbrunetti.firebaseapp.com",
    projectId: "coderhouse-wtemarinbrunetti",
    storageBucket: "coderhouse-wtemarinbrunetti.appspot.com",
    messagingSenderId: "1007722778417",
    appId: "1:1007722778417:web:b09145926fe070b547aa10",
    measurementId: "G-NZRSV1M4M6"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();