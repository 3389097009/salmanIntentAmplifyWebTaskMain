import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ContactUs from "./pages/ContactUs.jsx";
// Component import
import LandingPage from './pages/LandingPage.jsx';
import PodcastPage from "./pages/PodcastPage.jsx";
import InfographicsPage from './pages/InfographicsPage.jsx';
import BlogsComp from "./components/Blogs/BlogsComp.jsx";



const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogscomp" element={<BlogsComp />} />
          <Route path="/podcastpage" element={<PodcastPage />} />
          <Route path="/infographicspage" element={<InfographicsPage />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>


    </div>
  );
};

export default App;
{/* <Navbar />
      <Hero />
      <BrandsLogo />
      <Services />
      <Testimonial />;
 <BlogsComp />  
<Footer />; */}