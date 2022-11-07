import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    mentorKey: string;
    name: string;
    email: string;
    role: "admin" | "mentor";
  }
  interface Session {
    user: User;
  }
}
