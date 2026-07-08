import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Zap, Users, Shield, CheckCircle, Star,
  Send, Sparkles, Code, Palette, Brain, Briefcase
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import FreelancerCard from '../components/FreelancerCard';
import CategoryCard from '../components/CategoryCard';
import SEOHead from '../components/SEOHead';
import useAnalytics from '../hooks/useAnalytics';
import { freelancers } from '../data/freelancers';
import { categories } from '../data/categories';
import './Home.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { trackCtaClick, trackNewsletterSignup } = useAnalytics();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      trackNewsletterSignup(email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <>
      <SEOHead
        title="The Smartest Way to Hire Exceptional Freelancers"
        description="SkillNest connects startups, businesses, and individuals with talented student freelancers and young professionals in software development, design, AI, and more."
        path="/"
      />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__blobs">
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
          <div className="hero__blob hero__blob--3" />
        </div>

        <div className="container hero__container">
          <div className="hero__content">
            <div className="hero__badge animate-fade-in">
              <Sparkles size={14} />
              <span>The #1 Platform for Young Talent</span>
            </div>

            <h1 className="hero__title animate-fade-in stagger-1">
              The smartest way to hire{' '}
              <span className="gradient-text">exceptional freelancers.</span>
            </h1>

            <p className="hero__subtitle animate-fade-in stagger-2">
              Discover top student freelancers, AI specialists, designers, developers, and creators
              ready to build your next big idea.
            </p>

            <div className="hero__actions animate-fade-in stagger-3">
              <Link to="/browse" onClick={() => trackCtaClick('hire_talent', 'hero')}>
                <Button variant="primary" size="lg" iconRight={ArrowRight}>
                  Hire Talent
                </Button>
              </Link>
              <Link to="/post-project" onClick={() => trackCtaClick('become_freelancer', 'hero')}>
                <Button variant="secondary" size="lg">
                  Become a Freelancer
                </Button>
              </Link>
            </div>

          </div>

          <div className="hero__visual animate-fade-in stagger-3">
            <div className="hero__illustration">
              {/* Floating cards representing collaboration */}
              <div className="hero__float-card hero__float-card--1 animate-float">
                <Code size={20} />
                <div>
                  <span className="hero__float-title">React Developer</span>
                  <span className="hero__float-sub">Available Now</span>
                </div>
              </div>
              <div className="hero__float-card hero__float-card--2 animate-float-slow">
                <Palette size={20} />
                <div>
                  <span className="hero__float-title">UI/UX Designer</span>
                  <div className="hero__float-stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#FBBF24" stroke="#FBBF24" />)}
                  </div>
                </div>
              </div>
              <div className="hero__float-card hero__float-card--3 animate-float">
                <Brain size={20} />
                <div>
                  <span className="hero__float-title">AI Engineer</span>
                  <span className="hero__float-sub">$65/hr</span>
                </div>
              </div>
              <div className="hero__float-card hero__float-card--4 animate-float-slow">
                <Briefcase size={20} />
                <div>
                  <span className="hero__float-title">Project Matched!</span>
                  <span className="hero__float-sub" style={{ color: '#10B981' }}>✓ Success</span>
                </div>
              </div>

              {/* Central abstract shape */}
              <div className="hero__center-shape">
                <div className="hero__center-ring hero__center-ring--1" />
                <div className="hero__center-ring hero__center-ring--2" />
                <div className="hero__center-ring hero__center-ring--3" />
                <div className="hero__center-icon">
                  <Sparkles size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== FEATURED FREELANCERS ===== */}
      <section className="section section--alt" id="featured">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <span className="section__badge">
                <Users size={14} />
                Top Talent
              </span>
              <h2 className="section__title">
                Meet our <span className="gradient-text">featured freelancers</span>
              </h2>
              <p className="section__subtitle">
                Hand-picked professionals ready to bring your vision to life
              </p>
            </div>
          </ScrollReveal>

          <div className="freelancers-grid">
            {freelancers.slice(0, 6).map((f, i) => (
              <ScrollReveal key={f.id} delay={i * 100}>
                <FreelancerCard freelancer={f} index={i} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="section__cta">
              <Link to="/browse">
                <Button variant="outline" size="lg" iconRight={ArrowRight}>
                  View All Freelancers
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="section" id="categories">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <span className="section__badge">
                <Zap size={14} />
                Categories
              </span>
              <h2 className="section__title">
                Explore popular <span className="gradient-text">categories</span>
              </h2>
              <p className="section__subtitle">
                Find the perfect freelancer for any project, from AI to design
              </p>
            </div>
          </ScrollReveal>

          <div className="categories-grid">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.id} delay={i * 80}>
                <CategoryCard category={cat} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section section--alt" id="how-it-works">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <span className="section__badge">
                <Zap size={14} />
                Simple Process
              </span>
              <h2 className="section__title">
                How <span className="gradient-text">it works</span>
              </h2>
              <p className="section__subtitle">
                Three simple steps to find and hire the perfect freelancer
              </p>
            </div>
          </ScrollReveal>

          <div className="steps">
            {[
              {
                icon: Send,
                step: '01',
                title: 'Post Your Project',
                desc: 'Describe your project requirements, timeline, and budget. Our smart matching begins instantly.'
              },
              {
                icon: Users,
                step: '02',
                title: 'Get Matched',
                desc: 'Receive curated proposals from pre-vetted freelancers perfectly suited for your project.'
              },
              {
                icon: Shield,
                step: '03',
                title: 'Hire Confidently',
                desc: 'Review profiles, portfolios, and ratings. Hire with confidence and get started immediately.'
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="step-card">
                  <div className="step-card__number">{item.step}</div>
                  <div className="step-card__icon">
                    <item.icon size={24} />
                  </div>
                  <h3 className="step-card__title">{item.title}</h3>
                  <p className="step-card__desc">{item.desc}</p>
                  {i < 2 && <div className="step-card__connector" />}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ===== NEWSLETTER ===== */}
      <section className="newsletter">
        <div className="container">
          <ScrollReveal>
            <div className="newsletter__card">
              <div className="newsletter__blob newsletter__blob--1" />
              <div className="newsletter__blob newsletter__blob--2" />

              <div className="newsletter__content">
                <h2>Stay ahead of the curve</h2>
                <p>Get weekly insights on freelancing, hiring, and the latest in tech talent.</p>

                <form className="newsletter__form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    className="newsletter__input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" variant="primary">
                    {subscribed ? (
                      <><CheckCircle size={18} /> Subscribed!</>
                    ) : (
                      'Subscribe'
                    )}
                  </Button>
                </form>

                <p className="newsletter__note">No spam, ever. Unsubscribe anytime.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
