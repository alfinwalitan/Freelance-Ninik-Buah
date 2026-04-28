// Import All 
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Arrival from './Pages/Arrival';
import Banner from './Pages/Banner';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import News from './Pages/News';
import Product from './Pages/Product';
import Service from './Pages/Service';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Arrival />
      <Service />
      <Product />
      <News />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;