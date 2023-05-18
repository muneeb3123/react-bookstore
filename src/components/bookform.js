import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  const [category, setcategory] = useState('');

  const addbook = (e) => {
    e.preventDefault();
    dispatch(
      createBook(
        {
          title, author, category,
        },
      ),
    );
    settitle('');
    setauthor('');
    setcategory('');
  };

  return (
    <form
      onSubmit={(e) => addbook(e)}
    >
      <h3 className="form-title">Add new Book</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        className="title"
        placeholder="Add title"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setauthor(e.target.value)}
        className="author"
        placeholder="Add Author"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setcategory(e.target.value)}
        className="category"
        placeholder="Add category"
      />
      <button type="submit" className="submit">
        Add Book
      </button>
    </form>
  );
}

export default BookForm;
