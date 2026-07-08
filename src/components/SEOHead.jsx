import { useEffect } from 'react';

export default function SEOHead({ title, description, path = '' }) {
  useEffect(() => {
    document.title = title ? `${title} | SkillNest` : 'SkillNest — Hire Exceptional Freelancers';

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        if (name.startsWith('og:')) {
          el.setAttribute('property', name);
        } else {
          el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const desc = description || 'Connect with top student freelancers and young professionals in software development, design, AI, and more.';
    const url = `https://skillnest.com${path}`;

    setMeta('description', desc);
    setMeta('og:title', title || 'SkillNest');
    setMeta('og:description', desc);
    setMeta('og:type', 'website');
    setMeta('og:url', url);
    setMeta('og:site_name', 'SkillNest');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title || 'SkillNest');
    setMeta('twitter:description', desc);
  }, [title, description, path]);

  return null;
}
