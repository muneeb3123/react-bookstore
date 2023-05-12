import React, { useState } from 'react';
import Booklist from '../components/booklist';
import BookForm from '../components/bookform';

function Home() {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <Booklist books={books} />
      <BookForm onSubmit={addBook} />
    </div>
  );
}

export default Home;
