import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email } = req.body
    const users = await db.collection('users').get()
    const usersData = users.docs.map(user => user.data())

    if (usersData.some(user => user.email === email)) {
      res.status(400).end()
    } else {
      // const { id } = await db.collection('users').add({
      //   ...req.body,
      //   created: new Date().toISOString()
      // })

      const { id } = await db.collection('users').add({
        id: 'asfgh8475itu',
        name: 'felipe',
        email: 'felipe11.rk@gmail.com',
        created: new Date().toISOString()
      })
      res.status(200).json({ id })
    }
  } catch (e) {
    res.status(400).end()
  }
}
