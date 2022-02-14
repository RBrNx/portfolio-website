import { motion } from 'framer-motion';
import React from 'react';
import Navbar from '../features/navigation/Navbar';
import Footer from '../library/components/Footer';
import HeroHeader from '../library/components/HeroHeader';
import { usePageTransition } from '../library/context/PageTransition';

interface DefaultLayoutProps {
  children: React.ReactNode;
  heroImage: string;
  heroTitle: () => JSX.Element;
  heroSubtitle: () => JSX.Element;
}

const DefaultLayout = ({ children, heroImage, heroTitle, heroSubtitle }: DefaultLayoutProps) => {
  const { enter, animate, exit } = usePageTransition();

  return (
    <>
      <Navbar />
      <motion.main
        initial={enter}
        animate={animate}
        exit={exit}
        transition={{
          type: 'spring',
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
      >
        <HeroHeader image={heroImage} title={heroTitle} subtitle={heroSubtitle} />
        <div id='main-content'>{children}</div>
      </motion.main>
      <Footer />
    </>
  );
};
export default DefaultLayout;
