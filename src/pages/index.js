import React from 'react';
import DefaultLayout from '../layouts/Default';
import HomeHeaderImage from '../images/hero/home-header.jpeg';
import PortfolioTitle from '../features/portfolio/Title';
import PortfolioSubtitle from '../features/portfolio/Subtitle';

const IndexPage = () => (
  <DefaultLayout heroImage={HomeHeaderImage} heroTitle={PortfolioTitle} heroSubtitle={PortfolioSubtitle} />
);

export default IndexPage;
