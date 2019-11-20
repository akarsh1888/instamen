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













// SignInWithGoogle functionality function
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);














//Returning Object are:
//Query Reference 
//Query Snapshot

//documentref object methods are: set, get, update, delete
//collectionref object to add documents to collection method are: add
//both can use .get() to get snapshot object.. whether collectn or document
// documentref === returns documentsnapshot object
//collectionref==== returns  querysnapshot object

export const checkingOrCreatingUserDataInDb = async (userAuth, additionalData) => {

    //if userAuth object is null ,just return & do nothing
    if (!userAuth)
    {
        return;
    }

    //checking whether the user with that [uid] exist in db or not
    // this line below, return a [documentref] object, because we r searching for a document
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    //from documntref we get snapshot object,it represents data only, but has 
    //..[exist] property which tells whether exist in db or not

    //hence if not in db then create in db/store in db
    if (!snapShot.exists)
    {
        //what things we will be creating, we destructure from [userAuth] object
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
    try
    {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    }
    catch (error)
    {
      console.log("error creating user", error.message);
    }
        
    }

    

//It will return userref[documentref] object always
  return userRef;
  };



















export default firebase;


