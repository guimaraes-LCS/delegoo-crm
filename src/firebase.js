import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDHltD9KoBnh9Z2C5QoJfCT_7IFR7WsHbo",
  authDomain: "delegoo-crm.firebaseapp.com",
  databaseURL: "https://delegoo-crm-default-rtdb.firebaseio.com",
  projectId: "delegoo-crm",
  storageBucket: "delegoo-crm.firebasestorage.app",
  messagingSenderId: "640769710193",
  appId: "1:640769710193:web:9658271a908e4520eae3d0"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);