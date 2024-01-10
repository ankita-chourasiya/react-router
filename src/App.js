import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/Header';
import NotFound from './components/NotFound';
import { Login } from './components/login';
import ProductList from './components/ProductList';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login/:id" element={<Login />}></Route>
        <Route path="/create_post" element={<CreatePost />}></Route>
        <Route path="/product_list" element={<ProductList />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
