// Import CSS
import '../Styling/Arrival.css';

// Import Card
import Card from '../Components/Card.jsx';

// Import Data
import NewArrival from '../Data/Arrival.js';

function Arrival() {
    return (
        <>
            <div className='new-arrival-section'>
                <div className='new-arrival-header'>
                    <h1 className='new-arrival-title'>Produk Terbaru</h1>
                    <p className='new-arrival-subtitle'>Jelajahi Buah-Buahan Terbaru Kami!</p>
                </div>
            </div>

            <div className='new-arrival-card-section'>
                {NewArrival.map((arrival) => (
                    <Card
                        key={arrival.id}
                        name={arrival.name}
                        price={arrival.price}
                    >
                        <div className='card-image'>
                            {arrival.label && (
                                <span className='card-label'>{arrival.label}</span>
                            )}
                            <img src={arrival.img} alt={arrival.name} />
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Arrival;