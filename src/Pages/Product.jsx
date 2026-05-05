import { useState } from 'react';

// Import Link
import { Link } from 'react-router-dom';

// Import CSS
import '../Styling/Product.css';

// Import Card
import Card from '../Components/Card';

// Import Data
import Products from '../Data/Product';

// Import Modal
import ModalCard from '../Components/Modal/ModalCard';

// Import Motion
import MotionCard from '../Components/Motion/MotionCard';
import MotionWrapper from '../Components/Motion/MotionWrapper';

function Product({ limit, showViewMore = false }) {

    // State for Products and View More
    const [products] = useState(Products);
    const [showAll, setShowAll] = useState(false);
    
    // State for Modal
    const [selectedProduct, setSelectedProduct] = useState(null);

    // State for Search
    const [searchInput, setSearchInput] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Function Search
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);
        if (value.trim() === '') {
            setSuggestions([]);
            return;
        }
        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filtered);
    };

    const handleSelectSuggestion = (name) => {
        setSearchInput(name);
        setSelectedName(name);
        setSuggestions([]);
    };

    const displayedProducts = selectedName
        ? products.filter(p => p.name === selectedName)
        : products;

    const visibleProducts = showAll || !limit
        ? displayedProducts
        : displayedProducts.slice(0, limit);

    return (
        <>
            {selectedProduct && (
                <ModalCard
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}

            <MotionWrapper delay={0.1}>
                <div className='our-product-section'>
                    <h1 className='title-h1'>Produk Kami</h1>
                    <p className='subtitle-p'>Kesegaran Harian untuk Anda!</p>
                </div>
            </MotionWrapper>
            
            <MotionWrapper delay={0.1}>
                <div className='search-bar-container'>
                    <input
                        type='text'
                        placeholder='Mencari Buah...'
                        value={searchInput}
                        onChange={handleSearchChange}
                        className='search-bar'
                        autoComplete='off'
                    />
                    {searchInput && (
                        <button className='clear-btn' onClick={() => {
                            setSearchInput('');
                            setSuggestions([]);
                            setSelectedName('');
                        }}>
                            <i className='fa-solid fa-xmark'></i>
                        </button>
                    )}

                    {suggestions.length > 0 && (
                        <ul className='suggestions-list'>
                            {suggestions.map(item => (
                                <li
                                    key={item.id}
                                    onClick={() => handleSelectSuggestion(item.name)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </MotionWrapper>

            <div className='our-product-card-section'>
                {visibleProducts.map(item => (
                    <MotionCard key={item.id}>
                        <Card
                            key={item.id}
                            name={item.name}
                            price={item.price}
                        >
                            <div
                                className='card-image'
                                style={{ cursor: 'pointer' }}
                                onClick={() => setSelectedProduct(item)}
                            >
                                <img src={item.img} alt={item.name} />
                            </div>
                        </Card>
                    </MotionCard>
                ))}

                {showViewMore && !showAll && (
                    <div className='view-more-wrapper'>
                        <Link to='/product/' className='view-more-btn' onClick={() => setShowAll(true)}>
                            Lebih Banyak <i className='fas fa-arrow-right'></i>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default Product;