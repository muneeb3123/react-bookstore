// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import IndividualBook from './book';

function Booklist() {
  const { items } = useSelector((state) => state.book);
  return (
    <div className="book-list">
      {items.map((item) => (
        <IndividualBook item={item} key={item.id} id={item.id} />
      ))}
    </div>
  );
}

export default Booklist;
