import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getStatus } from './redux/categories/categories.slice';
import Categories from './pages/Categories';
import Home from './pages/home';
import Navbar from './components/navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatus());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
