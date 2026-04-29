import { useState } from 'react';

// Import CSS
import '../Styling/Navbar.css';

function Navbar() {

    // State for Language
    const [language, setLanguage] = useState('ID');
    const [isLangOpen, setIsLangOpen] = useState(false);

    // State for Hamburger
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function Change Language
    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setIsLangOpen(false);
    };

    return (
        <div className='navbar-header'>
            <div className='navbar-logo'>
                <h1>Ninik Buah</h1>
            </div>

            <button
                className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label='Toggle menu'
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {isMenuOpen && (
                <div className='nav-overlay' onClick={() => setIsMenuOpen(false)} />
            )}

            <div className={`navbar-content ${isMenuOpen ? 'open' : ''}`}>
                <div className='navbar-menus'>
                    <ul>
                        <li><a href='/' onClick={() => setIsMenuOpen(false)}>Beranda</a></li>
                        <li><a href='/' onClick={() => setIsMenuOpen(false)}>Produk</a></li>
                        <li><a href='/' onClick={() => setIsMenuOpen(false)}>Blog</a></li>
                        <li><a href='/' onClick={() => setIsMenuOpen(false)}>Kontak</a></li>
                    </ul>
                </div>

                <div className='navbar-socials'>
                    <a href='/' aria-label='Whatsapp'><i className='fa-brands fa-whatsapp'></i></a>
                    <a href='/' aria-label='Instagram'><i className='fa-brands fa-instagram'></i></a>
                    <a href='/' aria-label='Facebook'><i className='fa-brands fa-facebook-f'></i></a>
                </div>

                <div className='navbar-lang'>
                    <div className='lang-wrapper' onClick={() => setIsLangOpen(!isLangOpen)}>
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
                </div>
            </div>
        </div>
    )
}

export default Navbar;