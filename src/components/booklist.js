import PropTypes from 'prop-types';
import IndividualBook from './book';

function Booklist(props) {
  const { books } = props;
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <IndividualBook book={book} key={book.id || index} />
      ))}
    </div>
  );
}

Booklist.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Booklist;
