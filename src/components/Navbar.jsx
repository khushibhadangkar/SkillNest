import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

import { useAppContext } from '../context/AppContext';
import Button from './Button';
import AuthModal from './AuthModal';
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
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });
  const { user, logout } = useAppContext();
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
          {user ? (
            <div className="navbar__user" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src={user.avatar} alt={user.name} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
              <button onClick={logout} style={{ fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Log Out</button>
              <Link to="/browse">
                <Button variant="primary" size="sm">Hire Talent</Button>
              </Link>
            </div>
          ) : (
            <>
              <button onClick={() => setAuthModal({ isOpen: true, mode: 'login' })} style={{ fontSize: '14px', fontWeight: 500, marginRight: '16px' }}>Log In</button>
              <Button variant="primary" size="sm" onClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}>
                Sign Up
              </Button>
            </>
          )}
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
          {user ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <img src={user.avatar} alt={user.name} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                <div>
                  <div style={{ fontWeight: 600 }}>{user.name}</div>
                  <button onClick={logout} style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>Log Out</button>
                </div>
              </div>
              <Link to="/browse" style={{ width: '100%' }}>
                <Button variant="primary" fullWidth>Hire Talent</Button>
              </Link>
            </>
          ) : (
            <>
              <Button variant="secondary" fullWidth onClick={() => { setMobileOpen(false); setAuthModal({ isOpen: true, mode: 'login' }); }}>Log In</Button>
              <Button variant="primary" fullWidth onClick={() => { setMobileOpen(false); setAuthModal({ isOpen: true, mode: 'signup' }); }}>Sign Up</Button>
            </>
          )}
        </div>
      </div>
      <div
        className={`navbar__overlay ${mobileOpen ? 'navbar__overlay--visible' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
      <AuthModal 
        isOpen={authModal.isOpen} 
        defaultMode={authModal.mode} 
        onClose={() => setAuthModal({ ...authModal, isOpen: false })} 
      />
    </header>
  );
}
