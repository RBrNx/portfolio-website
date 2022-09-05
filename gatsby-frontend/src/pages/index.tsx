import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import SEO from '../library/components/SEO';

export default () => {
  useEffect(() => {
    navigate('/portfolio', { replace: true });
  }, []);
  return null;
};

export const Head = () => <SEO />;
