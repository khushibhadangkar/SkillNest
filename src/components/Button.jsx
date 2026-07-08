import { useCallback } from 'react';
import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
  ...props
}) {
  const handleClick = useCallback((e) => {
    /* Ripple effect */
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.classList.add('ripple');
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    if (onClick) onClick(e);
  }, [onClick]);

  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full' : ''} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : 18} />}
      <span>{children}</span>
      {IconRight && <IconRight size={size === 'sm' ? 16 : 18} />}
    </button>
  );
}
