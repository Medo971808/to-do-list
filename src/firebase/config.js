
import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCPO2Qmya6_BbVgfyzflZKRrB5pKdAdpMY",
  authDomain: "todolist-70416.firebaseapp.com",
  projectId: "todolist-70416",
  storageBucket: "todolist-70416.appspot.com",
  messagingSenderId: "908692210630",
  appId: "1:908692210630:web:6dc60f83b16c5231f828c7"
}

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const timestamp = serverTimestamp()

export { db, auth, timestamp }
