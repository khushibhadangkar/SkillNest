import { Link } from 'react-router-dom';
import { Construction, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';
import './ComingSoon.css';

export default function ComingSoon() {
  return (
    <div className="page-coming-soon">
      <SEOHead 
        title="Coming Soon" 
        description="We're working hard on building this feature. Check back soon!" 
      />

      <div className="coming-soon-container">
        <div className="coming-soon-icon animate-float">
          <Construction size={48} />
        </div>
        
        <h1 className="coming-soon-title gradient-text animate-fade-in">Coming Soon</h1>
        <p className="coming-soon-subtitle animate-fade-in stagger-1">
          We're actively building out this section of SkillNest to provide you with an even better experience. Check back soon!
        </p>

        <div className="coming-soon-actions animate-fade-in stagger-2">
          <Link to="/">
            <Button variant="secondary" size="lg" icon={ArrowLeft}>
              Back to Home
            </Button>
          </Link>
          <Link to="/browse">
            <Button variant="primary" size="lg">
              Browse Freelancers
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
