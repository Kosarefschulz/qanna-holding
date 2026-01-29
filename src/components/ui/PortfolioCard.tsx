"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Company color mapping
const companyColors: Record<string, { bg: string; text: string; gradient: string; border: string }> = {
  wertvoll: {
    bg: "bg-company-wertvoll",
    text: "text-company-wertvoll",
    gradient: "from-green-600 to-green-400",
    border: "border-company-wertvoll",
  },
  qanna: {
    bg: "bg-company-qanna",
    text: "text-company-qanna",
    gradient: "from-blue-600 to-blue-400",
    border: "border-company-qanna",
  },
  eckstein: {
    bg: "bg-company-eckstein",
    text: "text-company-eckstein",
    gradient: "from-orange-600 to-orange-400",
    border: "border-company-eckstein",
  },
  "ai-effizienz": {
    bg: "bg-company-ai",
    text: "text-company-ai",
    gradient: "from-purple-600 to-purple-400",
    border: "border-company-ai",
  },
};

// Default cover images (local images or gradients)
const defaultCovers: Record<string, string> = {
  wertvoll: "/images/companies/wertvoll-team.jpg",
  qanna: "/images/companies/qanna-team.jpg",
  eckstein: "/images/companies/eckstein-arbeit.jpg",
  "ai-effizienz": "/images/companies/ai-effizienz.jpg",
};

// Companies that use gradient backgrounds instead of images
const useGradientBackground: string[] = [];

// Company logos - mapped to brand domains
const brandLogos: Record<string, string> = {
  "rümpel-schmiede.de": "/images/logos/ruempelschmiede.png",
  "wertvoll-gartenservice.de": "/images/logos/wertvoll-gartenservice.png",
  "rueckbaupro.de": "/images/logos/rueckbaupro.png",
  "qanna-beratung.de": "/images/logos/qanna.png",
  "effiprozess.de": "/images/logos/effiprozess.png",
};

interface PortfolioCardProps {
  id: string;
  name: string;
  description: string;
  brands: string[];
  href: string;
  upcoming?: boolean;
  logo?: React.ReactNode;
  coverImage?: string;
}

// AI Neural Network Animation Component
function NeuralNetworkAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {/* Animated nodes */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={i}
            cx={50 + (i % 4) * 100}
            cy={50 + Math.floor(i / 4) * 50}
            r="4"
            fill="url(#nodeGradient)"
            initial={{ scale: 0.5, opacity: 0.3 }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
        {/* Connection lines */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={50 + (i % 4) * 100}
            y1={50 + Math.floor(i / 4) * 50}
            x2={150 + (i % 3) * 100}
            y2={100}
            stroke="#8B5CF6"
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Loading Progress Component for upcoming companies
function LoadingProgress({ percentage = 80 }: { percentage?: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <span className="text-white/90 text-sm font-medium">{percentage}%</span>
    </div>
  );
}

export function PortfolioCard({
  id,
  name,
  description,
  brands,
  href,
  upcoming = false,
  logo,
  coverImage,
}: PortfolioCardProps) {
  const [imageError, setImageError] = useState(false);
  const colors = companyColors[id] || companyColors.qanna;
  const cover = coverImage || defaultCovers[id];
  const isAI = id === "ai-effizienz";

  return (
    <Link href={href} className="block group">
      <motion.div
        className={`
          relative overflow-hidden rounded-2xl bg-white
          shadow-lg hover:shadow-2xl
          transition-all duration-500 ease-out
          transform hover:-translate-y-2
          ${upcoming ? "border-2 border-dashed border-purple-300" : ""}
        `}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Color accent bar at top */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient}`} />

        {/* Cover Image Section */}
        <div className="relative h-80 overflow-hidden">
          {/* Background Image or Gradient */}
          {!useGradientBackground.includes(id) && !imageError && cover ? (
            <img
              src={cover}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`}>
              {/* Centered Logo for gradient backgrounds */}
              {useGradientBackground.includes(id) && brands[0] && brandLogos[brands[0]] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={brandLogos[brands[0]]}
                    alt={`${name} Logo`}
                    className={`h-24 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 ${isAI ? "opacity-30" : ""}`}
                  />
                </div>
              )}
            </div>
          )}

          {/* Overlay gradient - lighter for gradient backgrounds */}
          <div className={`absolute inset-0 ${useGradientBackground.includes(id) ? "bg-gradient-to-t from-black/40 via-transparent to-transparent" : "bg-gradient-to-t from-black/60 via-black/20 to-transparent"}`} />

          {/* AI Neural Network Animation (only for AI company) */}
          {isAI && <NeuralNetworkAnimation />}


          {/* Upcoming Badge or Company Name on Image */}
          <div className="absolute bottom-4 left-4 right-4">
            {upcoming ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    Coming 2026
                  </span>
                </div>
                <LoadingProgress percentage={80} />
              </div>
            ) : (
              <h3 className="text-xl font-bold text-white drop-shadow-lg">
                {name}
              </h3>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title (only show if upcoming, otherwise it's on the image) */}
          {upcoming && (
            <h3 className="text-xl font-bold text-qanna-navy mb-2">
              {name}
            </h3>
          )}

          {/* Description */}
          <p className="text-qanna-gray-500 mb-4 line-clamp-2">
            {description}
          </p>

          {/* Brand Logos */}
          <div className="flex flex-wrap items-center gap-4">
            {brands.map((brand) => (
              <div
                key={brand}
                className="group/brand cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(`https://${brand}`, "_blank");
                }}
              >
                {brandLogos[brand] && (
                  <div className="h-14 flex items-center justify-center">
                    <img
                      src={brandLogos[brand]}
                      alt={`${brand} Logo`}
                      className="h-full w-auto object-contain transition-all duration-300 group-hover/brand:scale-110 opacity-80 group-hover/brand:opacity-100"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* View More Arrow */}
          <div className="mt-4 flex items-center text-sm font-medium text-qanna-navy opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
            <span>Mehr erfahren</span>
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default PortfolioCard;
