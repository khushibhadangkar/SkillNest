import { Mail, MessageSquare, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollReveal from '../components/ScrollReveal';
import FAQAccordion from '../components/FAQAccordion';
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
  );
}
