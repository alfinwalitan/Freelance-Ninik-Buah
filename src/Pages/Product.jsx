import { useState } from 'react';

// Import CSS
import '../Styling/Product.css';

// Import Card
import Card from '../Components/Card';

// Import Data
import Products from '../Data/Product';

function Product({ limit, showViewMore = false }) {
    const [products] = useState(Products);
    const [showAll, setShowAll] = useState(false);

    // Search Handler
    const [searchInput, setSearchInput] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [suggestions, setSuggestions] = useState([]);

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
            <div className='our-product-section'>
                <h1 className='our-product-title'>
                    Produk Kami
                </h1>
                <p className='our-product-subtitle'>
                    Kesegaran Harian untuk Anda!
                </p>
            </div>

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
                    <button
                        className='clear-btn'
                        onClick={() => {
                            setSearchInput('');
                            setSuggestions([]);
                            setSelectedName('');
                        }}
                    >
                        <i className='fa-solid fa-xmark'></i>
                    </button>
                )}

                {suggestions.length > 0 ? (
                    <ul className='suggestions-list'>
                        {suggestions.map(item => (
                            <li key={item.id} onClick={() => handleSelectSuggestion(item.name)}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    searchInput && !products.some(p => p.name === searchInput) && (
                        <ul className='suggestions-list'>
                            <li className='no-search-results'>
                                Tidak Ada Hasil untuk '<strong>{searchInput}</strong>'
                            </li>
                        </ul>
                    )
                )}
            </div>

            <div className='our-product-card-section'>
                {visibleProducts.map(item => (
                    <Card
                        key={item.id}
                        name={item.name}
                        price={item.price}
                    >
                        <div className='card-image'>
                            <img src={item.img} alt={item.name} />
                        </div>
                    </Card>
                ))}

                {showViewMore && !showAll && (
                    <div className='view-more-wrapper'>
                        <button
                            className='view-more-btn'
                            onClick={() => setShowAll(true)}
                        >
                            Lebih Banyak <i className='fas fa-arrow-right'></i>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Product;