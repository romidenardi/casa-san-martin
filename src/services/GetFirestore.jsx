import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB3ISTqWLUXeq0QJfhcl-XNhAnFLn_oVNM",
    authDomain: "casa-san-martin.firebaseapp.com",
    projectId: "casa-san-martin",
    storageBucket: "casa-san-martin.appspot.com",
    messagingSenderId: "281888040601",
    appId: "1:281888040601:web:a229efa941f9b3c5e33a08"
};

const catalogue = firebase.initializeApp(firebaseConfig)

export function getFirestore(){    
    return firebase.firestore(catalogue)
}
