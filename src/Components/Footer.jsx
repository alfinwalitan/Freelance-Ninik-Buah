// Import CSS
import '../Styling/Footer.css';

function Footer() {
    return(
        <div className='footer-header'>
            <div className='footer-details'>
                <div className='footer-logo'>
                    <h1 className='footer-logo-title'>Ninik Buah</h1>
                    <p className='footer-logo-subtitle'>Belanja Buah Segar Terlengkap, Terjangkau dengan Kualitas Super!</p>
                </div>

                <div className='footer-links'>
                    <div className='footer-col'>
                        <h4>Tautan</h4>
                        <ul>
                            <li><a href='/'>Beranda</a></li>
                            <li><a href='/'>Produk</a></li>
                            <li><a href='/'>Blog</a></li>
                            <li><a href='/'>Kontak</a></li>
                            
                        </ul>
                    </div>

                    <div className='footer-col'>
                        <h4>Lokasi</h4>
                        <ul className='footer-location-detail'>
                            <li><i className='fas fa-location-dot'></i><span>Jl. Brigjend Katamso No.590, Medan.</span></li>
                            <li><i className='fas fa-paper-plane'></i><span>ninikbuah@gmail.com</span></li>
                            <li><i className='fas fa-mobile'></i><span>+6212345678</span></li>
                        </ul>
                    </div>

                    <div className='footer-col'>
                        <h4>Temui Kami!</h4>
                        <ul className='footer-media-social'>
                            <li><i className='fab fa-instagram'></i><span>@ninikbuah.mdn</span></li>
                            <li><i className='fab fa-facebook'></i><span>ninikbuah.mdn</span></li>
                            <li><i className='fab fa-whatsapp'></i><span>+6212345678</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='footer-copyright'>
                <p>
                    Belanja Buah Segar Hanya Disini! Ninik Buah@2026. Semua Hak Dilindungi.
                </p>
            </div>
        </div>
    )
}

export default Footer;