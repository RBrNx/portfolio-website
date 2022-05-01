import { lighten } from 'polished';
import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const PortfolioSkeletonLoader = () => (
  <StyledContentLoader viewBox='0 0 400 400' speed={2} backgroundColor='#141414' foregroundColor='#101010'>
    <rect x='0' y='0' rx='0' ry='0' width='400' height='250' />
    <rect x='15' y='265' rx='5' ry='5' width='170' height='25' />
    <rect x='15' y='300' rx='5' ry='5' width='370' height='20' />
    <rect x='15' y='350' rx='5' ry='5' width='370' height='50' />
  </StyledContentLoader>
);

const StyledContentLoader = styled(ContentLoader)`
  background: ${props => lighten(0.05, props.theme.background)};
  border-radius: 5px;
  padding-bottom: 15px;
  margin-bottom: 30px;
`;

export default PortfolioSkeletonLoader;
