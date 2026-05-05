import { useState } from 'react';

// Import CSS
import '../Styling/Arrival.css';

// Import Card
import Card from '../Components/Card.jsx';

// Import Modal
import ModalCard from '../Components/Modal/ModalCard.jsx';

// Import Motion
import MotionCard from '../Components/Motion/MotionCard.js';
import MotionWrapper from '../Components/Motion/MotionWrapper.js';

// Import Data
import NewArrival from '../Data/Arrival.js';

function Arrival() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
            {selectedProduct && (
                <ModalCard
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}

            <div className='new-arrival-section'>
                <MotionWrapper delay={0}>
                    <div className='new-arrival-header'>
                        <h1 className='title-h1'>Produk Terbaru</h1>
                        <p className='subtitle-p'>Jelajahi Buah-Buahan Terbaru Kami!</p>
                    </div>
                </MotionWrapper>
            </div>

            <div className='new-arrival-card-section'>
                {NewArrival.map((arrival) => (
                    <MotionCard key={arrival.id}>
                        <Card
                            key={arrival.id}
                            name={arrival.name}
                            price={arrival.price}
                        >
                            <div
                                className='card-image'
                                style={{ cursor: 'pointer' }}
                                onClick={() => setSelectedProduct(arrival)}
                            >
                                {arrival.label && (
                                    <span className='card-label'>{arrival.label}</span>
                                )}
                                <img src={arrival.img} alt={arrival.name} />
                            </div>
                        </Card>
                    </MotionCard>
                ))}
            </div>
        </>
    );
}

export default Arrival;