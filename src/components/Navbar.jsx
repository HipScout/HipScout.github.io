import avatar from '../assets/ava.jpg';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <div className="logo">&lt;Debjyoti /&gt;</div>
            </div>
            <ul className="nav-links">
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Work Experiences</a></li>
                <li><a href="#opensource">Open Source</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#blogs">Blogs</a></li>
                <li><a href="#talks">Talks</a></li>
                <li><a href="#contact">Contact Me</a></li>
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
