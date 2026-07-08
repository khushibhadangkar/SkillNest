import './SkeletonLoader.css';

export function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-card__header">
        <div className="skeleton skeleton--avatar" />
        <div className="skeleton-card__meta">
          <div className="skeleton skeleton--text" style={{ width: '60%' }} />
          <div className="skeleton skeleton--text" style={{ width: '40%' }} />
        </div>
      </div>
      <div className="skeleton skeleton--text" style={{ width: '90%' }} />
      <div className="skeleton skeleton--text" style={{ width: '70%' }} />
      <div className="skeleton-card__tags">
        <div className="skeleton skeleton--tag" />
        <div className="skeleton skeleton--tag" />
        <div className="skeleton skeleton--tag" />
      </div>
      <div className="skeleton-card__footer">
        <div className="skeleton skeleton--text" style={{ width: '30%' }} />
        <div className="skeleton skeleton--btn" />
      </div>
    </div>
  );
}

export function SkeletonList({ count = 6 }) {
  return (
    <div className="skeleton-list">
      {[...Array(count)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
