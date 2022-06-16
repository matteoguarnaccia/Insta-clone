// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAa0mC4eA62eMAB7HULet1MMGszv00zNaw',
  authDomain: 'instagram-cbf40.firebaseapp.com',
  projectId: 'instagram-cbf40',
  storageBucket: 'instagram-cbf40.appspot.com',
  messagingSenderId: '513429826089',
  appId: '1:513429826089:web:c1f1caf9d855db26ca4a38',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
