import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "../data/site";

const slides = [
  {
    key: "slide1",
    intro: (
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="badge">{SITE.highlight}</div>
          <h1 className="h1">Welcome to {SITE.brand}</h1>
          <h5>by Riokap (Subsidiary of Aificon advisory and consulting pvt ltd)</h5>
          <p className="muted">Strategic Insights. Simpler Decisions.</p>
          <div className="row gap-12 mt-16">
            <a href="#contact" className="btn">Send your query</a>
            <a href="#services" className="btn outline">Discover services</a>
          </div>
        </motion.div>
      </div>
    ),
    form: true,
    image: null,
  },
  {
    key: "slide2",
    intro: (
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="badge">{SITE.highlight}</div>
          <h1 className="h1">Welcome to {SITE.brand}</h1>
          <h5>by Riokap (Subsidiary of Aificon advisory and consulting pvt ltd)</h5>
          <p className="muted">Strategic Insights. Simpler Decisions.</p>
          <div className="row gap-12 mt-16">
            <a href="#contact" className="btn">Send your query</a>
            <a href="#services" className="btn outline">Discover services</a>
          </div>
        </motion.div>
      </div>
    ),
    form: false,
    image: "/money-5029288_1280.jpg",
  },
  {
    key: "slide3",
    intro: (
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="badge">{SITE.highlight}</div>
          <h1 className="h1">Welcome to {SITE.brand}</h1>
          <h5>by Riokap (Subsidiary of Aificon advisory and consulting pvt ltd)</h5>
          <p className="muted">Strategic Insights. Simpler Decisions.</p>
          <div className="row gap-12 mt-16">
            <a href="#contact" className="btn">Send your query</a>
            <a href="#services" className="btn outline">Discover services</a>
          </div>
        </motion.div>
      </div>
    ),
    form: false,
    image: "/tech-daily-ztYmIQecyH4-unsplash.jpg",
  },
];

export default function Hero(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const idleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // -----------------------------
  // Auto-slide Logic
  // -----------------------------
  const startAutoSlide = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const restartAfterIdle = () => {
    if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);

    idleTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 2000);
  };

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    restartAfterIdle();
  };

  const handleNext = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    restartAfterIdle();
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  // Pause on form interaction
  const handleFormFocus = () => {
    stopAutoSlide();
  };

  const handleFormBlur = () => {
    restartAfterIdle();
  };

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg" />

      <div className="hero-slider">
        <button aria-label="Previous slide" className="nav-arrow left" onClick={handlePrev}>
          &#10094;
        </button>

        <button aria-label="Next slide" className="nav-arrow right" onClick={handleNext}>
          &#10095;
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].key}
            className="hero-content container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`hero-text ${slides[currentSlide].form ? "with-form" : "with-image"
                }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="intro-text"
              >
                {slides[currentSlide].intro}
              </motion.div>
            </div>

            {/* FORM SLIDE */}
            {slides[currentSlide].form && (
              <motion.form
                name="query"
                method="POST"
                data-netlify="true"
                className="hero-form"
                onFocus={handleFormFocus}
                onBlur={handleFormBlur}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <input type="hidden" name="form-name" value="query" />
                <input required placeholder="Full Name" name="name" />
                <input required placeholder="Phone Number" name="phone" />
                <input required type="email" placeholder="Email" name="email" />
                <textarea required placeholder="Write your query" name="message" rows={4} />
                <button className="btn" type="submit">
                  Submit your query
                </button>
              </motion.form>
            )}

            {/* IMAGE SLIDES */}
            {!slides[currentSlide].form && slides[currentSlide].image && (
              <motion.div
                className="hero-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img src={slides[currentSlide].image} alt="Hero image" />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
