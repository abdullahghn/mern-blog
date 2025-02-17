import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getEnv } from '@/helpers/getEnv';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEnv('VITE_FIREBASE_API'),
  authDomain: "yt-mern-blog-f39d8.firebaseapp.com",
  projectId: "yt-mern-blog-f39d8",
  storageBucket: "yt-mern-blog-f39d8.firebasestorage.app",
  messagingSenderId: "836069941406",
  appId: "1:836069941406:web:b4503bc02707ae200c1b8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }