import React, { useState } from 'react';
import Form from './components/Form'
import List from './components/List'

function App() {

  const [books, setBooks] = useState([
    { title: "LOTR", author: "JRR Tolkein", genre: "Fantasy"},
    { title: "Star Wars", author: "George Lucas", genre: "Sci-Fi"},
    { title: "Rosemary", author: "Steven King", genre: "Horror"},
    { title: "Game of Thrones", author: "George Martin", genre: "Fantasy"}
  ]);

  return (
    <div className="App">
      <h1>Welcone to the Book Form / Search Challenge!</h1>
      <Form books={ books } setBooks={ setBooks } />
      <List books={ books } />
    </div>
  );
}

export default App;
