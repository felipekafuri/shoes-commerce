import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import createUser from '../users/create'
import db from '../../../utils/db'
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
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
        const usersCollection = await db.collection('users').get()
        const userExists = usersCollection.docs.find(user => user)
        if (userExists) {
          db.collection('users')
            .doc(userExists.id)
            .update({
              ...userExists.data()
            })
          return true
        } else {
          await db.collection('users').add({
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            created: new Date().toISOString()
          })

          return true
        }
      } catch {
        return false
      }
    }
  }
})
