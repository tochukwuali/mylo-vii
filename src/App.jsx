import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import "./App.css";

// ADD THESE PHOTO IMPORTS HERE:
import photo1 from "./assets/my6.jpg";
import photo2 from "./assets/my3.jpg";
import photo3 from "./assets/nc1.jpeg";
import photo4 from "./assets/nc3.jpeg";

function App() {
  const [showForeverOverlay, setShowForeverOverlay] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const grainStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    opacity: 0.03,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    zIndex: 1000,
  };

  return (
    <div ref={containerRef} className="storybook-container">
      <div style={grainStyle} />
      <CoverPage scrollProgress={scrollYProgress} />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
      <ForeverButton onClick={() => setShowForeverOverlay(true)} />
      {showForeverOverlay && (
        <ForeverOverlay onClose={() => setShowForeverOverlay(false)} />
      )}
    </div>
  );
}

const CoverPage = ({ scrollProgress }) => {
  const scale = useTransform(scrollProgress, [0, 0.15], [1, 1.2]);
  const opacity = useTransform(scrollProgress, [0, 0.15], [1, 0]);
  const y = useTransform(scrollProgress, [0, 0.15], [0, -50]);

  return (
    <motion.section className="cover-page" style={{ scale, opacity, y }}>
      {/* Floating particles background */}
      <FloatingParticles />

      {/* Animated Heart Hero */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="hero-heart-container"
      >
        <motion.svg
          width="140"
          height="140"
          viewBox="0 0 24 24"
          fill="none"
          className="hero-heart"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            stroke="#D68C8C"
            strokeWidth="1.5"
            initial={{ pathLength: 0, fill: "rgba(214, 140, 140, 0)" }}
            animate={{
              pathLength: 1,
              fill: "rgba(214, 140, 140, 0.15)",
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, delay: 1.5, ease: "easeInOut" },
            }}
          />
        </motion.svg>

        {/* Decorative rings around heart */}
        <motion.div
          className="heart-ring"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.3, opacity: 0 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="heart-ring"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.3, opacity: 0 }}
          transition={{
            duration: 2.5,
            delay: 0.8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.div>

      <motion.div
        className="cover-line"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1.2,
          delay: 1.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      />

      <motion.h1
        className="cover-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        Seven years.
        <br />
        A thousand sunsets.
        <br />
        One story.
      </motion.h1>

      {/* Decorative date */}
      <motion.div
        className="anniversary-date"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        2019 — 2026
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Scroll to begin
      </motion.div>
    </motion.section>
  );
};

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 12 });

  return (
    <div className="particles-container">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            x: [null, Math.random() * 100 - 50],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 4,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Chapter1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const paragraphs = [
    "It started with a glance across a crowded room. Not the kind you see in movies, but something quieter. More real.",
    "You laughed at something I said, and I remember thinking—this is someone I want to know. Someone I want to keep knowing.",
    "Seven years ago, we were strangers. Today, you're the person I tell everything to. The one who knows my coffee order, my anxious habits, and the way I hum when I'm happy.",
    "This is our beginning. But it's also our middle. And I hope, our forever.",
  ];

  return (
    <section ref={ref} className="chapter chapter-1">
      <motion.h2
        className="chapter-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        Chapter One: The Beginning
      </motion.h2>

      {paragraphs.map((text, index) => (
        <motion.p
          key={index}
          className="chapter-paragraph"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2 + 0.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          {text}
        </motion.p>
      ))}
    </section>
  );
};

const Chapter2 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const milestones = [
    {
      year: "Year 1",
      title: "The First Meeting",
      description:
        "2019. The year everything changed. A chance encounter that felt like fate.",
      side: "left",
    },
    {
      year: "Year 2",
      title: "The First Trip",
      description:
        "We drove to the coast with no plan. Got lost three times. Found the best sunset of our lives.",
      side: "right",
    },
    {
      year: "Year 3",
      title: "Moving In",
      description:
        "Boxes everywhere. Your plants took over the windowsill. We built a home together, one Sunday morning at a time.",
      side: "left",
    },
    {
      year: "Year 4",
      title: "The Hard Season",
      description:
        "Not every year is easy. But we learned that love isn't just the happy moments—it's staying when things get difficult.",
      side: "right",
    },
    {
      year: "Year 5",
      title: "Finding Our Rhythm",
      description:
        "Coffee on the balcony. Long walks. The comfort of knowing someone completely and being known in return.",
      side: "left",
    },
    {
      year: "Year 6",
      title: "Growing Stronger",
      description:
        "Six years in and still discovering new layers. Still choosing each other every single day.",
      side: "right",
    },
    {
      year: "Year 7",
      title: "Today",
      description:
        "Seven years in. A lifetime to go. Still discovering new things about you. Still grateful every single day.",
      side: "left",
    },
  ];

  return (
    <section ref={ref} className="chapter chapter-2">
      <motion.h2
        className="chapter-title centered"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        Chapter Two: Growing Together
      </motion.h2>

      <div className="timeline-line">
        <motion.div
          className="timeline-progress"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="timeline-container">
        {milestones.map((milestone, index) => (
          <TimelineMilestone key={index} {...milestone} index={index} />
        ))}
      </div>
    </section>
  );
};

