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













/*
----Returning Object are:
Query Reference    eg. firestore.doc/collection('user/userId')

// [documentRef] object methods are: set(), get(), update(), delete()
// [collectionRef] object can be used to add [documents] to the [collection] using method : add()

// both can use .get() to get snapshot object.. whether collectn or document

// [documentRef] === returns [documentSnapshot] object
The [documentSnapshot] object allows us to check if a document exists at this query using the [.exist()] property
if that data exist it can be accessed using [.data()] mehtod
We can also get the actual properties on the object by calling the [.data()] method, which returns us a [JSON]
object of the document.


 eg. firestore.collection('user')
// [collectionRef]==== returns [querySnapshot] object
The [querySnapshot] object can be used to check if there r any documents in the collection by calling [.empty()] property

We can get all the documents in the collection by calling the [.docs] property.It returns an array of our documents
as [documentSnapshot] objects.


*/


export const checkingOrCreatingUserDataInDb = async (userAuth, additionalData) => {

    //if userAuth object is null ,just return & do nothing
    if (!userAuth)
    {
        return;
    }


  
  // Practice code for collections
  /*
  const collectionRef = firestore.collection('users');
  const collectionSnapshot = collectionRef.get();

  //---we will print the array of each document data inside that collection
  console.log({ collection: collectionSnapshot.docs.map( docSnapshot => docSnapshot.data()) } );
     
  */
  

  
    //checking whether the user with that [uid] exist in db or not
    // this line below, return a [documentref] object, because we r searching for a document
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //from documntref we get snapshot object,it represents data only, but has 
    //..[exist] property which tells whether exist in db or not
    const snapShot = await userRef.get();

    //hence if not in db then create in db/store in db
    if (!snapShot.exists)
    {
        //what things we will be creating, we destructure from [userAuth] object
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
    try
    {
      // asking to create a document in db with these details
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











/*

// for one time usage, function for storing shopdata into firebase nosql db
   For storing shop data into firebase nosql db without manually typing

export const addCollectionAndDocuments = async (collectionKey, collectionsAsArrayValues) => {

  const collectionRefObj = firestore.collection(collectionKey);
  console.log(collectionRefObj);

//  for doing many [set] calls fully or none..if internet stops between
  const batchobj = firestore.batch();
  
  collectionsAsArrayValues.forEach(valueobj => {
    const docRefObj = collectionRefObj.doc();
    console.log(docRefObj);
    batchobj.set(docRefObj, valueobj);
  });

  return await batchobj.commit();

};


*/











export default firebase;


