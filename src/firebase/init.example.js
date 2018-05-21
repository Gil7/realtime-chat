import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    databaseURL: "you-databse-url",
    projectId: "chat-vue-firebase",
    storageBucket: "xxxxx",
    messagingSenderId: "xxxxx"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()