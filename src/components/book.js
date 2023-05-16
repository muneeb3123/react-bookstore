import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function IndividualBook({ item, id }) {
  const dispatch = useDispatch();
  return (
    <div className="main-div">
      <div className="title-author">
        <h1 className="book-title">{item.title}</h1>
        <p className="book-author">{item.author}</p>
        <div className="action-buttons">
          <button type="submit" className="Buttons comment-button">
            comments
          </button>
          <button type="submit" className="Buttons remove-button" onClick={() => dispatch(removeBook(id))}>
            Remove
          </button>
          <button type="submit" className="Buttons edit-button">
            Edit
          </button>
        </div>
      </div>
      <div className="progress">
        <p className="progress-circle">64% Completed</p>
      </div>
      <div className="chapter">
        <h1 className="chapter-heading">Current Chapter</h1>
        <p className="chapter-show">Chapter 3 of 5</p>
        <button type="submit" className="update-progrees">
          Update progress
        </button>
      </div>
    </div>
  );
}
IndividualBook.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

export default IndividualBook;
