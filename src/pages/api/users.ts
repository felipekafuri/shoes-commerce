import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const users = [
    { id: 1, name: 'felipe' },
    { id: 2, name: 'juan' }
  ]
  return res.json(users)
}
