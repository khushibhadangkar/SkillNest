import { Link } from 'react-router-dom';
import { Star, MapPin, Clock } from 'lucide-react';
import Button from './Button';
import useAnalytics from '../hooks/useAnalytics';
import './FreelancerCard.css';

export default function FreelancerCard({ freelancer, index = 0 }) {
  const { trackViewFreelancer, trackHireClick } = useAnalytics();

  const colors = ['#6366F1', '#8B5CF6', '#06B6D4', '#EC4899', '#F59E0B', '#10B981'];
  const bgColor = colors[freelancer.id % colors.length];

  return (
    <div className="freelancer-card" style={{ animationDelay: `${index * 80}ms` }}>
      <div className="freelancer-card__header">
        <div className="freelancer-card__avatar" style={{ background: bgColor }}>
          {freelancer.initials}
        </div>
        <div className={`freelancer-card__status ${freelancer.availability === 'Available' ? 'freelancer-card__status--available' : 'freelancer-card__status--limited'}`}>
          <span className="freelancer-card__status-dot" />
          {freelancer.availability}
        </div>
      </div>

      <div className="freelancer-card__info">
        <h3 className="freelancer-card__name">{freelancer.name}</h3>
        <p className="freelancer-card__role">{freelancer.role}</p>

        <div className="freelancer-card__meta">
          <div className="freelancer-card__rating">
            <Star size={14} fill="#FBBF24" stroke="#FBBF24" />
            <span>{freelancer.rating}</span>
            <span className="freelancer-card__reviews">({freelancer.reviews})</span>
          </div>
          <div className="freelancer-card__location">
            <MapPin size={13} />
            <span>{freelancer.location}</span>
          </div>
        </div>

        <div className="freelancer-card__skills">
          {freelancer.skills.slice(0, 3).map(skill => (
            <span key={skill} className="freelancer-card__skill">{skill}</span>
          ))}
          {freelancer.skills.length > 3 && (
            <span className="freelancer-card__skill freelancer-card__skill--more">
              +{freelancer.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="freelancer-card__footer">
        <div className="freelancer-card__rate">
          <span className="freelancer-card__rate-amount">${freelancer.hourlyRate}</span>
          <span className="freelancer-card__rate-period">/hr</span>
        </div>
        <div className="freelancer-card__actions">
          <Link
            to={`/freelancer/${freelancer.id}`}
            className="freelancer-card__view"
            onClick={() => trackViewFreelancer(freelancer.id, freelancer.name)}
          >
            View Profile
          </Link>
          <Button
            size="sm"
            onClick={() => trackHireClick(freelancer.id, freelancer.name)}
          >
            Hire
          </Button>
        </div>
      </div>
    </div>
  );
}
