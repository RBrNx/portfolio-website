import React from 'react';
import styled from 'styled-components';

const HighlightText = ({ children, tag = 'span' }: { children: React.ReactNode; tag?: React.ElementType }) => (
  <Highlighted as={tag}>{children}</Highlighted>
);

const Highlighted = styled.span`
  color: ${props => props.theme.accent};
`;

export default HighlightText;
