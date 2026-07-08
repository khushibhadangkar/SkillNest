import { Users, Target, Zap, Globe, Shield, Heart } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollReveal from '../components/ScrollReveal';
import './About.css';

const TEAM = [
  { name: 'Alex Rivera', role: 'Founder & CEO', avatar: 'https://i.pravatar.cc/150?img=11' },
  { name: 'Sarah Chen', role: 'Head of Product', avatar: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Marcus Johnson', role: 'Head of Engineering', avatar: 'https://i.pravatar.cc/150?img=8' },
  { name: 'Elena Rodriguez', role: 'Community Lead', avatar: 'https://i.pravatar.cc/150?img=9' },
];

export default function About() {
  return (
    <div className="page-about">
      <SEOHead 
        title="About Us" 
        description="Learn about SkillNest's mission to connect exceptional student freelancers with innovative businesses."
        path="/about"
      />

      <div className="about-hero">
        <div className="about-hero__bg">
          <div className="about-hero__blob about-hero__blob--1" />
          <div className="about-hero__blob about-hero__blob--2" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <h1 className="about-hero__title animate-fade-in">
              Empowering the next generation of <span className="gradient-text">digital talent.</span>
            </h1>
            <p className="about-hero__subtitle animate-fade-in stagger-1">
              SkillNest was founded with a simple belief: brilliant student freelancers and young professionals shouldn't be held back by their lack of traditional experience.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="mission-vision-grid">
            <ScrollReveal>
              <div className="mv-card">
                <div className="mv-card__icon"><Target size={32} /></div>
                <h3 className="mv-card__title">Our Mission</h3>
                <p className="mv-card__desc">
                  To democratize access to exceptional tech and design talent while providing students and early-career professionals with meaningful work that launches their careers.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="mv-card">
                <div className="mv-card__icon"><Globe size={32} /></div>
                <h3 className="mv-card__title">Our Vision</h3>
                <p className="mv-card__desc">
                  To become the world's most trusted platform for discovering and hiring emerging digital talent, breaking down the barriers between education and industry.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <h2 className="section__title">Our Core <span className="gradient-text">Values</span></h2>
            </div>
          </ScrollReveal>

          <div className="values-grid">
            {[
              { icon: Zap, title: 'Move Fast', desc: 'We believe in rapid iteration and shipping quickly without compromising on quality.' },
              { icon: Shield, title: 'Trust First', desc: 'Trust is the foundation of our marketplace. We build it through transparency and rigorous vetting.' },
              { icon: Heart, title: 'Empathy', desc: 'We understand the challenges of both founders building companies and students launching careers.' },
              { icon: Users, title: 'Community', desc: 'We are more than a platform; we are a community that supports each others growth.' },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="value-item">
                  <div className="value-item__icon"><value.icon size={24} /></div>
                  <h4 className="value-item__title">{value.title}</h4>
                  <p className="value-item__desc">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <h2 className="section__title">Meet the <span className="gradient-text">Team</span></h2>
              <p className="section__subtitle">The passionate people building SkillNest.</p>
            </div>
          </ScrollReveal>

          <div className="team-grid">
            {TEAM.map((member, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="team-card">
                  <img src={member.avatar} alt={member.name} className="team-card__img" />
                  <h4 className="team-card__name">{member.name}</h4>
                  <p className="team-card__role">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
