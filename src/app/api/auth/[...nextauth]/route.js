import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import {connectDB } from '../../../../../middleware/mongoose';
import Member from '../../../../../Models/Member';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'jsmith@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        try {
          await connectDB();
          
          const user = await Member.findOne({ email: credentials.email });

          if (!user) {
            return null;
          }

          const isValidPassword = await user.comparePassword(credentials.password);
          if (!isValidPassword) {
            return null;
          }

          return user;
        } catch (error) {
          console.error('Error in authorize: ', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      const sessionUser = await Member.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      session.user.isAdmin = sessionUser.isAdmin;
      return session;
    },
    async signIn({ user, credentials }) {
      try {
        await connectDB();

        const userExists = await Member.findOne({ email: credentials.email });

        if (!userExists) {
          return false; // Do not allow sign in if user does not exist
        }

        return true;
      } catch (error) {
        console.error('Error in signIn: ', error);
        return false;
      }
    },
  },
  pages: {
    signIn: "/login",
    },
});

export { handler as GET, handler as POST };
