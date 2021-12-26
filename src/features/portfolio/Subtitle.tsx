import React from 'react';
import styled from 'styled-components';
import HighlightText from '../../library/components/HighlightText';

const Subtitle = () => (
  <SubtitleContainer>
    <span>I am a Full Stack Developer with&nbsp;</span>
    <SentenceContainer>
      <HighlightText>a passion for problem solving.</HighlightText>
      <HighlightText>an eye for design.</HighlightText>
      <HighlightText>a love for creating Web Apps with more features than a Bond gadget.</HighlightText>
      <HighlightText>the knack of picking up new skills quickly.</HighlightText>
      <HighlightText>the most handsome dog in the world.</HighlightText>
    </SentenceContainer>
  </SubtitleContainer>
);

const SubtitleContainer = styled.div`
  font-size: 20px;
`;

const SentenceContainer = styled.div`
  margin-top: 15px;
  position: relative;
  width: 100%;
  margin-bottom: 100px;

  span {
    display: block;
    position: absolute;
    width: 100%;
    opacity: 0;
    overflow: hidden;
    text-align: center;
    animation: rotateWords 20s ease-in-out infinite 0s;

    &:nth-child(2) {
      animation-delay: 4s;
    }
    &:nth-child(3) {
      animation-delay: 8s;
    }
    &:nth-child(4) {
      animation-delay: 12s;
    }
    &:nth-child(5) {
      animation-delay: 16s;
    }
    &:nth-child(6) {
      animation-delay: 20s;
    }
  }

  @keyframes rotateWords {
    0% {
      opacity: 0;
    }
    2% {
      opacity: 0;
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    8% {
      opacity: 1;
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
    18% {
      opacity: 1;
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
    22% {
      opacity: 0;
      -webkit-transform: translateY(30px);
      transform: translateY(30px);
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default Subtitle;
