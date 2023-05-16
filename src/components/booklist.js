// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import IndividualBook from './book';

function Booklist() {
  const books = useSelector((state) => state.book);
  return (
    <div className="book-list">
      {books.map((book) => (
        <IndividualBook book={book} key={book.id} id={book.id} />
      ))}
    </div>
  );
}

export default Booklist;
