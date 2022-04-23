import React from 'react';
import { up } from 'styled-breakpoints';
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

  ${up('md')} {
    padding: 35px 0 0 40px;
  }

  ${up('lg')} {
    padding: 50px 0 0 100px;
  }

  ${up('xxl')} {
    padding: 75px 0 0 175px;
  }

  &:after {
    content: ' ';
    position: absolute;
    top: calc(100% + 6px);
    left: 25px;
    height: 1px;
    width: calc(100% - 25px);
    background: ${props => props.theme.heading};

    ${up('md')} {
      left: 45px;
      width: calc(100% - 45px);
    }

    ${up('lg')} {
      left: 100px;
      width: calc(100% - 100px);
    }

    ${up('xxl')} {
      left: 175px;
      width: calc(100% - 175px);
    }
  }
`;

const SectionSubtitle = styled.p`
  margin: 0;
  padding: 0 25px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.body};
  margin-bottom: 20px;

  ${up('md')} {
    padding: 0 45px;
  }

  ${up('lg')} {
    padding: 0 100px;
  }

  ${up('xxl')} {
    padding: 0 175px;
  }
`;

export default Section;
