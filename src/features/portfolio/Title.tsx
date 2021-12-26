import React from 'react';
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
`;

export default Title;
