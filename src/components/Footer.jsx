import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, MessageCircle, Globe, Mail, Share2 } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* CTA Banner */}
        <div className="footer__cta">
          <div className="footer__cta-content">
            <h2>Ready to find your perfect freelancer?</h2>
            <p>Join thousands of businesses already hiring top talent on SkillNest.</p>
          </div>
          <div className="footer__cta-actions">
            <Link to="/browse" className="btn btn--primary btn--lg">
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
          {/* Decorative blobs */}
          <div className="footer__cta-blob footer__cta-blob--1" />
          <div className="footer__cta-blob footer__cta-blob--2" />
        </div>

        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">
                <Sparkles size={18} />
              </div>
              <span>SkillNest</span>
            </Link>
            <p className="footer__tagline">
              Connecting businesses with exceptional student freelancers and young professionals worldwide.
            </p>
            <div className="footer__social">
              <Link to="/coming-soon" className="footer__social-link" aria-label="Social"><Share2 size={18} /></Link>
              <Link to="/coming-soon" className="footer__social-link" aria-label="Website"><Globe size={18} /></Link>
              <Link to="/coming-soon" className="footer__social-link" aria-label="Chat"><MessageCircle size={18} /></Link>
              <Link to="/coming-soon" className="footer__social-link" aria-label="Email"><Mail size={18} /></Link>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <Link to="/about" className="footer__link">About Us</Link>
            <Link to="/blog" className="footer__link">Blog</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
            <Link to="/coming-soon" className="footer__link">Careers</Link>
            <Link to="/coming-soon" className="footer__link">Press</Link>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">For Clients</h4>
            <Link to="/browse" className="footer__link">Browse Talent</Link>
            <Link to="/post-project" className="footer__link">Post a Project</Link>
            <Link to="/coming-soon" className="footer__link">How It Works</Link>
            <Link to="/coming-soon" className="footer__link">Enterprise</Link>
            <Link to="/coming-soon" className="footer__link">Trust & Safety</Link>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">For Freelancers</h4>
            <Link to="/coming-soon" className="footer__link">Join as Freelancer</Link>
            <Link to="/coming-soon" className="footer__link">Find Projects</Link>
            <Link to="/coming-soon" className="footer__link">Resources</Link>
            <Link to="/coming-soon" className="footer__link">Community</Link>
            <Link to="/coming-soon" className="footer__link">Success Stories</Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} SkillNest. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/coming-soon" className="footer__link">Privacy Policy</Link>
            <Link to="/coming-soon" className="footer__link">Terms of Service</Link>
            <a href="#" className="footer__link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
