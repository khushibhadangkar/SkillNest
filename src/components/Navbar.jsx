import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

import Button from './Button';
import useAnalytics from '../hooks/useAnalytics';
import './Navbar.css';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/browse', label: 'Browse Talent' },
  { path: '/post-project', label: 'Post Project' },
  { path: '/about', label: 'About' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { trackNavClick } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container">
        <Link to="/" className="navbar__logo" onClick={() => trackNavClick('home')}>
          <div className="navbar__logo-icon">
            <Sparkles size={20} />
          </div>
          <span className="navbar__logo-text">SkillNest</span>
        </Link>

        <div className="navbar__links">
          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              onClick={() => trackNavClick(link.label)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar__actions">
          <Link to="/browse">
            <Button variant="primary" size="sm">
              Hire Talent
            </Button>
          </Link>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-links">
          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
              onClick={() => trackNavClick(link.label)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="navbar__mobile-actions">
          <Link to="/browse" style={{ width: '100%' }}>
            <Button variant="primary" fullWidth>Hire Talent</Button>
          </Link>
        </div>
      </div>
      <div
        className={`navbar__overlay ${mobileOpen ? 'navbar__overlay--visible' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
    </header>
  );
}
