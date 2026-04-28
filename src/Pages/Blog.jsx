// Import CSS
import '../Styling/Blog.css';

function Blog() {
    return (
        <>
            <div className='blog-section'>
                <h1 className='blog-section-title'>
                    Blog Terbaru
                </h1>
                <p className='blog-section-subtitle'>
                    Ikuti Berita dan Informasi Terbaru!
                </p>
            </div>

            <div className='blog-card-container'>
                <div className='blog-card-img'>
                    <img src="" alt="" />
                </div>

                <div className='blog-card-content'>
                    <h3 className='blog-card-content-desc'>

                    </h3>

                </div>
            </div>
        </>
    )
}

export default Blog;