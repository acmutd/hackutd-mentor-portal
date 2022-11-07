import initializeApi from "../firebase/init";
import { firestore } from "firebase-admin";
import { User } from "next-auth";

export async function findMentorByKey(mentorKey: string): Promise<User | null> {
  initializeApi();
  const db = firestore();
  const snapshot = await db
    .collection("/mentors")
    .where("mentorKey", "==", mentorKey)
    .get();
  if (snapshot.empty) return null;
  return snapshot.docs[0].data() as User;
}
