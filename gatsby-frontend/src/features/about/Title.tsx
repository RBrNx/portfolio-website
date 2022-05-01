import React from 'react';
import { up } from 'styled-breakpoints';
import styled from 'styled-components';
import HighlightText from '../../library/components/HighlightText';

const Title = () => (
  <TitleContainer>
    <h2>
      Elementary, my dear <HighlightText tag='h2'>Watson.</HighlightText>
    </h2>
  </TitleContainer>
);

const TitleContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 225px;

  h2 {
    font-size: 42px;
    margin: 0;
    display: inline-block;
  }

  ${up('md')} {
    margin-bottom: 150px;

    h2 {
      font-size: 52px;
    }
  }

  ${up('xxl')} {
    h2 {
      font-size: 68px;
    }
  }
`;

export default Title;
