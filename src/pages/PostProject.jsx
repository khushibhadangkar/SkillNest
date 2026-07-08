import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import useAnalytics from '../hooks/useAnalytics';
import { categories } from '../data/categories';
import './PostProject.css';

const STEPS = ['Details', 'Category', 'Budget', 'Review'];

export default function PostProject() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    budget: '',
    timeline: ''
  });

  const navigate = useNavigate();
  const { trackPostProject } = useAnalytics();

  const handleNext = () => setStep(s => Math.min(s + 1, STEPS.length));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      trackPostProject(formData.category, formData.budget);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="page-post-project success-screen">
        <SEOHead title="Project Posted" path="/post-project" />
        <div className="container" style={{ textAlign: 'center', padding: '120px 0' }}>
          <div className="success-icon animate-bounce-in">
            <Check size={48} />
          </div>
          <h1 className="animate-fade-in-up mt-4">Project Posted Successfully!</h1>
          <p className="animate-fade-in-up stagger-1 text-muted" style={{ maxWidth: '400px', margin: '16px auto 32px' }}>
            We're matching your project with the best freelancers. You'll receive proposals in your inbox shortly.
          </p>
          <div className="animate-fade-in-up stagger-2">
            <Button variant="primary" onClick={() => navigate('/browse')}>
              Browse Freelancers While You Wait
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-post-project">
      <SEOHead 
        title="Post a Project" 
        description="Post your project and get matched with top student freelancers and professionals."
        path="/post-project"
      />

      <div className="container">
        <div className="post-project-layout">
          {/* Sidebar / Progress */}
          <div className="post-project-sidebar">
            <div className="sidebar-sticky animate-fade-in">
              <div className="sidebar-header">
                <Sparkles size={24} className="text-primary" />
                <h2>Post a Project</h2>
                <p>Fill out the details to find your perfect match.</p>
              </div>

              <div className="steps-indicator">
                {STEPS.map((label, i) => {
                  const currentStep = i + 1;
                  const isActive = currentStep === step;
                  const isCompleted = currentStep < step;
                  
                  return (
                    <div 
                      key={label} 
                      className={`step-item ${isActive ? 'step-item--active' : ''} ${isCompleted ? 'step-item--completed' : ''}`}
                    >
                      <div className="step-circle">
                        {isCompleted ? <Check size={14} /> : currentStep}
                      </div>
                      <span className="step-label">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="post-project-main">
            <div className="form-card animate-fade-in-up">
              <form onSubmit={step === STEPS.length ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
                
                {/* Step 1: Details */}
                {step === 1 && (
                  <div className="form-step animate-fade-in">
                    <h3 className="form-step__title">Project Details</h3>
                    <div className="form-group">
                      <label className="form-label">Project Title</label>
                      <input 
                        type="text" 
                        name="title"
                        className="input" 
                        placeholder="e.g. Build a React Native E-commerce App"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        autoFocus
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Description</label>
                      <textarea 
                        name="description"
                        className="input textarea" 
                        placeholder="Describe your project requirements, goals, and any specific technologies needed..."
                        value={formData.description}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Category */}
                {step === 2 && (
                  <div className="form-step animate-fade-in">
                    <h3 className="form-step__title">Select Category</h3>
                    <div className="category-select-grid">
                      {categories.map(cat => (
                        <div 
                          key={cat.id}
                          className={`category-select-card ${formData.category === cat.name ? 'category-select-card--active' : ''}`}
                          onClick={() => setFormData({ ...formData, category: cat.name })}
                        >
                          <div className="category-select-radio">
                            {formData.category === cat.name && <div className="category-select-radio-inner" />}
                          </div>
                          <span>{cat.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Budget & Timeline */}
                {step === 3 && (
                  <div className="form-step animate-fade-in">
                    <h3 className="form-step__title">Budget & Timeline</h3>
                    <div className="form-group">
                      <label className="form-label">Estimated Budget</label>
                      <select 
                        name="budget"
                        className="input" 
                        value={formData.budget}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a budget range</option>
                        <option value="<$500">Less than $500</option>
                        <option value="$500-$1000">$500 - $1,000</option>
                        <option value="$1000-$5000">$1,000 - $5,000</option>
                        <option value="$5000+">$5,000+</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Timeline</label>
                      <select 
                        name="timeline"
                        className="input" 
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select expected timeline</option>
                        <option value="ASAP">As soon as possible</option>
                        <option value="1-2 weeks">1-2 weeks</option>
                        <option value="1 month">1 month</option>
                        <option value="3+ months">More than 3 months</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 4: Review */}
                {step === 4 && (
                  <div className="form-step animate-fade-in">
                    <h3 className="form-step__title">Review Project</h3>
                    <div className="review-summary">
                      <div className="review-item">
                        <span className="review-label">Title</span>
                        <span className="review-value">{formData.title}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Category</span>
                        <span className="review-value">{formData.category || 'Not selected'}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Budget</span>
                        <span className="review-value">{formData.budget || 'Not specified'}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Timeline</span>
                        <span className="review-value">{formData.timeline || 'Not specified'}</span>
                      </div>
                      <div className="review-item">
                        <span className="review-label">Description</span>
                        <p className="review-value review-desc">{formData.description}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Actions */}
                <div className="form-actions">
                  {step > 1 ? (
                    <Button variant="ghost" onClick={handlePrev} type="button" icon={ArrowLeft}>
                      Back
                    </Button>
                  ) : <div></div>}
                  
                  {step < STEPS.length ? (
                    <Button variant="primary" type="submit" iconRight={ArrowRight}>
                      Next Step
                    </Button>
                  ) : (
                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Posting...' : 'Post Project'}
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
