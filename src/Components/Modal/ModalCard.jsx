// Import CSS
import '../../Styling/Modalcard.css';

function ModalCard({ product, onClose }) {
    if (!product) return null;

    const handleAddToCart = () => {
        console.log(`${product.name} ditambahkan ke keranjang`);
        onClose();
    };

    return (
        <div className='product-modal'>
            <div className='product-modal-content horizontal'>
                <button
                    className='modal-close'
                    onClick={onClose}
                >
                    <i className='fa fa-times'></i>
                </button>

                <div className='modal-image'>
                    <img src={product.img} alt={product.name} />
                </div>

                <div className='modal-info'>
                    <span className='modal-category'>Buah Segar</span>
                    <h2 className='modal-product-name'>{product.name}</h2>
                    
                    <p className='modal-desc'>
                        {product.desc}
                    </p>
                    
                    <p className='modal-price'>
                        Rp. {Number(product.price).toLocaleString('id-ID')}/kg
                    </p>
                    
                    <button className='add-to-cart' onClick={handleAddToCart}>
                        Pesan Sekarang!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalCard;