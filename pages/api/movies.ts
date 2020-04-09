import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { Movie } from '../../types/movie'

const prisma = new PrismaClient()

export default async function (req: NextApiRequest, res: NextApiResponse<Movie>) {
  if (req.method === 'POST') {
    const { body } = req
    const movie = await prisma.movie.create({ data: JSON.parse(body) })
    res.json(movie)
  }
}
