// Import CSS
import '../Styling/Banner.css';

// Import Link
import { Link } from 'react-router-dom';

// Import Motion
import MotionImage from '../Components/Motion/MotionImage';
import MotionWrapper from '../Components/Motion/MotionWrapper';

// Import Banner Image
import BannerImg from '../Assets/Banner/banner.jpeg';

function Banner() {
    return (
        <div className='banner-section'>
            <MotionImage src={BannerImg} alt='Banner Logo' />
            <div className='banner-text'>
                <MotionWrapper delay={0}>
                    <h3 className='banner-text-category'>Buah Organik</h3>
                </MotionWrapper>
                <MotionWrapper delay={0.1}>
                    <h1 className='banner-text-desc'>
                        <span>Kualitas Super</span>
                        <span>Harga Terjangkau</span>
                    </h1>
                </MotionWrapper>

                <MotionWrapper delay={0.2}>
                    <Link to='/' className='banner-btn'>
                        Belanja Sekarang <i className='fas fa-arrow-right'></i>
                    </Link>
                </MotionWrapper>
            </div>
        </div>
    )
}

export default Banner;