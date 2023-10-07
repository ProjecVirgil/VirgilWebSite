'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [linkDownload, setLinkDownload] = useState('');
  useEffect(() => {
    // Verifica se stai eseguendo il codice lato client (browser)
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        setLinkDownload('/VirgilAppV2.0.1.apk');
      } else {
        setLinkDownload('https://github.com/Retr0100/VirgilAI/archive/refs/heads/master.zip');
      }
    }
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="relative w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <a href={linkDownload} download>
          <img
            src="/download.svg"
            alt="search"
            className="w-[24px] h-[24px] object-contain"
          />
        </a>
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          PROJECT VIRGIL
        </h2>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
