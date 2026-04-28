// Import CSS
import '../Styling/Banner.css';

// Import Banner Image
import BannerImg from '../Assets/Banner/banner.jpeg';

function Banner() {
    return (
        <div className='banner-section'>
            <img src={BannerImg} alt='Banner Logo' />
            <div className='banner-text'>
                <h3 className='banner-text-category'>Buah Organik</h3>
                <h1 className='banner-text-desc'>
                    <span>Kualitas Super</span>
                    <span>Harga Terjangkau</span>
                </h1>

                <button className='banner-btn'>
                    Belanja Sekarang <i className='fas fa-arrow-right'></i>
                </button>
            </div>
        </div>
    )
}

export default Banner;