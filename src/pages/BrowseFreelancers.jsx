import { useState, useMemo, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SearchBar from '../components/SearchBar';
import FreelancerCard from '../components/FreelancerCard';
import { SkeletonList } from '../components/SkeletonLoader';
import ScrollReveal from '../components/ScrollReveal';
import { freelancers } from '../data/freelancers';
import { categories } from '../data/categories';
import './BrowseFreelancers.css';

export default function BrowseFreelancers() {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    availability: '',
    minBudget: '',
    maxBudget: ''
  });

  // Simulate network loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredFreelancers = useMemo(() => {
    return freelancers.filter(f => {
      // Search
      const searchMatch = !searchQuery || 
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category
      const catMatch = !filters.category || f.role.includes(filters.category) || f.skills.includes(filters.category);

      // Availability
      const availMatch = !filters.availability || f.availability === filters.availability;

      // Budget
      const minMatch = !filters.minBudget || f.hourlyRate >= parseInt(filters.minBudget);
      const maxMatch = !filters.maxBudget || f.hourlyRate <= parseInt(filters.maxBudget);

      return searchMatch && catMatch && availMatch && minMatch && maxMatch;
    });
  }, [searchQuery, filters]);

  return (
    <div className="page-browse">
      <SEOHead 
        title="Browse Talent" 
        description="Find and hire the perfect freelance developer, designer, or marketer for your project."
        path="/browse"
      />

      <div className="browse-header">
        <div className="container">
          <ScrollReveal>
            <h1 className="browse-title">Find your next <span className="gradient-text">expert</span></h1>
            <p className="browse-subtitle">Browse through our curated network of top-tier student freelancers and young professionals.</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container browse-content">
        <ScrollReveal delay={100}>
          <SearchBar 
            onSearch={setSearchQuery} 
            onFilterChange={setFilters}
            categories={categories}
          />
        </ScrollReveal>

        <div className="browse-results">
          {loading ? (
            <SkeletonList count={6} />
          ) : filteredFreelancers.length > 0 ? (
            <div className="grid grid--3">
              {filteredFreelancers.map((f, i) => (
                <ScrollReveal key={f.id} delay={(i % 3) * 100}>
                  <FreelancerCard freelancer={f} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="empty-state animate-fade-in">
              <div className="empty-state__icon">
                <Sparkles size={32} />
              </div>
              <h3>No freelancers found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
              <button 
                className="btn btn--outline mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setFilters({ category: '', availability: '', minBudget: '', maxBudget: '' });
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
