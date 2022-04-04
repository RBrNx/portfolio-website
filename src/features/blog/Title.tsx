import React from 'react';
import styled from 'styled-components';
import HighlightText from '../../library/components/HighlightText';

const Title = () => (
  <TitleContainer>
    <h2>
      Technology.&nbsp;
      <HighlightText tag='span'>Programming. </HighlightText>
      Laboratory.
    </h2>
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
