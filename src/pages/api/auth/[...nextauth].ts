import NextAuth, {  NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";
import Credentials from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";
import { string } from "zod";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
   callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  }, 
 /*  session:{
    strategy:"jwt"
  }, */
  
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
 

    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "email", type: "email", placeholder: "your@mail.com" },
        password: { label: "Password", type: "password" , placeholder: "password"}
      },
       authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const  { email, password } = credentials as {
          email:string;
          password:string;

        }
  
        
      }
    }),
    GoogleProvider({
       clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET 
   
    }),  
  ],
  
 
};

 export default NextAuth(authOptions);



/*   function GoogleProvider(arg0: {
  clientId: string | undefined;
  clientSecret: string | undefined;
}): import("next-auth/providers").Provider {
  throw new Error("Function not implemented.");
}   */


