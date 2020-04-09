import Head from 'next/head'
import MovieForm from '../components/MovieForm'
import { PrismaClient } from '@prisma/client'

const Home = ({ movies }) => (
  <div className="container">
    {movies.map((movie) => (
      <div key={movie.id}>
        <p>Name: {movie.movieName}</p>
        <p>Director: {movie.director}</p>
        <p>Year Released: {movie.yearReleased}</p>
      </div>
    ))}
    <MovieForm />
  </div>
)

export const getServerSideProps = async () => {
  const prisma = new PrismaClient()
  const movies = await prisma.movie.findMany()
  return { props: { movies } }
}

export default Home
