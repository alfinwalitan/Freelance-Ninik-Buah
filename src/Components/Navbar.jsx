import { useState } from 'react';

// Import CSS
import '../Styling/Navbar.css';

function Navbar() {

    // State for Language
    const [language, setLanguage] = useState('ID');
    const [isLangOpen, setIsLangOpen] = useState(false);

    // Function for Language
    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setIsLangOpen(false);
        // Will be Working Soon
    };

    return (
        <div className='navbar-header'>
            <div className='navbar-logo'>
                <h1>Ninik Buah</h1>
            </div>

            <div className='navbar-menus'>
                <ul>
                    <li><a href="/">Beranda</a></li>
                    <li><a href="/">Produk</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Kontak</a></li>
                </ul>
            </div>

            <div className='navbar-menus'>
                <ul>
                    <li className='lang-menu-item'>
                        <div
                            className='lang-wrapper'
                            onClick={() => setIsLangOpen(!isLangOpen)}
                        >
                            <i className='fa-solid fa-globe'></i>
                            <span className='lang-selected-text'>{language}</span>
                            <i className={`fa-solid fa-chevron-down navbar-chevron ${isLangOpen ? 'rotate' : ''}`}></i>

                            {isLangOpen && (
                                <ul className='lang-list'>
                                    <li onClick={() => handleLanguageChange('ID')}>ID</li>
                                    <li onClick={() => handleLanguageChange('EN')}>EN</li>
                                </ul>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;