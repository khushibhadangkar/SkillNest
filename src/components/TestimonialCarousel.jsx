import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './TestimonialCarousel.css';

export default function TestimonialCarousel({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(prev => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, testimonials.length]);

  const prev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, testimonials.length]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];
  const colors = ['#6366F1', '#8B5CF6', '#06B6D4', '#EC4899', '#F59E0B', '#10B981'];

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-carousel__card">
        <div className="testimonial-carousel__quote-icon">
          <Quote size={32} />
        </div>

        <div className="testimonial-carousel__content" key={current}>
          <div className="testimonial-carousel__stars">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} size={16} fill="#FBBF24" stroke="#FBBF24" />
            ))}
          </div>

          <blockquote className="testimonial-carousel__text">
            "{t.quote}"
          </blockquote>

          <div className="testimonial-carousel__author">
            <div
              className="testimonial-carousel__avatar"
              style={{ background: colors[t.id % colors.length] }}
            >
              {t.initials}
            </div>
            <div>
              <p className="testimonial-carousel__name">{t.name}</p>
              <p className="testimonial-carousel__role">{t.role} at {t.company}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-carousel__controls">
        <button className="testimonial-carousel__btn" onClick={prev} aria-label="Previous testimonial">
          <ChevronLeft size={20} />
        </button>

        <div className="testimonial-carousel__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-carousel__dot ${i === current ? 'testimonial-carousel__dot--active' : ''}`}
              onClick={() => { setCurrent(i); }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button className="testimonial-carousel__btn" onClick={next} aria-label="Next testimonial">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
