import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
        apiKey: "AIzaSyC4C-jK-C9uS3eZ0LKZL6yvKEq_Z3Xk430",
        authDomain: "cocopizzashopdb.firebaseapp.com",
        databaseURL: "https://cocopizzashopdb.firebaseio.com",
        projectId: "cocopizzashopdb",
        storageBucket: "cocopizzashopdb.appspot.com",
        messagingSenderId: "905967465344",
        appId: "1:905967465344:web:a27c9d1ca3c816c7f20765",
        measurementId: "G-15KN59V5GG"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
     if (!userAuth) return;
     
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName: displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user',  error.message)
        }
    }

     return userRef;
};

// export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey);
//     console.log(collectionRef);

//     const batch = firebase.batch();
//     objectsToAdd.forEach(obj => {
//         const newDocRef = collectionRef.doc();
//         console.log(newDocRef)
//         batch.set(newDocRef, obj);
//     });
//    return await batch.commit();
// }

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.replace(/\s/g, '').toLowerCase()),
            id: doc.id,
            title,
            items
        } 
    });
  return  transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.replace(/\s/g, '').toLowerCase()] = collection;
        return accumulator;
    }, {});
    // console.log(transformedCollection);
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
