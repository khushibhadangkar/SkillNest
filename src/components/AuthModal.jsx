import { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import Button from './Button';
import './AuthModal.css';

export default function AuthModal({ isOpen, onClose, defaultMode = 'login' }) {
  const [mode, setMode] = useState(defaultMode); // 'login' or 'signup'
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useAppContext();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      // For demo, just login with email and name (or email prefix if no name)
      const name = formData.name || formData.email.split('@')[0];
      login(formData.email, name);
      setLoading(false);
      onClose();
    }, 1000);
  };

  const toggleMode = () => {
    setMode(prev => prev === 'login' ? 'signup' : 'login');
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="auth-modal__overlay animate-fade-in" onClick={onClose}>
      <div className="auth-modal__container" onClick={e => e.stopPropagation()}>
        <button className="auth-modal__close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="auth-modal__header">
          <h2 className="auth-modal__title">
            {mode === 'login' ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="auth-modal__subtitle">
            {mode === 'login' 
              ? 'Log in to manage your projects and freelancers.' 
              : 'Join the smartest platform for exceptional freelance talent.'}
          </p>
        </div>

        <form className="auth-modal__form" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="auth-modal__input-group">
              <label>Full Name</label>
              <div className="auth-modal__input-wrapper">
                <User size={18} className="auth-modal__icon" />
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required 
                />
              </div>
            </div>
          )}

          <div className="auth-modal__input-group">
            <label>Email Address</label>
            <div className="auth-modal__input-wrapper">
              <Mail size={18} className="auth-modal__icon" />
              <input 
                type="email" 
                placeholder="you@company.com" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required 
              />
            </div>
          </div>

          <div className="auth-modal__input-group">
            <label>Password</label>
            <div className="auth-modal__input-wrapper">
              <Lock size={18} className="auth-modal__icon" />
              <input 
                type="password" 
                placeholder="••••••••" 
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
                required 
                minLength={6}
              />
            </div>
          </div>

          <Button type="submit" variant="primary" fullWidth size="lg" disabled={loading} iconRight={ArrowRight}>
            {loading ? 'Processing...' : mode === 'login' ? 'Log In' : 'Sign Up'}
          </Button>
        </form>

        <div className="auth-modal__footer">
          <p>
            {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
            <button className="auth-modal__toggle-btn" onClick={toggleMode} type="button">
              {mode === 'login' ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
