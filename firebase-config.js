/**
 * firebase-config.js
 *
 * Firebase Configuration and Initialization using Modular SDK (v10+).
 * Sets up Firebase App, Authentication, and Cloud Firestore.
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBudDcoi0ybnrLpifDJGxYxfdF3eoSpDxM",
  authDomain: "earncash7-f0ecc.firebaseapp.com",
  projectId: "earncash7-f0ecc",
  storageBucket: "earncash7-f0ecc.firebasestorage.app",
  messagingSenderId: "1017767289580",
  appId: "1:1017767289580:web:56ecbedc90fe167d3dbbc9"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Google Provider (Future Use)
const googleProvider = new GoogleAuthProvider();

// Initialize Firestore
const db = getFirestore(app);

// Export Firebase Instances
export {
  app,
  auth,
  db,
  googleProvider,
  sendPasswordResetEmail
};

// Firestore Collection Names
export const USERS_COLLECTION = "users";
export const SPIN_HISTORY_COLLECTION = "spinHistory";
export const DEPOSIT_COLLECTION = "depositRequests";
export const WITHDRAW_COLLECTION = "withdrawRequests";
export const SETTINGS_COLLECTION = "settings";
export const ADMINS_COLLECTION = "admins";
