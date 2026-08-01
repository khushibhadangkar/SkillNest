import { useState } from 'react';
import { Crown, Zap, ShieldCheck, Layers, Eye, Headphones, Check, Sparkles, X, User, Mail, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import ScrollReveal from './ScrollReveal';
import useAnalytics from '../hooks/useAnalytics';
import './PremiumMembership.css';
import { createPortal } from 'react-dom';
const BENEFITS = [
  {
    id: 'talent-matching',
    icon: Zap,
    title: 'Priority Talent Matching',
    description: 'Get matched with top-tier vetted talent within hours instead of days.'
  },
  {
    id: 'verified-badge',
    icon: ShieldCheck,
    title: 'Verified Premium Badge',
    description: 'Stand out across the platform with exclusive verification credentials.'
  },
  {
    id: 'unlimited-posts',
    icon: Layers,
    title: 'Unlimited Project Posts',
    description: 'Post as many client briefs and projects as needed without limits.'
  },
  {
    id: 'featured-visibility',
    icon: Eye,
    title: 'Featured Profile Visibility',
    description: 'Boost your listings to the top of search results and category pages.'
  },
  {
    id: 'priority-support',
    icon: Headphones,
    title: 'Priority Customer Support',
    description: '24/7 priority VIP assistance and dedicated account management support.'
  }
];

export default function PremiumMembership() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  console.log("isModalOpen:", isModalOpen);
  const [toastMessage, setToastMessage] = useState('');
  const { trackEvent } = useAnalytics();

const handleOpenModal = () => {
  document.body.style.overflow = 'hidden';

  trackEvent('premium_modal_opened', {
    plan: 'SkillNest Premium'
  });

  setIsModalOpen(true);
};

const handleCloseModal = () => {
  document.body.style.overflow = '';
  setIsModalOpen(false);
  setFullName('');
  setEmail('');
};

  const handleSubmit = (e) => {
  e.preventDefault();

  // Fire GA4 custom event
  trackEvent('premium_checkout_started', {
    full_name: fullName,
    email: email,
    plan: 'SkillNest Premium',
    price: 99,
    currency: 'INR'
  });

  // 🔥 Unlock scrolling
  document.body.style.overflow = '';

  // Close modal
  setIsModalOpen(false);

  // Reset form
  setFullName('');
  setEmail('');

  // Show toast
setToastMessage(
  "Thank you! A secure payment link has been sent to your email."
);
  setTimeout(() => {
    setToastMessage('');
  }, 5000);
};

  return (
    <section className="premium-membership section" id="premium">
      <div className="container">
        <ScrollReveal>
          <div className="section__header">
            <span className="section__badge premium-membership__badge">
              <Crown size={14} className="premium-membership__crown-icon" />
              <span>SkillNest Pro</span>
            </span>
            <h2 className="section__title">
              Upgrade to <span className="gradient-text">SkillNest Premium</span>
            </h2>
            <p className="section__subtitle">
              Unlock premium features to hire faster and connect with top verified freelancers.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="premium-membership__card">
            <div className="premium-membership__glow premium-membership__glow--1" />
            <div className="premium-membership__glow premium-membership__glow--2" />

            <div className="premium-membership__content">
              {/* Left Column: Benefits list */}
              <div className="premium-membership__benefits">
                <h3 className="premium-membership__benefits-heading">
                  What's included in Premium
                </h3>

                <ul className="premium-membership__benefits-list">
                  {BENEFITS.map((benefit) => {
                    const IconComponent = benefit.icon;
                    return (
                      <li key={benefit.id} className="premium-membership__benefit-item">
                        <div className="premium-membership__icon-wrapper">
                          <IconComponent size={20} className="premium-membership__benefit-icon" />
                        </div>
                        <div className="premium-membership__benefit-text">
                          <h4 className="premium-membership__benefit-title">
                            {benefit.title}
                          </h4>
                          <p className="premium-membership__benefit-desc">
                            {benefit.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Right Column: Pricing Card */}
              <div className="premium-membership__pricing-box">
                {toastMessage && (
                  <div className="premium-toast animate-bounce-in">
                    <CheckCircle2 size={22} className="premium-toast__icon" />
                    <span>{toastMessage}</span>
                    <button className="premium-toast__close" onClick={() => setToastMessage('')} aria-label="Close message">
                      <X size={16} />
                    </button>
                  </div>
                )}

                <div className="premium-membership__tag">
                  <Sparkles size={14} />
                  <span>Most Popular</span>
                </div>

                <div className="premium-membership__price-wrapper">
                  <span className="premium-membership__currency">₹</span>
                  <span className="premium-membership__amount">99</span>
                  <span className="premium-membership__period">/month</span>
                </div>

                <p className="premium-membership__price-note">
                  Billed monthly. Upgrade or cancel anytime.
                </p>

                <div className="premium-membership__highlights">
                  <div className="premium-membership__highlight-item">
                    <Check size={16} className="premium-membership__check" />
                    <span>Instant activation</span>
                  </div>
                  <div className="premium-membership__highlight-item">
                    <Check size={16} className="premium-membership__check" />
                    <span>Cancel anytime</span>
                  </div>
                  <div className="premium-membership__highlight-item">
                    <Check size={16} className="premium-membership__check" />
                    <span>No hidden fees</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="premium-membership__btn"
                  onClick={handleOpenModal}
                >
                  Upgrade Now
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ===== UPGRADE MODAL ===== */}
{isModalOpen &&
  createPortal(
    <div className="premium-modal__overlay" onClick={handleCloseModal}>
      <div
        className="premium-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="premium-modal__close"
          onClick={handleCloseModal}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="premium-modal__header">
          <div className="premium-modal__badge">
            <Crown size={16} />
            <span>SkillNest Premium</span>
          </div>

          <h3 className="premium-modal__title">
            Upgrade Your Account
          </h3>

          <p className="premium-modal__subtitle">
            Enter your details to receive your secure payment link for ₹99/month.
          </p>
        </div>

        <form className="premium-modal__form" onSubmit={handleSubmit}>
          <div className="premium-modal__input-group">
            <label htmlFor="premium-fullname">Full Name</label>

            <div className="premium-modal__input-wrapper">
              <User size={18} className="premium-modal__icon" />

              <input
                id="premium-fullname"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="premium-modal__input-group">
            <label htmlFor="premium-email">Email Address</label>

            <div className="premium-modal__input-wrapper">
              <Mail size={18} className="premium-modal__icon" />

              <input
                id="premium-email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="premium-modal__summary">
            <span>Total Due Today:</span>
            <strong>₹99/month</strong>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            className="premium-membership__btn"
          >
            Proceed to Payment
          </Button>
        </form>
      </div>
    </div>,
    document.body
  )
}

    </section>
  );
}
