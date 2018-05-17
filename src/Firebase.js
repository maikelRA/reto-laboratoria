import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBQXH9cS5IEVuO3AFau8NgXBBA1Y_MozAY",
    authDomain: "laboratoria-db.firebaseapp.com",
    databaseURL: "https://laboratoria-db.firebaseio.com",
    projectId: "laboratoria-db",
    storageBucket: "",
    messagingSenderId: "1011429846936"
};

firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
