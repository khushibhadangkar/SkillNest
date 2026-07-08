import * as Icons from 'lucide-react';
import './CategoryCard.css';

export default function CategoryCard({ category, index = 0 }) {
  const IconComponent = Icons[category.icon] || Icons.Folder;

  return (
    <div className="category-card" style={{ '--accent': category.color, animationDelay: `${index * 60}ms` }}>
      <div className="category-card__icon">
        <IconComponent size={24} />
      </div>
      <h3 className="category-card__title">{category.name}</h3>
      <p className="category-card__desc">{category.description}</p>
      <span className="category-card__count">{category.count} freelancers</span>
      <div className="category-card__glow" />
    </div>
  );
}
