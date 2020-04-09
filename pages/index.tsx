import Head from 'next/head'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import MovieForm from '../components/MovieForm'
import { PrismaClient } from '@prisma/client'
import { Movie } from '../types/movie'

type Movies = {
  movies: Movie[]
}

const Home: React.FC<Movies> = ({ movies }) => (
  <div className="container mx-auto my-8">
    {movies.map((movie) => (
      <div key={movie.id} className="my-4">
        <p className="text-xl">Name: {movie.movieName}</p>
        <p>Director: {movie.director}</p>
        <p>Year Released: {movie.yearReleased}</p>
      </div>
    ))}
    <MovieForm />
  </div>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient()
  const movies = await prisma.movie.findMany()
  return { props: { movies } }
}

export default Home
