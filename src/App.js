import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import Pages
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Arrival from './Pages/Arrival';
import Blog from './Pages/Blog';
import BlogEach from './Pages/BlogEach';
import Contact from './Pages/Contact';
import News from './Pages/News';
import Product from './Pages/Product';
import Service from './Pages/Service';

// Import Scroll to Top
import ScrollToTop from './Components/ScrollToTop';

// Import Layout
import Layout from './Layouts/Layouts';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div style={{ paddingTop: '80px'}}>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/arrival' element={<Arrival />} />
          <Route path='/service' element={<Service />} />
          <Route path='/product' element={<Product />} />
          <Route path='/news' element={<News />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogEach />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>404 - Halaman tidak ditemukan</h1>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;