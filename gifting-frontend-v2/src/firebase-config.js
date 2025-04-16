import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoJt658AqNHduqcVjCxvSSn8Gou2VrEXI",
  authDomain: "gifting-3ca50.firebaseapp.com",
  projectId: "gifting-3ca50",
  storageBucket: "gifting-3ca50.appspot.com",
  messagingSenderId: "625907950157",
  appId: "1:625907950157:web:2ce56c5f72cb8b3c00f204"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();