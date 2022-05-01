import React from 'react';
import { up } from 'styled-breakpoints';
import styled from 'styled-components';

const Subtitle = () => (
  <SubtitleContainer>
    <span>A place for my Coding Laboratory, Programming guides and thoughts on Tech.</span>
  </SubtitleContainer>
);

const SubtitleContainer = styled.div`
  font-size: 20px;

  ${up('md')} {
    font-size: 24px;
  }
`;

export default Subtitle;
