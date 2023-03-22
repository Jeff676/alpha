import { initializeApp } from "firebase/app"
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB0iubxCPXKIFbZ0ZdGDjECrw0SuMT3rPs",
  authDomain: "alpha-d7749.firebaseapp.com",
  projectId: "alpha-d7749",
  storageBucket: "alpha-d7749.appspot.com",
  messagingSenderId: "474334077728",
  appId: "1:474334077728:web:452e1f3d3d4f6fafef6d45"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)