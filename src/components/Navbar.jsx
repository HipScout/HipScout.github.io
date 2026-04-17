import avatar from '../assets/ava.jpg';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e, hash) => {
        if (location.pathname !== '/') {
            e.preventDefault();
            navigate('/');
            setTimeout(() => {
                const el = document.querySelector(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>&lt;Debjyoti /&gt;</div>
            </div>
            <ul className="nav-links">
                <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
                <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Work Experiences</a></li>
                <li><a href="#opensource" onClick={(e) => handleNavClick(e, '#opensource')}>Open Source</a></li>
                <li><a href="#achievements" onClick={(e) => handleNavClick(e, '#achievements')}>Achievements</a></li>
                <li><a href="#blogs" onClick={(e) => handleNavClick(e, '#blogs')}>Blogs</a></li>
                <li><a href="#talks" onClick={(e) => handleNavClick(e, '#talks')}>Talks</a></li>
                <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact Me</a></li>
                <li>
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} color="#fbbf24" />}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
