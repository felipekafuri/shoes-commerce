import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const usersCollection = await db.collection('users').get()

    const users = usersCollection.docs.map(user => user.data())

    res.status(200).json(users)
  } catch (e) {
    res.status(400).end()
  }
}
