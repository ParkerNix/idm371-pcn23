import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Copy most of this file from Google Firebase
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  }

const app = initializeApp(firebaseConfig, {
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
})
export const db = getFirestore(app)