import fireBase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBICbRJHEZxkrCjN7Asriilbe6iystm438",
    authDomain: "discord-clone-9870e.firebaseapp.com",
    databaseURL: "https://discord-clone-9870e.firebaseio.com",
    projectId: "discord-clone-9870e",
    storageBucket: "discord-clone-9870e.appspot.com",
    messagingSenderId: "441996571482",
    appId: "1:441996571482:web:bed5c0ee4088cc958b3963"
  };
  const firebaseApp = fireBase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = fireBase.auth()
  const provider = new fireBase.auth.GoogleAuthProvider()
  export {auth,provider}
  export default db