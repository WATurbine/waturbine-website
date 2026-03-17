'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import AirIcon from '@mui/icons-material/Air';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ComputerIcon from '@mui/icons-material/Computer';
import styles from '@/styles/getinvolved.module.css';

import aboutImage from '@/assets/about.jpg';
import missionImage from '@/assets/mission.jpg';
import smallWindImage from '@/assets/smallwind.jpg';
import subteamImage from '@/assets/subteam.jpg';
import backgroundImage from '@/assets/background2.jpg';

const APPLY_URL = 'https://form.typeform.com/to/Py0oZEBA';

// This array is the primary content surface for the Get Involved page.
// Update labels, copy, accents, and imagery here without touching component layout logic.
const teams = [
  {
    id: 'aerodynamics',
    label: 'Aerodynamics',
    icon: AirIcon,
    accent: '#55c7f7',
    subtitle: 'Tools and skills used',
    skillBlob:
      'Model airfoils, run CFD studies, refine blade CAD, and validate ideas through wind tunnel testing.',
    imageMain: smallWindImage,
    imageSide: aboutImage,
  },
  {
    id: 'mechanical',
    label: 'Mechanical',
    icon: SettingsIcon,
    accent: '#f2b64a',
    subtitle: 'Tools and skills used',
    skillBlob:
      'Machine high-precision components, design mechanical parts, and assemble complex systems for reliable turbine integration.',
    imageMain: subteamImage,
    imageSide: missionImage,
  },
  {
    id: 'structural',
    label: 'Structural',
    icon: AccountBalanceIcon,
    accent: '#fe8f7a',
    subtitle: 'Tools and skills used',
    skillBlob:
      'Run FEA checks, map load paths, verify safety factors, and document structural decisions for fabrication-ready designs.',
    imageMain: backgroundImage,
    imageSide: aboutImage,
  },
  {
    id: 'power',
    label: 'Power',
    icon: ElectricBoltIcon,
    accent: '#8fdd68',
    subtitle: 'Tools and skills used',
    skillBlob:
      'Design and wire circuits, work with power electronics, and validate electrical performance using lab instruments.',
    imageMain: missionImage,
    imageSide: smallWindImage,
  },
  {
    id: 'controls',
    label: 'Controls',
    icon: ComputerIcon,
    accent: '#b390ff',
    subtitle: 'Tools and skills used',
    skillBlob:
      'Program microcontrollers, implement control loops, and integrate sensors to monitor and stabilize turbine behavior.',
    imageMain: aboutImage,
    imageSide: subteamImage,
  },
];

const panelMotion = {
  // Shared enter/exit motion keeps transitions consistent when switching subteams.
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

export default function GetInvolvedClient() {
  const [activeId, setActiveId] = useState(teams[0].id);

  const activeTeam = useMemo(
    () => teams.find((team) => team.id === activeId) ?? teams[0],
    [activeId]
  );

  return (
    <section className={styles.shell}>
      <div className={styles.titleRow}>
        <h1 className={styles.pageTitle}>GET INVOLVED</h1>
      </div>

      <div className={styles.explorer}>
        <div className={styles.buttonRail} role="tablist" aria-label="Subteam selector">
          {teams.map((team) => {
            const Icon = team.icon;
            const isActive = activeId === team.id;

            return (
              <button
                key={team.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`team-panel-${team.id}`}
                className={`${styles.teamButton} ${isActive ? styles.activeButton : ''}`}
                style={{
                  borderColor: isActive ? team.accent : 'rgba(255, 255, 255, 0.25)',
                  boxShadow: isActive ? `0 0 0 1px ${team.accent} inset` : 'none',
                }}
                onClick={() => setActiveId(team.id)}
              >
                <Icon sx={{ fontSize: 19 }} />
                <span>{team.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTeam.id}
            id={`team-panel-${activeTeam.id}`}
            className={styles.teamStage}
            variants={panelMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className={styles.infoSide}>
              <h2 style={{ color: activeTeam.accent }}>{activeTeam.label}</h2>
              <h3>{activeTeam.subtitle}</h3>
              <p className={styles.summary}>{activeTeam.skillBlob}</p>
              <div className={styles.ctaRow}>
                <Link
                  href={APPLY_URL}
                  className={styles.applyBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply
                </Link>
                <Link href="/contact" className={styles.secondaryBtn}>
                  Ask a question
                </Link>
              </div>
            </div>

            <div className={styles.mediaSide}>
              <div className={styles.imageFrameMain}>
                <Image
                  src={activeTeam.imageMain}
                  alt={`${activeTeam.label} subteam at work`}
                  fill
                  sizes="(max-width: 900px) 90vw, 42vw"
                  priority
                />
              </div>
              <div className={styles.imageFrameSide}>
                <Image
                  src={activeTeam.imageSide}
                  alt={`${activeTeam.label} project detail`}
                  fill
                  sizes="(max-width: 900px) 60vw, 24vw"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
