import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTop from './components/BackToTop';

// Pages
import Home from './pages/Home';
import BrowseFreelancers from './pages/BrowseFreelancers';
import FreelancerProfile from './pages/FreelancerProfile';
import PostProject from './pages/PostProject';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(prev => !prev);

  return (
    <>
      <ScrollToTop />
      <ScrollProgressBar />
      
      <Navbar isDark={isDark} onToggleDark={toggleDark} />
      
      <main className="page-enter-active">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseFreelancers />} />
          <Route path="/freelancer/:id" element={<FreelancerProfile />} />
          <Route path="/post-project" element={<PostProject />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
