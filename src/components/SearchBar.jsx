import { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import useAnalytics from '../hooks/useAnalytics';
import './SearchBar.css';

export default function SearchBar({ onSearch, onFilterChange, categories = [] }) {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    availability: '',
    minBudget: '',
    maxBudget: '',
  });
  const { trackSearch, trackFilter } = useAnalytics();

  const handleSearch = (e) => {
    e.preventDefault();
    trackSearch(query, 0);
    if (onSearch) onSearch(query);
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    trackFilter(key, value);
    if (onFilterChange) onFilterChange(newFilters);
  };

  const clearFilters = () => {
    setFilters({ category: '', availability: '', minBudget: '', maxBudget: '' });
    if (onFilterChange) onFilterChange({ category: '', availability: '', minBudget: '', maxBudget: '' });
  };

  const hasActiveFilters = Object.values(filters).some(v => v !== '');

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={handleSearch}>
        <div className="search-bar__input-wrap">
          <Search size={20} className="search-bar__icon" />
          <input
            type="text"
            className="search-bar__input"
            placeholder="Search freelancers by name, skill, or role..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (onSearch) onSearch(e.target.value);
            }}
          />
          {query && (
            <button type="button" className="search-bar__clear" onClick={() => { setQuery(''); if (onSearch) onSearch(''); }}>
              <X size={16} />
            </button>
          )}
        </div>
        <button
          type="button"
          className={`search-bar__filter-toggle ${showFilters ? 'search-bar__filter-toggle--active' : ''}`}
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal size={18} />
          Filters
          {hasActiveFilters && <span className="search-bar__filter-badge" />}
        </button>
      </form>

      {showFilters && (
        <div className="search-bar__filters">
          <div className="search-bar__filter-group">
            <label className="search-bar__filter-label">Category</label>
            <select
              className="search-bar__select"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className="search-bar__filter-group">
            <label className="search-bar__filter-label">Availability</label>
            <select
              className="search-bar__select"
              value={filters.availability}
              onChange={(e) => handleFilterChange('availability', e.target.value)}
            >
              <option value="">Any</option>
              <option value="Available">Available Now</option>
              <option value="Limited">Limited</option>
            </select>
          </div>

          <div className="search-bar__filter-group">
            <label className="search-bar__filter-label">Min Budget ($/hr)</label>
            <input
              type="number"
              className="search-bar__select"
              placeholder="0"
              value={filters.minBudget}
              onChange={(e) => handleFilterChange('minBudget', e.target.value)}
            />
          </div>

          <div className="search-bar__filter-group">
            <label className="search-bar__filter-label">Max Budget ($/hr)</label>
            <input
              type="number"
              className="search-bar__select"
              placeholder="200"
              value={filters.maxBudget}
              onChange={(e) => handleFilterChange('maxBudget', e.target.value)}
            />
          </div>

          {hasActiveFilters && (
            <button className="search-bar__clear-filters" onClick={clearFilters}>
              Clear All
            </button>
          )}
        </div>
      )}
    </div>
  );
}
