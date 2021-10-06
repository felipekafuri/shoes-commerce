import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  database: process.env.MONGODB_URI,
  callbacks: {
    async session(session, user) {
      try {
        session.id = user.id
        return Promise.resolve(session)
      } catch (error) {
        return {
          ...session,
          activeSubscription: null
        }
      }
    },
    async signIn(user, account, profile) {
      try {
        console.log(user, account, profile)
        return true
      } catch {
        return false
      }
    }
  }
})
