import admin from "firebase-admin";

let apiInitialized = false;

export default function initializeApi() {
  if (apiInitialized) return;
  initializeFirebase();

  apiInitialized = true;
}

function initializeFirebase() {
  if (admin.apps.length < 1) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
        privateKey: process.env.SERVICE_ACCOUNT_PRIVATE_KEY!.replace(
          /\\n/g,
          "\n"
        ),
      }),
    });
  }
}
