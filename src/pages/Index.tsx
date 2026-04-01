import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import { useEffect, useState, useCallback } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // When 50% of the section is in the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 antialiased">
      <Navbar scrollTo={scrollTo} activeSection={activeSection} />
      <main>
        <Hero id="hero" scrollTo={scrollTo} />
        <Features id="features" />
        <HowItWorks id="how-it-works" />
        <Testimonials id="testimonials" />
        <Pricing id="pricing" />
        <Faq id="faq" />
        <Contact id="contact" />
      </main>
      <Footer id="footer" scrollTo={scrollTo} />
      <BackToTopButton />
    </div>
  );
};

export default Index;