import { useState } from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollReveal from '../components/ScrollReveal';
import { blogPosts } from '../data/blog';
import './Blog.css';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(blogPosts.map(p => p.category))];
  const featuredPost = blogPosts.find(p => p.featured);
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts.filter(p => !p.featured) 
    : blogPosts.filter(p => p.category === activeCategory);

  return (
    <div className="page-blog">
      <SEOHead 
        title="Blog" 
        description="Insights, guides, and tips on freelancing, hiring, and the future of work."
        path="/blog"
      />

      <div className="blog-header">
        <div className="container text-center">
          <ScrollReveal>
            <h1 className="blog-title">The <span className="gradient-text">SkillNest Blog</span></h1>
            <p className="blog-subtitle">Insights and guides on the future of freelance work.</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container blog-content">
        {/* Featured Post */}
        {featuredPost && activeCategory === 'All' && (
          <ScrollReveal>
            <div className="featured-post hover-lift">
              <div className="featured-post__content">
                <span className="blog-category-badge">{featuredPost.category}</span>
                <h2 className="featured-post__title">{featuredPost.title}</h2>
                <p className="featured-post__excerpt">{featuredPost.excerpt}</p>
                <div className="blog-meta">
                  <span><User size={14} /> {featuredPost.author}</span>
                  <span><Clock size={14} /> {featuredPost.readTime}</span>
                </div>
                <button className="blog-read-more">Read Article <ArrowRight size={16} /></button>
              </div>
              <div className="featured-post__image">
                <div className="blog-image-placeholder" style={{ background: 'var(--gradient-cta)' }} />
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Category Filter */}
        <div className="blog-categories animate-fade-in-up">
          {categories.map(cat => (
            <button
              key={cat}
              className={`blog-category-btn ${activeCategory === cat ? 'blog-category-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="blog-grid">
          {filteredPosts.map((post, i) => (
            <ScrollReveal key={post.id} delay={(i % 3) * 100}>
              <div className="blog-card hover-lift">
                <div className="blog-card__image">
                  <div className="blog-image-placeholder" style={{ background: 'var(--color-bg-tertiary)' }} />
                  <span className="blog-category-badge absolute-badge">{post.category}</span>
                </div>
                <div className="blog-card__content">
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-meta mt-auto">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center" style={{ padding: '40px 0' }}>
            <p className="text-muted">No posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
