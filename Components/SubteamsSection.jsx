'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SettingsIcon from '@mui/icons-material/Settings';
import AirIcon from '@mui/icons-material/Air';
import ComputerIcon from '@mui/icons-material/Computer';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import styles from '@/styles/subteamsSection.module.css';

// Content model for each subteam showcase slide.
// Update this list to change names, colors, descriptions, and paired images.
const subteams = [
  {
    id: 1,
    name: 'Aerodynamics',
    icon: AirIcon,
    description: 'Optimizing blade design for maximum energy capture',
    color: '#7675ED',
    image1: '/aero1.jpg', 
    image2: '/aero2.jpg',
  },
  {
    id: 2,
    name: 'Mechanical',
    icon: SettingsIcon,
    description: 'Engineering robust mechanical systems',
    color: '#FFCC40',
    image1: '/mech1.jpg', 
    image2: '/mech2.jpg',
  },
  {
    id: 3,
    name: 'Structural',
    icon: AccountBalanceIcon,
    description: 'Ensuring stability and durability',
    color: '#FF6B9D',
    image1: '/struct1.jpg', 
    image2: '/struct2.jpg',
  },
  {
    id: 4,
    name: 'Power',
    icon: ElectricBoltIcon,
    description: 'Ensuring efficient energy conversion',
    color: '#00D9FF',
    image1: '/power1.jpg', 
    image2: '/power2.jpg',
  },
  {
    id: 5,
    name: 'Controls',
    icon: ComputerIcon,
    description: 'Controls sensors and monitoring',
    color: '#B4FF39',
    image1: '/cont1.png', 
    image2: '/cont2.jpg',
  },
];

function SubteamShowcaseItem({ team, index, easedProgress }) {
  const Icon = team.icon;

  // Scroll timeline allocation per card.
  // If subteam count changes, adjust baseStart/slotSize so all cards fully enter and exit.
  const baseStart = 0.2;
  const slotSize = 0.144;
  const startEnter = baseStart + (index * slotSize);
  const fullyEntered = startEnter + 0.05;
  const startExit = startEnter + 0.09;
  const fullyExited = startEnter + 0.144;

  const opacity = useTransform(
    easedProgress,
    [startEnter, fullyEntered, startExit, fullyExited],
    [0, 1, 1, 0]
  );

  const leftX = useTransform(
    easedProgress,
    [startEnter, fullyEntered, startExit, fullyExited],
    [300, 0, 0, -300]
  );

  const rightX = useTransform(
    easedProgress,
    [startEnter, fullyEntered, startExit, fullyExited],
    [300, 0, 0, -300]
  );

  const rotation = useTransform(
    easedProgress,
    [startEnter, fullyEntered, startExit, fullyExited],
    [15, 0, 0, -15]
  );

  const scale = useTransform(
    easedProgress,
    [startEnter, fullyEntered, startExit, fullyExited],
    [0.85, 1, 1, 0.85]
  );

  return (
    <motion.div className={styles.subteamShowcase} style={{ opacity }}>
      {/* Left side - Images and description */}
      <motion.div className={styles.leftSide} style={{ x: leftX, rotateZ: rotation, scale }}>
        <div className={styles.imagesContainer}>
          <motion.div className={styles.imageWrapper} style={{ transform: 'skewY(-3deg)' }}>
            <Image
              src={team.image1}
              alt={`${team.name} team`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
          <motion.div className={styles.imageWrapper} style={{ transform: 'skewY(3deg)' }}>
            <Image
              src={team.image2}
              alt={`${team.name} work`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        </div>
        <p className={styles.leftDescription}>{team.description}</p>
      </motion.div>

      {/* Right side - Subteam card */}
      <motion.div className={styles.rightSide} style={{ x: rightX, rotateZ: rotation, scale }}>
        <motion.div
          className={styles.card}
          style={{ borderColor: team.color }}
          whileHover={{
            y: -8,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            className={styles.iconWrapper}
            style={{ background: `${team.color}20` }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          >
            <Icon
              sx={{
                fontSize: 64,
                color: team.color,
              }}
            />
          </motion.div>

          <h3 className={styles.cardTitle}>{team.name}</h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function SubteamsSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Apply easing to scroll progress using multiple keyframes for smooth transitions
  // This creates a cubic-ease-in-out-like effect
  const easedProgress = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0.15, 0.5, 0.85, 1]
  );

  // Header animations using eased progress
  const headerOpacity = useTransform(easedProgress, [0.1, 0.15, 0.95, 1], [0, 1, 1, 0]);
  const headerY = useTransform(easedProgress, [0.1, 0.2], [0, -280]);

  return (
    <div ref={containerRef} className={styles.stickyContainer}>
      <div className={styles.stickyContent}>
        <div className={styles.scrollHint} aria-hidden="true">
          <span className={styles.scrollHintIcon}>↓</span>
          <span className={styles.scrollHintText}>Scroll</span>
        </div>
        <div className={styles.centeredWrapper}>
          <motion.div className={styles.header} style={{ opacity: headerOpacity, y: headerY }}>
            <h2>OUR SUBTEAMS</h2>
          </motion.div>

          <div className={styles.showcaseContainer}>
            {subteams.map((team, index) => (
              <SubteamShowcaseItem
                key={team.id}
                team={team}
                index={index}
                easedProgress={easedProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
