import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCy3UPjE6WV6lryPMUMQ_M1U7jcE4dESoA",
  authDomain: "selfdesignapp.firebaseapp.com",
  projectId: "selfdesignapp",
  databaseURL: "https://selfdesignapp.firebaseio.com",
  storageBucket: "selfdesignapp.appspot.com",
  messagingSenderId: "140749139992",
  appId: "1:140749139992:web:6cc7cf226df0a4878dd36d"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();


