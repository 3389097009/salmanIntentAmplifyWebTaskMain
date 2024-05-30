import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

// Component import
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import BrandsLogo from "../components/BrandsLogo/BrandsLogo.jsx";
import Services from "../components/Services/Services.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import Footer from "../components/Footer/Footer.jsx";

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
           
            <Navbar />
            <Hero />
            <BrandsLogo />
            <Services />
            <Testimonial />
            {/* <BlogsComp /> */}
            <Footer />

        </div>
    );
};

export default App;
