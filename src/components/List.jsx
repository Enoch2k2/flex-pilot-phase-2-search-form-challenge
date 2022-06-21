import React, { useState, useEffect } from 'react'
import ListItem from './ListItem';
import Search from './Search';

const List = ({ books }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(books)
  }, [ books ])

  const bookCards = filteredBooks.map((book, idx) => <ListItem key={ idx } book={ book } />)
  return (
    <div>
      <h1>List Books</h1>
      <Search setFilteredBooks={ setFilteredBooks } books={ books } />
      { bookCards }
    </div>
  )
}

export default List