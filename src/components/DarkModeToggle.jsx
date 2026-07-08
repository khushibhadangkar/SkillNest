import { Sun, Moon } from 'lucide-react';
import './DarkModeToggle.css';

export default function DarkModeToggle({ isDark, onToggle }) {
  return (
    <button
      className={`theme-toggle ${isDark ? 'theme-toggle--dark' : ''}`}
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="theme-toggle__track">
        <div className="theme-toggle__thumb">
          {isDark ? <Moon size={14} /> : <Sun size={14} />}
        </div>
        <Sun size={12} className="theme-toggle__icon theme-toggle__icon--sun" />
        <Moon size={12} className="theme-toggle__icon theme-toggle__icon--moon" />
      </div>
    </button>
  );
}
