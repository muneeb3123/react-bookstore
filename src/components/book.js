import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import ProgressCircle from './progressCircle';

function IndividualBook({ item, id }) {
  const dispatch = useDispatch();
  return (
    <div className="main-div">
      <div className="title-author">
        <p className="category">{item.category}</p>
        <h1 className="book-title">{item.title}</h1>
        <p className="book-author">{item.author}</p>
        <div className="action-buttons">
          <button type="submit" className="Buttons comment-button">
            comments
          </button>
          <button type="submit" className="Buttons remove-button" onClick={() => dispatch(deleteBook(id))}>
            Remove
          </button>
          <button type="submit" className="Buttons edit-button">
            Edit
          </button>
        </div>
      </div>
      <div className="progress-separater">
        <div className="progress">
          <div className="circle" />
          <ProgressCircle percentage={64} />
          <div className="percentage-completed">
            <span className="percentage-complete">64%</span>
            <span className="completed">Completed</span>
          </div>
        </div>
        <span className="separater" />
      </div>
      <div className="chapter">
        <h4 className="chapter-heading">Current Chapter</h4>
        <p className="chapter-show">Chapter 3 of 5</p>
        <button type="submit" className="update-progress">
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
    category: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

export default IndividualBook;
