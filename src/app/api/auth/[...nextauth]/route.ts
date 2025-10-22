import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUserByEmail } from "@/lib/users";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const user = findUserByEmail(credentials.email);
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return { id: user.id, email: user.email };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt" as const
  },
  pages: {
    signIn: "/login",
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
