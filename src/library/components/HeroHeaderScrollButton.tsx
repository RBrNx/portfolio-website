import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import React, { useState } from 'react';
import styled from 'styled-components';

interface ButtonContainerProps {
  opacity: number;
}

const HeroHeaderScrollButton = ({ scrollToElement = '#main-content' }) => {
  const [opacity, setOpacity] = useState(1);

  useScrollPosition(({ currPos }) => {
    setOpacity(1 - Math.abs(currPos.y) / 500);
  }, []);

  const onButtonClick = () => {
    const element = document.querySelector(scrollToElement);

    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ButtonContainer opacity={opacity} onClick={onButtonClick}>
      <Chevron />
      <Chevron />
      <Chevron />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div<ButtonContainerProps>`
  position: absolute;
  width: 24px;
  height: 60px;
  bottom: 5%;
  cursor: pointer;
  transition: opacity 1s;
  opacity: ${props => props.opacity};
`;

const Chevron = styled.div`
  position: absolute;
  width: 20px;
  height: 6px;
  opacity: 0;
  animation: move 6s ease-out infinite;

  &:first-child {
    animation: move 6s ease-out 2s infinite;
  }

  &:nth-child(2) {
    animation: move 6s ease-out 4s infinite;
  }

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }

  &:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  &:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes move {
    25% {
      opacity: 1;
    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }
`;

export default HeroHeaderScrollButton;
