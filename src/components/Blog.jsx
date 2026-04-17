import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import travelPosts from '../data/travelData';

const Blog = () => {
    const navigate = useNavigate();

    return (
        <section id="blogs" className="section blog-section">
            <h2 className="section-title">Travel <span className="gradient-text">Diaries</span></h2>
            <p className="blog-subtitle">
                When I'm not coding, I'm exploring. Here are some places that left a mark on my soul.
            </p>
            <div className="blog-grid">
                {travelPosts.map((post, index) => (
                    <article
                        key={post.id}
                        className="blog-card"
                        onClick={() => navigate(`/travel/${post.slug}`)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        role="link"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && navigate(`/travel/${post.slug}`)}
                    >
                        <div className="blog-card-image">
                            <img src={post.coverImage} alt={post.title} loading="lazy" />
                            <div className="blog-card-overlay">
                                <span className="blog-read-more">
                                    Read Story <FaArrowRight />
                                </span>
                            </div>
                        </div>
                        <div className="blog-card-content">
                            <div className="blog-card-meta">
                                <span className="blog-location">
                                    <FaMapMarkerAlt /> {post.location}
                                </span>
                                <span className="blog-date">
                                    <FaCalendarAlt /> {post.date}
                                </span>
                            </div>
                            <h3 className="blog-card-title">{post.title}</h3>
                            <p className="blog-card-summary">{post.summary}</p>
                            <div className="blog-card-tags">
                                {post.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Blog;
