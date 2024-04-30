
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { connectDB } from "./lib/db"
import { User } from "./models/user";
 
export const {handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
        clientId: process.env.AUTH_GOOGLE_ID!,
        clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      })
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({  account, profile }) {
      if (account?.provider === "google") {
          await connectDB();
          try {
            const user = await User.findOne({email:profile?.email})
            if (!user) {
              const newUser = await User.create({
                username: profile?.preferred_username,
                fullname:profile?.name,
                email: profile?.email,
                profilePhoto: profile?.picture,
              })
              await newUser.save();
            }
            return true;
          } catch (error) {
            throw error
          }
      }
      return false
    }}


})