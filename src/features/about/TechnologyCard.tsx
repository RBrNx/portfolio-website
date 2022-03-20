import { lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';
import SVGIcon from '../../library/components/SVGIcon';

interface TechnologyCardProps {
  title: string;
  description: string;
  icon: {
    id: string;
    url: string;
  };
  backgroundColor: string;
}

interface ParallaxFrontProps {
  backgroundColor: string;
}

const TechnologyCard = ({ title, description, icon, backgroundColor }: TechnologyCardProps) => (
  <Container>
    <ParallaxFront backgroundColor={backgroundColor}>
      <StyledSVGIcon src={icon.url} />
    </ParallaxFront>
    <ParallaxBack>
      <Title>{title}</Title>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </ParallaxBack>
  </Container>
);

const Container = styled.div`
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: rotate(0deg);
  z-index: 99;
  position: relative;
  width: 100%;
  padding-top: 100%;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);

  &:hover {
    transform: rotateY(180deg);
  }
`;

const ParallaxBase = styled.div`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  top: 0;
`;

const ParallaxFront = styled(ParallaxBase)<ParallaxFrontProps>`
  z-index: 100;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${props => props.backgroundColor};
`;

const StyledSVGIcon = styled(SVGIcon)`
  transform-style: preserve-3d;
  transform: translateZ(80px);
  display: flex;
  justify-content: center;
  width: 50%;
  fill: #fff;
  color: #fff;
`;

const ParallaxBack = styled(ParallaxBase)`
  background: ${props => lighten(0.15, props.theme.background)};
  transform: rotateY(180deg);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5%;
`;

const Title = styled.div`
  color: #fff;
  font-size: 28px;
  transform-style: preserve-3d;
  transform: translateZ(80px);
  padding-bottom: 20px;
`;

const Description = styled.div`
  color: #e9e9e9;
  font-size: 18px;
  width: 100%;
  transform-style: preserve-3d;
  transform: translateZ(75px);
`;

export default TechnologyCard;
