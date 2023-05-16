import { useSelector } from 'react-redux';

function Categories() {
  const message = useSelector((store) => store.category);
  return <h1>{message}</h1>;
}

export default Categories;
