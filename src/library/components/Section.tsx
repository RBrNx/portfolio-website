import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Section = ({ title, subtitle, children }: SectionProps) => (
  <section>
    <SectionTitle>{title}</SectionTitle>
    {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
    {children}
  </section>
);

const SectionTitle = styled.h2`
  margin: 0;
  margin-bottom: 30px;
  padding: 35px 0 0 25px;
  font-family: 'Fjalla One', sans-serif;
  font-size: 32px;
  text-transform: uppercase;
  color: ${props => props.theme.heading};
  position: relative;
  display: inline-block;

  &:after {
    content: ' ';
    position: absolute;
    top: calc(100% + 6px);
    left: 25px;
    height: 1px;
    width: calc(100% - 25px);
    background: ${props => props.theme.heading};
  }
`;

const SectionSubtitle = styled.p`
  margin: 0;
  padding: 0 25px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.body};
  margin-bottom: 20px;
`;

export default Section;