const TimelineMilestone = ({ year, title, description, side, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.8 });

  return (
    <motion.div
      ref={ref}
      className={`timeline-milestone ${side}`}
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: side === "left" ? -30 : 30 }
      }
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="milestone-content">
        <motion.div
          className="milestone-dot"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <h3 className="milestone-year">{year}</h3>
        <h4 className="milestone-title">{title}</h4>
        <p className="milestone-description">{description}</p>
      </div>
    </motion.div>
  );
};

const Chapter3 = () => {
  const photos = [
    {
      id: 1,
      caption: "First adventure together",
      color: "#E8D5C4",
      emoji: "🌅",
      location: "The Coast",
      image: photo1,
    },
    {
      id: 2,
      caption: "Home",
      color: "#D4C5B9",
      emoji: "🏡",
      location: "Our First Place",
      image: photo2,
    },
    {
      id: 3,
      caption: "Your favorite smile",
      color: "#C9B8A8",
      emoji: "😊",
      location: "Everywhere",
      image: photo3,
    },
    {
      id: 4,
      caption: "Where we belong",
      color: "#E0D2C1",
      emoji: "💑",
      location: "Together",
      image: photo4,
    },
  ];

  return (
    <section className="chapter chapter-3">
      <motion.h2
        className="chapter-title centered"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        Chapter Three: Our Moments
      </motion.h2>

      <motion.p
        className="gallery-instruction"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Scroll slowly to flip through our memories
      </motion.p>

      <div className="gallery-container">
        {photos.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            index={index}
            total={photos.length}
          />
        ))}
      </div>

      <motion.p
        className="gallery-note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        💡 Tip: Replace these placeholders with your actual photos in
        src/App.jsx
      </motion.p>
    </section>
  );
};

const PhotoCard = ({ photo, index, total }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Visible when card is in view (progress ~0.2–0.8), fade when entering/leaving
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0],
  );

  const x = useTransform(
    scrollYProgress,
    [0.2 + index * 0.05, 0.6 + index * 0.05],
    [0, -80],
  );

  const rotate = useTransform(
    scrollYProgress,
    [0.2 + index * 0.05, 0.6 + index * 0.05],
    [0, -6],
  );

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="photo-card"
      style={{
        top: `${index * 20}px`,
        backgroundColor: photo.color,
        x,
        opacity,
        rotate,
        zIndex: total - index,
        boxShadow: isHovered
          ? "0 20px 60px rgba(212, 140, 140, 0.3)"
          : "0 10px 30px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ filter: "blur(1px)" }}
    >
      {/* Card number indicator */}
      <div className="photo-number">
        {index + 1} / {total}
      </div>

      {/* Main content area */}
      <div className="photo-content">
        {photo.image ? (
          <img
            src={typeof photo.image === "string" ? photo.image : photo.image?.default ?? photo.image}
            alt={photo.caption}
          />
        ) : (
          // Show placeholder if no image
          <>
            <div className="photo-placeholder-large">{photo.emoji}</div>
            <div className="photo-location">{photo.location}</div>
          </>
        )}
      </div>

      {/* Caption at bottom */}
      <div className="photo-caption">
        <p>{photo.caption}</p>
      </div>

      {/* Decorative corner */}
      <div className="photo-corner" />
    </motion.div>
  );
};

const Chapter4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayedText, setDisplayedText] = useState("");

  const fullText = `My love,

Seven years. It feels like yesterday and forever ago all at once.

I've watched you grow. I've grown alongside you. We've built something beautiful—not perfect, but ours.

Thank you for every morning. Every laugh. Every moment of patience when I needed it most.

Here's to the next seven years. And the seven after that. And every year that follows.

Forever grateful,
Always yours`;

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={ref} className="chapter chapter-4">
      <motion.h2
        className="chapter-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        A Letter For You
      </motion.h2>

      <div className="love-letter">
        {displayedText}
        <motion.span
          className="cursor"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          |
        </motion.span>
      </div>
    </section>
  );
};

const ForeverButton = ({ onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 1 });

  return (
    <section className="forever-section">
      <motion.button
        ref={ref}
        className="forever-button"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
      >
        Our Future
      </motion.button>
    </section>
  );
};

const ForeverOverlay = ({ onClose }) => {
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHeart(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="forever-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {showHeart && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D68C8C"
            strokeWidth="1.5"
          >
            <motion.path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              initial={{ pathLength: 0, fill: "rgba(214, 140, 140, 0)" }}
              animate={{ pathLength: 1, fill: "rgba(214, 140, 140, 0.2)" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      )}

      <motion.p
        className="overlay-message"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        To be continued...
      </motion.p>

      <motion.p
        className="overlay-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Tap to close
      </motion.p>
    </motion.div>
  );
};

export default App;
