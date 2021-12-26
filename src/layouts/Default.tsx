import React from 'react';
import Navbar from '../features/navigation/Navbar';
import HeroHeader from '../library/components/HeroHeader';

interface DefaultLayoutProps {
  children: React.ReactNode;
  heroImage: string;
  heroTitle: () => JSX.Element;
  heroSubtitle: () => JSX.Element;
}

const DefaultLayout = ({ children, heroImage, heroTitle, heroSubtitle }: DefaultLayoutProps) => (
  <div>
    <Navbar />
    <main>
      <HeroHeader image={heroImage} title={heroTitle} subtitle={heroSubtitle} />
      <section id='main-content'>{children}</section>
    </main>
  </div>
);

export default DefaultLayout;
