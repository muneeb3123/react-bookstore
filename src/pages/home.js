import { useSelector } from 'react-redux';
import Booklist from '../components/booklist';
import BookForm from '../components/bookform';

function Home() {
  const { isLoading } = useSelector((state) => state.book);

  if (isLoading) {
    return <h1>loading....</h1>;
  }
  return (
    <div>
      <Booklist />
      <BookForm />
    </div>
  );
}

export default Home;
