import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDlh_FfVAY7wzN2ZUt7VCR-jxRRhBvbbY",
  authDomain: "fir-login-412706.firebaseapp.com",
  projectId: "firebase-login-412706",
  storageBucket: "firebase-login-412706.appspot.com",
  messagingSenderId: "247129245560",
  appId: "1:247129245560:web:e284581e6880cfea026a8d",
  measurementId: "G-CCKP5PPQRR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

