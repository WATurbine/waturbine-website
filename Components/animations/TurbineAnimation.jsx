"use client"
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import TurbineBlades from "./TurbineBlades";
import styles from "@/styles/Home.module.css";

export default function TurbineScrollAnimation() {
  const { scrollYProgress } = useScroll();

  // progress value (0..1) at which the about section reaches the top of the
  // viewport. We'll compute this on mount and on resize so we can map the
  // rotation to complete by that scroll progress.
  const [triggerProgress, setTriggerProgress] = React.useState(0.9);

  React.useEffect(() => {
    function computeTrigger() {
      const about = document.querySelector("." + styles.mainAbout);
      if (!about) return setTriggerProgress(0.9);
      const top = about.getBoundingClientRect().top + window.scrollY;
      const totalScrollable = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, top / totalScrollable));
      setTriggerProgress(p);
    }
    computeTrigger();
    window.addEventListener("resize", computeTrigger);
    // also recompute after a short delay in case layout shifts
    const t = setTimeout(computeTrigger, 300);
    return () => {
      window.removeEventListener("resize", computeTrigger);
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

  const scale = useTransform(scrollYProgress, [0, rotateInputEnd], [3.5, 1]);

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

  const startOffset = 55; //Offset in px
  const topPosition = `calc(50% - ${startOffset}px)`;

  // Track if animation is complete and the absolute position to stick to
  const [isAnimationComplete, setIsAnimationComplete] = React.useState(false);
  const [stickyTop, setStickyTop] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      if (v >= rotateInputEnd && !isAnimationComplete) {
        // Calculate current position in viewport and convert to absolute position from page top
        const currentScrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const turbineTopInViewport = viewportHeight / 2 - startOffset + (0.2 * viewportHeight); // including the 20vh y offset
        const absoluteTop = currentScrollY + turbineTopInViewport;
        setStickyTop(absoluteTop);
        setIsAnimationComplete(true);
      } else if (v < rotateInputEnd && isAnimationComplete) {
        setIsAnimationComplete(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, rotateInputEnd, isAnimationComplete, startOffset]);

  return (
    <>
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
          display: "block",
          // center horizontally via x and animate vertical position via y MotionValue
          x: "-50%",
          y: isAnimationComplete ? 0 : y
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
