import { useState } from 'react';
import { Mail, MessageSquare, MapPin, Send, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import FAQAccordion from '../components/FAQAccordion';
import useAnalytics from '../hooks/useAnalytics';
import './Contact.css';

const FAQS = [
  {
    question: "How does the matching process work?",
    answer: "Once you post a project, our algorithm analyzes your requirements (budget, timeline, skills needed) and immediately notifies top-tier freelancers who match your criteria. You can also actively browse and invite freelancers to apply."
  },
  {
    question: "Are the freelancers vetted?",
    answer: "Yes, every freelancer on SkillNest undergoes a rigorous vetting process. We review their portfolio, verify their identity, and conduct skill assessments before they can accept projects."
  },
  {
    question: "How are payments handled?",
    answer: "We use a secure escrow system. You fund the project milestones upfront, but the money is only released to the freelancer once you approve the delivered work. SkillNest handles all invoicing and tax documentation."
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "We offer a dispute resolution process. If the work doesn't meet the agreed-upon requirements, our mediation team will step in to help resolve the issue fairly, which can include a refund."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success
  const { trackContactForm } = useAnalytics();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      trackContactForm();
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <div className="page-contact">
      <SEOHead 
        title="Contact Us" 
        description="Get in touch with the SkillNest team for support, partnerships, or general inquiries."
        path="/contact"
      />

      <div className="contact-header">
        <div className="container text-center">
          <ScrollReveal>
            <h1 className="contact-title">Get in <span className="gradient-text">Touch</span></h1>
            <p className="contact-subtitle">Have a question or want to partner with us? We'd love to hear from you.</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container contact-content">
        <div className="contact-grid">
          {/* Form */}
          <ScrollReveal>
            <div className="contact-form-card">
              <h3 className="contact-form-title">Send a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="input" 
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="input" 
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select 
                    className="input"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="support">General Support</option>
                    <option value="sales">Sales & Enterprise</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea 
                    className="input textarea" 
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant={status === 'success' ? 'secondary' : 'primary'} 
                  fullWidth 
                  icon={status === 'success' ? CheckCircle : Send}
                  disabled={status !== 'idle'}
                >
                  {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                </Button>
              </form>
            </div>
          </ScrollReveal>

          {/* Info & FAQ */}
          <div className="contact-info-col">
            <ScrollReveal delay={100}>
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-card__icon"><Mail size={24} /></div>
                  <div>
                    <h4 className="info-card__title">Email Us</h4>
                    <p className="info-card__desc">support@skillnest.com</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card__icon"><MessageSquare size={24} /></div>
                  <div>
                    <h4 className="info-card__title">Live Chat</h4>
                    <p className="info-card__desc">Available Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card__icon"><MapPin size={24} /></div>
                  <div>
                    <h4 className="info-card__title">Headquarters</h4>
                    <p className="info-card__desc">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="faq-section mt-12">
                <h3 className="mb-6">Frequently Asked Questions</h3>
                <FAQAccordion items={FAQS} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
