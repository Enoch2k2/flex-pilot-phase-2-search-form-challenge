import React, { useState } from 'react'

const Form = ({ books, setBooks }) => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")

  const handleSubmit = e => {
    e.preventDefault();

    setBooks([...books, { title, author, genre }])
    setTitle("")
    setAuthor("")
    setGenre("")
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={ title } onChange={ e => setTitle(e.target.value) } />
      </div><br />
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" value={ author } onChange={ e => setAuthor(e.target.value) } />
      </div><br />
      <div>
        <label htmlFor="genre">Genre</label>
        <input type="text" name="genre" id="genre" value={ genre } onChange={ e => setGenre(e.target.value) } />
      </div><br />
      <input type="submit" value="Create Book" />
    </form>
  )
}

export default Form