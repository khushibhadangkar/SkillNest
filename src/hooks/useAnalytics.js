export default function useAnalytics() {
  const trackEvent = (eventName, params = {}) => {
    /* GA4 tracking — logs in dev, sends to gtag in production */
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params);
    }

    if (import.meta.env.DEV) {
      console.log(`[Analytics] ${eventName}`, params);
    }
  };

  return {
    trackViewFreelancer: (freelancerId, name) =>
      trackEvent('view_freelancer', { freelancer_id: freelancerId, freelancer_name: name }),

    trackSearch: (query, resultCount) =>
      trackEvent('search', { search_term: query, results_count: resultCount }),

    trackFilter: (filterType, filterValue) =>
      trackEvent('filter_applied', { filter_type: filterType, filter_value: filterValue }),

    trackHireClick: (freelancerId, name) =>
      trackEvent('hire_click', { freelancer_id: freelancerId, freelancer_name: name }),

    trackPostProject: (category, budget) =>
      trackEvent('post_project', { category, budget }),

    trackNewsletterSignup: (email) =>
      trackEvent('newsletter_signup', { method: 'email' }),

    trackContactForm: () =>
      trackEvent('contact_form_submit'),

    trackNavClick: (destination) =>
      trackEvent('nav_click', { destination }),

    trackCtaClick: (ctaName, location) =>
      trackEvent('cta_click', { cta_name: ctaName, location }),

    trackScrollDepth: (depth) =>
      trackEvent('scroll_depth', { depth_percentage: depth }),

    trackEvent,
  };
}
