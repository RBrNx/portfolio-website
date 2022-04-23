import React from 'react';
import { up } from 'styled-breakpoints';
import styled from 'styled-components';
import HighlightText from '../../library/components/HighlightText';

const Subtitle = () => (
  <SubtitleContainer>
    <span>
      I am a Glaswegian dwelling Software Developer who is passionate about{' '}
      <HighlightText>creating fantastic user experiences</HighlightText>. With my well rounded technical skills and an
      eye for design, I am adept at <HighlightText>balancing functionality and beauty</HighlightText> in the
      applications I develop.
    </span>
  </SubtitleContainer>
);

const SubtitleContainer = styled.div`
  font-size: 20px;

  ${up('md')} {
    font-size: 24px;
  }
`;

export default Subtitle;
