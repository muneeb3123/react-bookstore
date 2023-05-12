import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import Home from './pages/home';
import Navbar from './components/navbar';

function App() {
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
