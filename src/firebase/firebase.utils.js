import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// API Object
const config = {
    apiKey: "AIzaSyAtDxz_MtsRyLmoZLBJNPBwnnq5_SsTcEo",
    authDomain: "crowndb-db36a.firebaseapp.com",
    databaseURL: "https://crowndb-db36a.firebaseio.com",
    projectId: "crowndb-db36a",
    storageBucket: "crowndb-db36a.appspot.com",
    messagingSenderId: "612875353103",
    appId: "1:612875353103:web:9b9f49c42ff89ba695f77a",
    measurementId: "G-EGPTKQMNTW"
};

// Base imports libraries which we want
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();




// SignInWithGoogle functionality
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);






// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData
//       });
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }
//   }

//   return userRef;
// };



export default firebase;


