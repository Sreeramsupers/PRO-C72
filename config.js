import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
	apiKey: 'AIzaSyD932cMpTWQErzvhNn7gpv7c9aLfFPT4dc',
	authDomain: 'library-app-ae1f8.firebaseapp.com',
	projectId: 'library-app-ae1f8',
	storageBucket: 'library-app-ae1f8.appspot.com',
	messagingSenderId: '99299060965',
	appId: '1:99299060965:web:6b498d4f7a316839f9380c',
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
