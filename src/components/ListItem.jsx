import React from 'react'

const ListItem = ({ book }) => {
  return (
    <div>
      <h3>{ book.title }</h3>
      <p>By: { book.author }</p>
      <p>Genre: { book.genre }</p>
    </div>
  )
}

export default ListItem