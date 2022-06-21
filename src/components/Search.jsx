import React, { useState } from 'react'

const Search = ({ setFilteredBooks, books }) => {

  const [term, setTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setFilteredBooks(books.filter(book => book.title.toLowerCase().includes(term.toLowerCase())))
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" name="term" id="term" value={ term } onChange={ e => setTerm(e.target.value) } />
      <input type="submit" value="search" />
    </form>
  )
}

export default Search