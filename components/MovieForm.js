import React from "react"
import { useForm } from "react-hook-form"

const MovieForm = () => {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => {
    fetch('http://localhost:3000/api/movies', {
      method: 'POST',
      body: JSON.stringify({ ...values, yearReleased: Number(values.yearReleased) }),
    })
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="director"
        type="text"
        ref={register({
          required: 'Required',
        })}
      />
      {errors.director && errors.director.message}

      <input
        name="movieName"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.movieName && errors.movieName.message}

      <input
        name="yearReleased"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.yearReleased && errors.yearReleased.message}

      <button type="submit">Submit</button>
    </form>
  )
}

export default MovieForm
