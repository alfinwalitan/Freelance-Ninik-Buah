// Import Pages
import Arrival from '../Pages/Arrival';
import Banner from '../Pages/Banner';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import News from '../Pages/News';
import Product from '../Pages/Product';
import Service from '../Pages/Service';

function Layout() {
    return (
        <>
            <Banner />
            <Arrival />
            <Service />
            <Product limit={7} showViewMore={true} />
            <News />
            <Blog />
            <Contact />
        </>
    );
}

export default Layout;