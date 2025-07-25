"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useTheme } from "next-themes";
import { cn } from "@/components/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  parallax?: boolean;
};

const Card: React.FC<CardProps> = ({
  children,
  className,
  parallax = false,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });
  const yOffset = useTransform(
    smoothProgress,
    [0, 1],
    [parallax ? 100 : 0, parallax ? -100 : 0]
  );

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-white/50 dark:bg-black/30 backdrop-blur-md",
        className
      )}
      style={parallax ? { y: yOffset } : {}}
    >
      {children}
    </motion.div>
  );
};

const AnimatedWave: React.FC = () => {
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const cards = [
    {
      id: 1,
      color: "bg-gradient-to-r from-blue-500 to-purple-500",
      parallax: true,
    },
    {
      id: 2,
      color: "bg-gradient-to-r from-green-400 to-blue-400",
      parallax: false,
    },
    {
      id: 3,
      color: "bg-gradient-to-r from-yellow-500 to-pink-500",
      parallax: true,
    },
  ];

  return (
    <div className="flex flex-col gap-10 py-20 px-4 sm:px-8 lg:px-32">
      {cards.map((card) => (
        <Card key={card.id} className={card.color} parallax={card.parallax}>
          <div className="p-10 text-white text-lg font-semibold">
            Card #{card.id} - {card.parallax ? "Parallax On" : "Parallax Off"}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AnimatedWave;
