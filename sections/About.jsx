'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';


const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Virgil" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold">Virgil</span> is a new
        is a virtual assistant created and designed to be a free, convenient , portable, 
        and above all open-source version of Alexa or Google Home In summary, 
        this open-source virtual assistant stands as an innovative,{' '}
        <span className="font-extrabold">
          free and user-controlled alternative
        </span>{' '}
        proprietary solutions offered by large companies.{' '}
        By bringing together convenience, portability, and attention to privacy, we 
        aim to offer a platform that gives users total control over 
        their technology interactions, enabling them to take full advantage of 
        the benefits of 
      {' '}
        <span className="font-extrabold"> artificial intelligence </span>
        in a safe and personalized way.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
