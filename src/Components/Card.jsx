// Import CSS
import '../Styling/Card.css';

function Card({ label, img, name, price, children }) {
    return (
        <div className='card-header'>
            {children}
            <h3 className='card-name'>{name}</h3>
            <p className='card-price'>Rp. {Number(price).toLocaleString('id-ID')}/kg</p>
        </div>
    );
}

export default Card;