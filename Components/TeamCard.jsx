"use client";

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/mission.module.css';

export default function TeamCard({ image, name, title, alt }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={styles.teamCard}
      initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 0.4,
              ease: 'easeOut',
            }
      }
    >
      {image && (
        <Image
          src={image}
          alt={alt || `${name}`}
          fill
          className={styles.teamCardImage}
          sizes="(max-width: 900px) 90vw, (max-width: 1400px) 33vw, 280px"
          loading="lazy"
          decoding="async"
        />
      )}
      {!image && (
        <div className={styles.teamCardPlaceholder} aria-hidden="true">
          <svg viewBox="0 0 64 64" className={styles.teamCardPlaceholderIcon}>
            <circle cx="32" cy="22" r="12" />
            <path d="M10 56c0-12.15 9.85-22 22-22s22 9.85 22 22" />
          </svg>
        </div>
      )}
      <div className={styles.teamCardOverlay}>
        <span className={styles.teamCardName}>{name}</span>
        <span className={styles.teamCardTitle}>{title}</span>
      </div>
    </motion.div>
  );
}
