window.firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// How to connect:
// 1. Open Firebase Console
// 2. Go to Project Settings > General
// 3. Add a web app or use existing one
// 4. Copy values here
// 5. Refresh the website
// 6. Firebase data will sync automatically if configured

window.firebaseConfigReady = false;

if (window.firebaseConfig) {
  const requiredKeys = [
    "apiKey",
    "authDomain",
    "projectId",
    "storageBucket",
    "messagingSenderId",
    "appId",
  ];

  const isSet = requiredKeys.every((key) => {
    const val = window.firebaseConfig[key];
    return val && !String(val).includes("YOUR_");
  });

  window.firebaseConfigReady = isSet;
}






























