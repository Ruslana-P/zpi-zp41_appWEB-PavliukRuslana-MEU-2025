import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa7Y2es2M0zsmkLQxFsw0N6xUXq6ND-kc",
  authDomain: "green-shop-81d57.firebaseapp.com",
  projectId: "green-shop-81d57",
  storageBucket: "green-shop-81d57.firebaseapp.com",
  messagingSenderId: "942170282747",
  appId: "1:942170282747:web:6b28495871e92b5b046e5e",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
export default app;
