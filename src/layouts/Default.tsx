import React from 'react';
import Navbar from '../features/navigation/Navbar';
import Footer from '../library/components/Footer';
import HeroHeader from '../library/components/HeroHeader';

interface DefaultLayoutProps {
  children: React.ReactNode;
  heroImage: string;
  heroTitle: () => JSX.Element;
  heroSubtitle: () => JSX.Element;
}

const DefaultLayout = ({ children, heroImage, heroTitle, heroSubtitle }: DefaultLayoutProps) => (
  <>
    <Navbar />
    <main>
      <HeroHeader image={heroImage} title={heroTitle} subtitle={heroSubtitle} />
      <div id='main-content'>{children}</div>
    </main>
    <Footer />
  </>
);

export default DefaultLayout;
