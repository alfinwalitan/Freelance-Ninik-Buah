// Import CSS
import '../Styling/News.css';

// Import Motion
import MotionWrapper from '../Components/Motion/MotionWrapper';

function News() {
    return (
        <MotionWrapper delay={0}>
            <div className='news-section'>
                <div className='news-banner'>
                    <h1 className='news-banner-text'>
                        Langganan <span>Newsletter!</span>
                    </h1>

                    <form className='news-subscribe'>
                        <label htmlFor='news-input'></label>

                        <input type='email' className='news-input' placeholder='Masukkan Email Anda...' />
                        <button className='news-button'>
                            Langganan
                        </button>
                    </form>
                </div>
            </div>
        </MotionWrapper>
    )
}

export default News;