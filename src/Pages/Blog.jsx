// Import CSS
import '../Styling/Blog.css';

// Import Navigate
import { useNavigate } from 'react-router-dom';

// Import Motion
import MotionWrapper from '../Components/Motion/MotionWrapper';

// Import Data
import Blogs from '../Data/Blog';

function Blog() {
    const navigate = useNavigate();

    return (
        <>
            <MotionWrapper className='blog-banner' type='banner'>
                <div className='blog-section'>
                    <h1 className='title-h1'>Blog Terbaru</h1>
                    <p className='subtitle-p'>Ikuti Berita dan Informasi Terbaru!</p>
                </div>
            </MotionWrapper>

            <div className='blog-card-container'>
                {Blogs.map((blog) => (
                    <MotionWrapper>
                        <div className='blog-card' key={blog.id}>
                            <div className='blog-card-img' key={blog.id} onClick={() => navigate(`/blog/${blog.id}`)}>
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

                                <button 
                                    className='blog-read-more'
                                    onClick={() => navigate(`/blog/${blog.id}`)}
                                >
                                    Baca Selengkapnya <i className='fas fa-arrow-right'></i>
                                </button>
                            </div>
                        </div>
                    </MotionWrapper>
                ))}
            </div>
        </>
    );
}

export default Blog;