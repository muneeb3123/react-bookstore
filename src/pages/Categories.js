import { useSelector } from 'react-redux';

function Categories() {
  const { status } = useSelector((store) => store.category);
  return <h1>{ status }</h1>;
}

export default Categories;
