// Import CSS
import '../Styling/Product.css';

function Product() {
    return (
        <>
            <div className='our-product-section'>
                <h1 className='our-product-title'>
                    Produk Kami
                </h1>
                <p className='our-product-subtitle'>
                    Kesegaran Harian untuk Anda!
                </p>
            </div>

            <div className='search-bar-container'>
                <input type='text' placeholder='Mencari buah...' className='search-bar'/>
            </div>

            <div className='our-product-card-section'>

            </div>
        </>
    )
}

export default Product;