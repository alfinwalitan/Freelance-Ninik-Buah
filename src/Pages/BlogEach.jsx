import { useNavigate, useParams } from 'react-router-dom';
import Blogs from '../Data/Blog';
import '../Styling/Blogeach.css';

function BlogEach() {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = Blogs.find(b => b.id === parseInt(id));

    if (!blog) {
        return (
            <div className='blog-each-not-found'>
                <h2>Blog tidak ditemukan.</h2>
                <button className='btn-not-found' onClick={() => navigate('/blog')}>← Kembali</button>
            </div>
        );
    }

    const content = blog.content || [];

    return (
        <div className='blog-each-wrapper'>
            <div className='blog-each-hero'>
                <img src={blog.img} alt={blog.title} />
                <div className='blog-each-hero-overlay'>
                    <span className='blog-each-category'>{blog.category}</span>
                </div>
            </div>

            <div className='blog-each-container'>
                <button className='blog-each-back' onClick={() => navigate('/blog')}>
                    <i className='fas fa-arrow-left'></i> Kembali ke Blog
                </button>

                <h1 className='blog-each-title'>{blog.title}</h1>

                <div className='blog-each-meta'>
                    <span><i className='fas fa-user'></i> {blog.author}</span>
                    <span><i className='fas fa-calendar'></i> {blog.date}</span>
                    <span><i className='fas fa-clock'></i> {blog.time}</span>
                </div>

                <div className='blog-each-divider'></div>

                <div className='blog-each-body'>
                    {content.map((block, index) => {
                        if (block.type === 'paragraph') {
                            return <p key={index} className='blog-each-paragraph'>{block.text}</p>;
                        }
                        if (block.type === 'heading') {
                            return <h2 key={index} className='blog-each-heading'>{block.text}</h2>;
                        }
                        if (block.type === 'image') {
                            return (
                                <figure key={index} className='blog-each-figure'>
                                    <img src={block.src} alt={block.alt} />
                                    <figcaption>{block.caption}</figcaption>
                                </figure>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
}

export default BlogEach;