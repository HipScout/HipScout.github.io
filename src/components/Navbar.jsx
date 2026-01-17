
import avatar from '../assets/ava.jpg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                {/* Keeping avatar as per previous user preference, or purely logo based on reference? 
                    Reference had text logo "<Saad Paste />". User asked "add this photo to image section" separately.
                    Result: keeping avatar + text for personal touch. */}
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
                {/* Theme toggle could go here */}
            </ul>
        </nav>
    );
};

export default Navbar;
