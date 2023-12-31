import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connectToDB } from "@utils/database";

// handle our entire authentication process
// -> We created GoogleProvider from Google Cloude
// -> We created connectToDB for Databse from MongoDB
// -> We cretaed User model for user schema from mongoose
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    // making sure, which user is online
    async session({ session }) {
      try {
        await connectToDB();
        const sessionUser = await User.findOne({
          email: session.user.email,
        });
        // Update the id
        session.user.id = sessionUser._id.toString();
        return session;
      } catch (error) {
        console.error(error);
        return session;
      }
    },

    // create a new user in the database
    async signIn({ profile }) {
      try {
        await connectToDB();
        // check if a user already exist
        const userExists = await User.findOne({
          email: profile.email,
        });
        // if not, create a new user
        if (!userExists)
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };

//https://next-auth.js.org/getting-started/example
