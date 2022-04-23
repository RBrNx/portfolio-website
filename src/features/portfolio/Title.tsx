import React from 'react';
import { up } from 'styled-breakpoints';
import styled from 'styled-components';
import HighlightText from '../../library/components/HighlightText';

const Title = () => (
  <TitleContainer>
    <h2>The Name&apos;s Watson.</h2>
    <HighlightText tag='h2'>Conor Watson.</HighlightText>
  </TitleContainer>
);

const TitleContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 225px;

  h2 {
    font-size: 42px;
    margin: 0;
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
