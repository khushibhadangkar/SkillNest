import { useEffect } from 'react';
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
import ComingSoon from './pages/ComingSoon';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {

  return (
    <>
      <ScrollToTop />
      <ScrollProgressBar />
      
      <Navbar />
      
      <main className="page-enter-active">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseFreelancers />} />
          <Route path="/freelancer/:id" element={<FreelancerProfile />} />
          <Route path="/post-project" element={<PostProject />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
