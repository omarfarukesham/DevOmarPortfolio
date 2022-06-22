
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDUwNMiQ0ws3B7ycQ-hxCMcM0DBuVgvdnM",
  authDomain: "devomar-513e3.firebaseapp.com",
  projectId: "devomar-513e3",
  storageBucket: "devomar-513e3.appspot.com",
  messagingSenderId: "988200684022",
  appId: "1:988200684022:web:40f002d39f48a418431fd7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;