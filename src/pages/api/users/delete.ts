import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query

    const usersCollection = await db.collection('users').get()

    const user = usersCollection.docs.find(user => user.data().id === id)

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }
    user.ref.delete()
    res.status(200).json({ message: 'User deleted' })
  } catch (e) {
    res.status(400).end()
  }
}
