"use client"
import React from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import styles from "@/styles/Home.module.css";

const CloudSVG = React.memo(function CloudSVG({ width = 150, height = 90 }) {
  return (
  <svg viewBox="0 0 100 60" width={width} height={height} fill="white">
    <path d="M 10,35 Q 5,20 20,15 Q 25,5 35,8 Q 45,0 55,10 Q 70,8 75,20 Q 85,15 90,30 Q 92,45 80,52 Q 70,58 55,55 Q 40,60 25,55 Q 10,58 5,45 Q 0,40 10,35 Z" />
  </svg>
  );
});

export default function CloudAnimation() {
  const { scrollYProgress } = useScroll();

  // Match the trigger progress from TurbineAnimation
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
  
  // Vertical movement (same as turbine)
  const rawY = useTransform(easedProgress, [0, 1], ["0vh", "20vh"]);
  const y = useSpring(rawY, { stiffness: 120, damping: 20 });

  // Horizontal movement in numeric vw units (avoids string parsing each frame)
  const rawXVw = useTransform(scrollYProgress, [0, rotateInputEnd], [-120, 120]);
  const xVw = useSpring(rawXVw, { stiffness: 120, damping: 20 });
  const x = useMotionTemplate`${xVw}vw`;

  // Offset horizontal movement for second cloud
  const x2Vw = useTransform(xVw, (xVal) => xVal * 0.7);
  const x2 = useMotionTemplate`${x2Vw}vw`;

  // Create offset transforms for each cloud
  const x3Vw = useTransform(xVw, (xVal) => xVal * 0.5);
  const x3 = useMotionTemplate`${x3Vw}vw`;

  const x4Vw = useTransform(xVw, (xVal) => xVal * 0.85);
  const x4 = useMotionTemplate`${x4Vw}vw`;

  const x5Vw = useTransform(xVw, (xVal) => xVal * 0.6);
  const x5 = useMotionTemplate`${x5Vw}vw`;

  const startOffset = 55;
  const topPosition = `calc(50% - ${startOffset}px)`;


  // Cloud configurations: { scale, topOffset, xMotion, opacity, width, height }
  const cloudConfigs = [
    { scale: 1.2, topOffset: 0, xMotion: x, opacity: 0.85, width: 180, height: 108 },
    { scale: 1.0, topOffset: 200, xMotion: x2, opacity: 0.7, width: 150, height: 90 },
    { scale: 0.9, topOffset: -150, xMotion: x3, opacity: 0.6, width: 135, height: 81 },
    { scale: 1.1, topOffset: 320, xMotion: x4, opacity: 0.75, width: 165, height: 99 },
    { scale: 0.85, topOffset: 120, xMotion: x5, opacity: 0.65, width: 127, height: 76 },
  ];

  return (
    <>
      {cloudConfigs.map((config, index) => (
        <motion.div
          key={index}
          style={{
            scale: config.scale,
            position: "fixed",
            left: "50%",
            top: `calc(${topPosition} + ${config.topOffset}px)`,
            zIndex: 10 - index,
            pointerEvents: "none",
            display: "block",
            x: config.xMotion,
            y: y,
            opacity: config.opacity,
          }}
        >
          <CloudSVG width={config.width} height={config.height} />
        </motion.div>
      ))}
    </>
  );
}
