import React from 'react';
import styled from 'styled-components';

const Title = () => (
  <TitleContainer>
    <h2>Curriculum Vitae</h2>
  </TitleContainer>
);

const TitleContainer = styled.div`
  h2 {
    font-size: 60px;
    margin: 0;
    text-transform: uppercase;
  }
`;

export default Title;
