import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, MapPin, Briefcase, Calendar, CheckCircle, ArrowLeft, ExternalLink, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import { useAppContext } from '../context/AppContext';
import AuthModal from '../components/AuthModal';
import useAnalytics from '../hooks/useAnalytics';
import { getFreelancerById } from '../data/freelancers';
import './FreelancerProfile.css';

export default function FreelancerProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { trackHireClick } = useAnalytics();
  const { user, isHired, hireFreelancer } = useAppContext();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isHiring, setIsHiring] = useState(false);
  const freelancer = getFreelancerById(id);

  if (!freelancer) {
    return (
      <div className="container" style={{ padding: '160px 0', textAlign: 'center' }}>
        <h2>Freelancer not found</h2>
        <Button onClick={() => navigate('/browse')} className="mt-4">Back to Browse</Button>
      </div>
    );
  }

  const colors = ['#6366F1', '#8B5CF6', '#06B6D4', '#EC4899', '#F59E0B', '#10B981'];
  const bgColor = colors[freelancer.id % colors.length];

  const handleHire = () => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }
    
    trackHireClick(freelancer.id, freelancer.name);
    setIsHiring(true);
    // Simulate API call
    setTimeout(() => {
      hireFreelancer(freelancer.id);
      setIsHiring(false);
    }, 1500);
  };

  return (
    <div className="page-profile">
      <SEOHead 
        title={`${freelancer.name} — ${freelancer.role}`} 
        description={freelancer.bio}
        path={`/freelancer/${freelancer.id}`}
      />

      <div className="profile-header">
        <div className="container">
          <Link to="/browse" className="back-link animate-fade-in">
            <ArrowLeft size={16} /> Back to Browse
          </Link>
          
          <div className="profile-hero">
            <div className="profile-hero__avatar animate-scale-in" style={{ background: bgColor }}>
              {freelancer.initials}
            </div>
            
            <div className="profile-hero__info animate-fade-in-up stagger-1">
              <div className="profile-hero__title-row">
                <h1 className="profile-hero__name">{freelancer.name}</h1>
                <div className={`profile-status ${freelancer.availability === 'Available' ? 'profile-status--available' : 'profile-status--limited'}`}>
                  <span className="profile-status__dot" />
                  {freelancer.availability}
                </div>
              </div>
              
              <p className="profile-hero__role">{freelancer.role}</p>
              
              <div className="profile-hero__meta">
                <div className="profile-meta-item">
                  <Star size={16} fill="#FBBF24" stroke="#FBBF24" />
                  <span className="font-bold">{freelancer.rating}</span>
                  <span className="text-muted">({freelancer.reviews} reviews)</span>
                </div>
                <div className="profile-meta-item">
                  <MapPin size={16} className="text-muted" />
                  <span>{freelancer.location}</span>
                </div>
                <div className="profile-meta-item">
                  <Briefcase size={16} className="text-muted" />
                  <span>{freelancer.completedProjects} Projects</span>
                </div>
              </div>
            </div>
            
            <div className="profile-hero__action animate-fade-in-up stagger-2">
              <div className="profile-rate">
                <span className="profile-rate__amount">${freelancer.hourlyRate}</span>
                <span className="profile-rate__period">/hr</span>
              </div>
              <Button 
                variant={isHired(freelancer.id) ? "secondary" : "primary"}
                size="lg" 
                fullWidth 
                icon={Zap}
                onClick={handleHire}
                disabled={isHiring || isHired(freelancer.id)}
              >
                {isHired(freelancer.id) ? 'Hired' : isHiring ? 'Processing...' : `Hire ${freelancer.name.split(' ')[0]}`}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container profile-content">
        <div className="profile-main">
          {/* About */}
          <ScrollReveal>
            <section className="profile-section">
              <h2 className="profile-section__title">About</h2>
              <p className="profile-bio">{freelancer.bio}</p>
              
              <h3 className="profile-subsection-title">Skills</h3>
              <div className="profile-skills">
                {freelancer.skills.map(skill => (
                  <span key={skill} className="profile-skill-badge">{skill}</span>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Portfolio */}
          <ScrollReveal>
            <section className="profile-section">
              <h2 className="profile-section__title">Portfolio</h2>
              <div className="portfolio-grid">
                {freelancer.portfolio.map((item, i) => (
                  <div key={i} className="portfolio-item hover-lift">
                    <div className="portfolio-item__img" />
                    <div className="portfolio-item__content">
                      <h3 className="portfolio-item__title">{item.title}</h3>
                      <p className="portfolio-item__desc">{item.description}</p>
                      <div className="portfolio-item__tech">
                        {item.tech.map(t => (
                          <span key={t} className="portfolio-tech-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Reviews */}
          <ScrollReveal>
            <section className="profile-section">
              <h2 className="profile-section__title">Client Reviews</h2>
              <div className="reviews-list">
                {freelancer.clientReviews.map((review, i) => (
                  <div key={i} className="review-card">
                    <div className="review-card__header">
                      <div className="review-card__author">
                        <div className="review-avatar">{review.name.charAt(0)}</div>
                        <div>
                          <div className="review-name">{review.name}</div>
                          <div className="review-company">{review.company}</div>
                        </div>
                      </div>
                      <div className="review-meta">
                        <div className="review-stars">
                          {[...Array(review.rating)].map((_, idx) => (
                            <Star key={idx} size={14} fill="#FBBF24" stroke="#FBBF24" />
                          ))}
                        </div>
                        <div className="review-date">{new Date(review.date).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <p className="review-text">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        </div>

        <div className="profile-sidebar">
          {/* Project History */}
          <ScrollReveal>
            <div className="sidebar-card">
              <h3 className="sidebar-card__title">Project History</h3>
              <div className="history-timeline">
                {freelancer.projectHistory.map((history, i) => (
                  <div key={i} className="history-item">
                    <div className="history-item__dot" />
                    <div className="history-item__content">
                      <div className="history-item__title">{history.title}</div>
                      <div className="history-item__client">{history.client}</div>
                      <div className="history-item__meta">
                        <span><Calendar size={12} /> {history.duration}</span>
                        <span className="history-status">
                          <CheckCircle size={12} /> {history.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Fast Facts */}
          <ScrollReveal>
            <div className="sidebar-card">
              <h3 className="sidebar-card__title">Fast Facts</h3>
              <ul className="fast-facts">
                <li>
                  <span className="fast-facts__label">Response Time</span>
                  <span className="fast-facts__value">&lt; 2 hours</span>
                </li>
                <li>
                  <span className="fast-facts__label">On-time Delivery</span>
                  <span className="fast-facts__value">100%</span>
                </li>
                <li>
                  <span className="fast-facts__label">English Level</span>
                  <span className="fast-facts__value">Fluent / Native</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        defaultMode="login" 
      />
    </div>
  );
}
