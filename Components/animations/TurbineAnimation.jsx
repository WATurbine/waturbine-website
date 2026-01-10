"use client"
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import TurbineBlades from "./TurbineBlades";
import CloudAnimation from "./CloudAnimation";
import styles from "@/styles/Home.module.css";

export default function TurbineScrollAnimation() {
  const { scrollYProgress } = useScroll();

  // progress value (0..1) at which the about section reaches the top of the
  // viewport. We'll compute this on mount and on resize so we can map the
  // rotation to complete by that scroll progress.
  const [triggerProgress, setTriggerProgress] = React.useState(0.9);
  const [startScale, setStartScale] = React.useState(3.0);

  React.useEffect(() => {
    function computeTrigger() {
      const about = document.querySelector("." + styles.mainAbout);
      if (!about) return setTriggerProgress(0.9);
      const top = about.getBoundingClientRect().top + window.scrollY;
      const totalScrollable = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, top / totalScrollable));
      setTriggerProgress(p);
    }

    function computeResponsiveScale() {
      const width = window.innerWidth;
      // Mobile: < 768px -> scale 2.0
      // Tablet: 768-1024px -> scale 2.5
      // Laptop: 1024-1440px -> scale 3.0
      // Desktop: > 1440px -> scale 3.5
      if (width < 768) {
        setStartScale(2.0);
      } else if (width < 1024) {
        setStartScale(2.5);
      } else if (width < 1440) {
        setStartScale(3.0);
      } else {
        setStartScale(3.5);
      }
    }

    computeTrigger();
    computeResponsiveScale();
    window.addEventListener("resize", computeTrigger);
    window.addEventListener("resize", computeResponsiveScale);
    // also recompute after a short delay in case layout shifts
    const t = setTimeout(() => {
      computeTrigger();
      computeResponsiveScale();
    }, 300);
    return () => {
      window.removeEventListener("resize", computeTrigger);
      window.removeEventListener("resize", computeResponsiveScale);
      clearTimeout(t);
    };
  }, []);

    const easePower = 2.5;


  const completionMultiplier = 0.85; 
  const rotateInputEnd = triggerProgress > 0
    ? Math.max(0.01, triggerProgress * completionMultiplier)
    : completionMultiplier;

    const localProgress = useTransform(scrollYProgress, [0, rotateInputEnd], [0, 1]);
    const easedProgress = useTransform(localProgress, (v) => Math.pow(v, easePower));
    const rawY = useTransform(easedProgress, [0, 1], ["0vh", "20vh"]);
    // smooth vertical movement slightly
    const y = useSpring(rawY, { stiffness: 120, damping: 20 });

  const scale = useTransform(scrollYProgress, [0, rotateInputEnd], [startScale, 1]);

  const rawRotate = useTransform(scrollYProgress, [0, rotateInputEnd], [0, 1080]);

  const rotate = useSpring(rawRotate, { stiffness: 120, damping: 20 });

  React.useEffect(() => {
    const revealThreshold = 0.9 * 1080; // 90% of 1080deg
    const unsubscribe = rotate.onChange((v) => {
      const aboutEl = document.querySelector("." + styles.mainAbout);
      if (!aboutEl) return;
      if (v >= revealThreshold) {
        if (!aboutEl.classList.contains(styles.mainAboutVisible)) {
          aboutEl.classList.add(styles.mainAboutVisible);
        }
      } else {
        if (aboutEl.classList.contains(styles.mainAboutVisible)) {
          aboutEl.classList.remove(styles.mainAboutVisible);
        }
      }
    });
    return () => unsubscribe();
  }, [rotate]);

  // Position turbine to align with the center of the logo in the hero section
  // Hero section is 60vh, and logo is centered within it
  // We want the turbine at roughly 30vh from top (center of 60vh hero section)
  const startOffset = 0;
  const topPosition = `40vh`;

  // Track if animation is complete and the absolute position to stick to
  const [isAnimationComplete, setIsAnimationComplete] = React.useState(false);
  const [stickyTop, setStickyTop] = React.useState(0);

  React.useEffect(() => {
    // Calculate the sticky position once on mount/resize, not based on scroll
    function computeStickyPosition() {
      const about = document.querySelector("." + styles.mainAbout);
      const descriptionSection = document.querySelector("." + styles.descriptionSection);
      if (!about) return;
      const viewportHeight = window.innerHeight;
      const aboutTop = about.getBoundingClientRect().top + window.scrollY;
      // Adjust this value to move the turbine's final position up or down
      // Higher values = lower on page, lower values = higher on page
      const turbineOffsetFromAbout = 0.34 * viewportHeight; // Adjust this multiplier (0.3 = 30vh below about section)
      const absoluteTop = aboutTop + turbineOffsetFromAbout;
      setStickyTop(absoluteTop);
      
      // Calculate the bottom of the turbine (center + half of container height)
      // Turbine container is 260px, so bottom is 130px below center
      const turbineBottom = absoluteTop + 205;
      
      // Set the description section to start at the turbine's bottom
      if (descriptionSection) {
        descriptionSection.style.position = 'absolute';
        descriptionSection.style.top = `${turbineBottom}px`;
        descriptionSection.style.left = '0';
        descriptionSection.style.right = '0';
      }
    }

    computeStickyPosition();
    window.addEventListener("resize", computeStickyPosition);
    const t = setTimeout(computeStickyPosition, 300);

    const unsubscribe = scrollYProgress.onChange((v) => {
      if (v >= rotateInputEnd && !isAnimationComplete) {
        setIsAnimationComplete(true);
      } else if (v < rotateInputEnd && isAnimationComplete) {
        setIsAnimationComplete(false);
      }
    });

    return () => {
      unsubscribe();
      window.removeEventListener("resize", computeStickyPosition);
      clearTimeout(t);
    };
  }, [scrollYProgress, rotateInputEnd, isAnimationComplete, startOffset]);

  return (
    <>
      <CloudAnimation />
      <motion.div
        style={{
          scale,
          position: isAnimationComplete ? "absolute" : "fixed",
          left: "50%",
          top: isAnimationComplete ? `${stickyTop}px` : topPosition,
          zIndex: 5,
          pointerEvents: "none",
          width: "260px",
          height: "260px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // animate vertical position via y MotionValue
          y: isAnimationComplete ? 0 : y,
          transformOrigin: "center center",
          x: "-50%",
        }}
      >
        <motion.div
          style={{ width: "100%", height: "100%", position: "relative", rotate }}
        >
          <TurbineBlades />
        </motion.div>
      </motion.div>

      {/* Triangle Stand */}
      <motion.div
        style={{
          position: isAnimationComplete ? "absolute" : "fixed",
          left: "50%",
          top: isAnimationComplete ? `${stickyTop + 110}px` : `calc(50% + 65px + 20vh)`,
          zIndex: 4,
          pointerEvents: "none",
          width: 0,
          height: 0,
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderBottom: "120px solid #FFFFFF",
          opacity: isAnimationComplete ? 1 : 0,
          transition: isAnimationComplete ? "opacity 0.6s ease-in" : "opacity 0.3s ease-out",
          x: "-50%",
        }}
      />
    </>
  );
}
