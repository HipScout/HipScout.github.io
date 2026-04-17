import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import travelPosts from '../data/travelData';

const TravelPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = travelPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="travel-not-found">
                <h2>Post not found</h2>
                <button onClick={() => navigate('/')} className="btn btn-primary">
                    Go Home
                </button>
            </div>
        );
    }

    return (
        <article className="travel-post">
            <div className="travel-hero">
                <img src={post.coverImage} alt={post.title} className="travel-hero-image" />
                <div className="travel-hero-overlay">
                    <button
                        onClick={() => navigate('/')}
                        className="travel-back-btn"
                        aria-label="Back to home"
                    >
                        <FaArrowLeft /> Back to Home
                    </button>
                    <div className="travel-hero-content">
                        <div className="travel-hero-meta">
                            <span><FaMapMarkerAlt /> {post.location}</span>
                            <span><FaCalendarAlt /> {post.date}</span>
                        </div>
                        <h1 className="travel-hero-title">{post.title}</h1>
                    </div>
                </div>
            </div>

            <div className="travel-body">
                <div className="travel-content">
                    <div className="travel-tags-header">
                        {post.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>

                    <div className="travel-description">
                        {post.description.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>

                    <div className="travel-highlights">
                        <h2>✨ Highlights</h2>
                        <ul className="highlights-list">
                            {post.highlights.map((item, i) => (
                                <li key={i}>
                                    <FaCheckCircle className="highlight-icon" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="travel-footer">
                    <button
                        onClick={() => navigate('/')}
                        className="btn btn-primary travel-home-btn"
                    >
                        <FaArrowLeft /> Back to All Posts
                    </button>
                </div>
            </div>
        </article>
    );
};

export default TravelPost;
