// Import necessary modules
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

// Define the NextAuth handler
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          // Make a request to your Django API to validate the credentials
          const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', credentials);

          // Check if the login was successful
          if (response.data && response.data.user) {
            return response.data.user;
          } else {
            return Promise.reject(new Error("Invalid credentials"));
          }
        } catch (error) {
          return Promise.reject(new Error("An error occurred during authentication"));
        }
      }
    })
  ]
});

// Export the NextAuth handler
export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
