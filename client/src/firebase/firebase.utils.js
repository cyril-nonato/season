import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBlKHVUg49TaAusAOtqAeBCZ89xwLXwHp4",
  authDomain: "phone-db-6eaa0.firebaseapp.com",
  databaseURL: "https://phone-db-6eaa0.firebaseio.com",
  projectId: "phone-db-6eaa0",
  storageBucket: "phone-db-6eaa0.appspot.com",
  messagingSenderId: "56112019128",
  appId: "1:56112019128:web:16d2fd83f51c107534e64d"
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData
      })
    } catch (error) {
      console.log('Error', error.message)
    }
  }

  return userRef;
}

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const objRef = collectionRef.doc(obj.id);

    batch.set(objRef, obj);
  });

  return await batch.commit();
}

export const convertQuerySnapshotToObj = querySnapshot => {
  if(querySnapshot.empty) {
    throw new Error('No such file')
  }
  const convertedCollection = querySnapshot.docs
    .map(doc => {
      const { items, brand } = doc.data();

      return {
        id: doc.id,
        routeName: encodeURI(brand.toLowerCase()),
        brand,
        items,
      }
    });
  return convertedCollection.reduce((accu, doc) => {
    accu[doc.brand.toLowerCase()] = doc;

    return accu;
  } ,{});
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' });

export {firebase};