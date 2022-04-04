import React from 'react';
import PortfolioPage from '../../pages/portfolio/index';
import PortfolioPageJSON from '../../../public/page-data/portfolio/page-data.json';
import BlogPage from '../../pages/blog/index';
import BlogPageJSON from '../../../public/page-data/blog/page-data.json';

interface PageRendererProps {
  match: {
    route: {
      path: string;
    };
    params: {
      [key: string]: string;
    };
    uri: string;
  };
}

const PageRenderer = ({ match }: PageRendererProps) => {
  switch (match.route.path) {
    case '/portfolio/:slug/':
      return <PortfolioPage data={PortfolioPageJSON.result.data} />;

    case '/blog/:slug/':
      return <BlogPage data={BlogPageJSON.result.data} />;

    default:
      return null;
  }
};

export default PageRenderer;
