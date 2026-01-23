"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TeamImage {
  src: string;
  alt: string;
  caption?: string;
}

interface TeamGalleryProps {
  images: TeamImage[];
  title?: string;
  subtitle?: string;
  autoPlayInterval?: number;
  className?: string;
}

export function TeamGallery({
  images,
  title = "Unser Team",
  subtitle,
  autoPlayInterval = 5000,
  className = "",
}: TeamGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState<TeamImage[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  // Shuffle images on mount
  useEffect(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, [images]);

  // Auto-play carousel
  useEffect(() => {
    if (shuffledImages.length === 0 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [shuffledImages.length, autoPlayInterval, isHovered]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? shuffledImages.length - 1 : prev - 1
    );
  }, [shuffledImages.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
  }, [shuffledImages.length]);

  if (shuffledImages.length === 0) return null;

  return (
    <section className={`section-padding bg-qanna-gray-50 ${className}`}>
      <div className="container-qanna">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-qanna-navy mb-4"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-qanna-gray-500 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Gallery Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Image Container */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-qanna-navy/5 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={shuffledImages[currentIndex]?.src}
                  alt={shuffledImages[currentIndex]?.alt}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Caption */}
            <AnimatePresence mode="wait">
              {shuffledImages[currentIndex]?.caption && (
                <motion.div
                  key={`caption-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <p className="text-white text-lg md:text-xl font-medium drop-shadow-lg">
                    {shuffledImages[currentIndex].caption}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-qanna-navy hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Vorheriges Bild"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-qanna-navy hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Nächstes Bild"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-6 flex justify-center gap-3">
            {shuffledImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-qanna-gold ring-offset-2 scale-105"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
                aria-label={`Bild ${index + 1} anzeigen`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeThumbnail"
                    className="absolute inset-0 border-2 border-qanna-gold rounded-lg"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-4 flex justify-center gap-2">
            {shuffledImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative"
                aria-label={`Bild ${index + 1}`}
              >
                <div
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-qanna-gold"
                      : "w-2 bg-qanna-navy/20 group-hover:bg-qanna-navy/40"
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-qanna-gold">7+</div>
            <p className="text-sm text-qanna-gray-500 mt-1">Jahre Erfahrung</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-qanna-gold">2</div>
            <p className="text-sm text-qanna-gray-500 mt-1">Starke Marken</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-qanna-gold">OWL</div>
            <p className="text-sm text-qanna-gray-500 mt-1">Region</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TeamGallery;
