// Import CSS
import '../Styling/Service.css';

// Import Motion
import MotionWrapper from '../Components/Motion/MotionWrapper';

// Import Data
import Services from '../Data/Service';

function Service() {
    return (
            <>
                <MotionWrapper delay={0}>
                    <div className='our-service-section'>
                        <div className='our-service-header'>
                            <h1 className='title-h1'>
                                Pelayanan Kami
                            </h1>
                            <p className='subtitle-p'>
                                Mitra Layanan Terpercaya Anda!
                            </p>
                        </div>
                    </div>
                </MotionWrapper>

                <div className='service-card-section'>
                    {Services.map((service, index) => (
                        <MotionWrapper key={index} delay={0}>
                            <div className='service-card' key={index}>
                                <img src={service.img} alt={service.name} />
                                <h3 className='our-service-name'>
                                    {service.name}
                                </h3>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </>
        )
}

export default Service;