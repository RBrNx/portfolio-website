import React from 'react';
import styled, { CSSProp } from 'styled-components';
import HeroHeaderScrollButton from './HeroHeaderScrollButton';

interface HeroHeaderProps {
  className?: string;
  image?: string;
  title?: () => JSX.Element;
  subtitle?: () => JSX.Element;
  children?: React.ReactNode;
  hideHeaderScrollButton?: Boolean;
  customCSS?: CSSProp;
}

interface BackgroundImageProps {
  image: string;
  customCSS?: CSSProp;
}

const HeroHeader = ({
  className,
  image = '',
  title: Title,
  subtitle: Subtitle,
  children,
  hideHeaderScrollButton,
  customCSS,
}: HeroHeaderProps) => (
  <BackgroundImage className={className} image={image} customCSS={customCSS}>
    <TextContainer>
      {Title && <Title />}
      {Subtitle && <Subtitle />}
    </TextContainer>
    {children}
    {!hideHeaderScrollButton && <HeroHeaderScrollButton />}
  </BackgroundImage>
);

const BackgroundImage = styled.section<BackgroundImageProps>`
  background: url(${props => props.image}) no-repeat center/cover;
  background-size: cover;
  position: relative;
  transition: background 1s ease-in;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props => props.customCSS};

  &:before {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.7));
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const TextContainer = styled.div`
  font-family: 'Fjalla One', sans-serif;
  color: #fff;
  position: relative;
  text-transform: uppercase;
  width: 100%;
  padding: 100px 15%;
  pointer-events: none;
  text-align: center;
`;

export default HeroHeader;
