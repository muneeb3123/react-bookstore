import { useState } from 'react';
import PropTypes from 'prop-types';

function BookForm(props) {
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    const { onSubmit } = props;
    onSubmit({ title, author });
    settitle('');
    setauthor('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="form-title">Add new Book</h3>
      <input type="text" value={title} onChange={(e) => settitle(e.target.value)} className="title" placeholder="Add title" />
      <input type="text" value={author} onChange={(e) => setauthor(e.target.value)} className="author" placeholder="Add Author" />
      <button type="submit" className="submit">Add Book</button>
    </form>
  );
}
BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BookForm;
