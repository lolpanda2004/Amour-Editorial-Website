"use client";

import { motion } from "framer-motion";
import React from "react";

export interface MarqueeImage {
  src: string;
  alt: string;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export interface ThreeDMarqueeProps {
  images: MarqueeImage[];
  className?: string;
  cols?: number; // default is 4
  rows?: number; // default is 1
  speed?: number; // default is 10
  height?: number; // px, default 100
  width?: number; // px, default 100
  gap?: number; // px, default 10
  borderRadius?: number; // px, default 10
  borderWidth?: number; // px, default 1
  borderColor?: string; // default 'gray'
  onImageClick?: (image: MarqueeImage, index: number) => void;
}

export const ThreeDMarquee: React.FC<ThreeDMarqueeProps> = ({
  images,
  className = "",
  cols = 4,
  rows = 1,
  speed = 10,
  height = 100,
  width = 100,
  gap = 10,
  borderRadius = 10,
  borderWidth = 1,
  borderColor = "gray",
  onImageClick,
}) => {
  // Fill the grid with enough images
  const totalCells = rows * cols;
  const repeatedImages = Array.from({ length: totalCells }, (_, i) => images[i % images.length]);

  // Create a 2D array for the grid
  const grid: MarqueeImage[][] = [];
  for (let r = 0; r < rows; r++) {
    grid.push(repeatedImages.slice(r * cols, (r + 1) * cols));
  }

  const handleImageClick = (image: MarqueeImage, globalIndex: number) => {
    if (onImageClick) {
      onImageClick(image, globalIndex);
    } else if (image.href) {
      window.open(image.href, image.target || "_self");
    }
  };

  return (
    <section
      className={`mx-auto block overflow-hidden ${className}`}
      style={{
        height: rows * (height + gap),
        background: "transparent",
        borderRadius: 24,
      }}
    >
      <div
        className="flex w-full h-full items-center justify-center"
        style={{
          transform: "rotateX(55deg) rotateY(0deg) rotateZ(45deg)",
        }}
      >
        <div className="w-full overflow-hidden scale-90 sm:scale-100">
          <div
            className={`relative grid h-full w-full origin-center`}
            style={{
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
              gap: `${gap}px`,
            }}
          >
            {grid.map((row, rowIdx) =>
              row.map((image, colIdx) => {
                const globalIndex = rowIdx * cols + colIdx;
                const isClickable = image.href || onImageClick;
                // Animate each row in opposite directions for effect
                const animateY = rowIdx % 2 === 0 ? 100 : -100;
                return (
                  <motion.div
                    key={`cell-${rowIdx}-${colIdx}`}
                    animate={{ y: animateY }}
                    transition={{
                      duration: speed,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="flex items-center justify-center"
                  >
                    <motion.img
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      src={image.src}
                      alt={image.alt}
                      width={width}
                      height={height}
                      style={{
                        borderRadius: borderRadius,
                        borderWidth: borderWidth,
                        borderColor: borderColor,
                        borderStyle: "solid",
                        width: width,
                        height: height,
                        objectFit: "cover",
                        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                        background: "#fff",
                      }}
                      className={`transition-shadow duration-300 ${isClickable ? "cursor-pointer" : ""}`}
                      onClick={() => handleImageClick(image, globalIndex)}
                    />
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
