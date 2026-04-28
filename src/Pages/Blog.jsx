// Import CSS
import '../Styling/Blog.css';

// Import Data
import Blogs from '../Data/Blog';

function Blog() {
    return (
        <>
            <div className='blog-section'>
                <h1 className='blog-section-title'>Blog Terbaru</h1>
                <p className='blog-section-subtitle'>Ikuti Berita dan Informasi Terbaru!</p>
            </div>

            <div className='blog-card-container'>
                {Blogs.map((blog) => (
                    <div className='blog-card' key={blog.id}>
                        <div className='blog-card-img'>
                            <span className='blog-card-category'>{blog.category}</span>
                            <img src={blog.img} alt={blog.title} />
                            <div className='blog-card-img-overlay'></div>
                        </div>

                        <div className='blog-card-content'>
                            <div className='blog-card-meta'>
                                <span>
                                    <i className='fas fa-user'></i> {blog.author}
                                </span>
                                <span>
                                    <i className='fas fa-calendar'></i> {blog.date}
                                </span>
                                <span>
                                    <i className='fas fa-clock'></i> {blog.time}
                                </span>
                            </div>

                            <h3 className='blog-card-title'>{blog.title}</h3>
                            <p className='blog-card-desc'>{blog.desc}</p>

                            <button className='blog-read-more'>
                                Baca Selengkapnya <i className='fas fa-arrow-right'></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Blog;