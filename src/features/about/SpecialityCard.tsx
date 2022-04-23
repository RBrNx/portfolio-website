import { lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';
import SVGIcon from '../../library/components/SVGIcon';

interface SpecialityCardProps {
  title: string;
  description: string;
  icon: {
    id: string;
    url: string;
  };
}

const SpecialityCard = ({ title, description, icon }: SpecialityCardProps) => (
  <Container>
    <Icon src={icon.url} />
    <Title>{title}</Title>
    <Description dangerouslySetInnerHTML={{ __html: description }} />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => lighten(0.05, props.theme.background)};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.04);
  }
`;

const Icon = styled(SVGIcon)`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  fill: ${props => props.theme.accent};
`;

const Title = styled.div`
  font-family: 'Fjalla One', sans-serif;
  font-size: 24px;
  color: ${props => props.theme.heading};
  margin-bottom: 40px;
  position: relative;
  text-align: center;

  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 70px;
    background-color: ${props => props.theme.accent};
    left: 50%;
    top: 10px;
    position: relative;
    transform: translateX(-50%);
  }
`;

const Description = styled.div`
  text-align: center;
  color: ${props => props.theme.body};
`;

export default SpecialityCard;
