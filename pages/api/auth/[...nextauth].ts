import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findMentorByKey } from "../../../lib/auth/valid-mentor";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Mentor Key",
      credentials: {
        mentorKey: {
          label: "Mentor Key",
          type: "password",
          placeholder: "Enter your mentor key here",
        },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const mentor = await findMentorByKey(credentials.mentorKey);
        return mentor;
      },
    }),
  ],
  adapter: FirestoreAdapter({
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  }),
  secret: process.env.NEXTAUTH_SECRET!,
  session: {
    strategy: "jwt",
  },
});
