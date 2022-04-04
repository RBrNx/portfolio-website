import React from 'react';
import styled from 'styled-components';
import RibbonSVG from '../../images/svg/ribbon.svg';

interface RibbonProps {
  label: string;
  fill?: string;
}

const Ribbon = ({ label, fill }: RibbonProps) => (
  <Container>
    <StyledRibbonSVG fill={fill} />
    <Label>{label}</Label>
  </Container>
);

const Container = styled.div`
  display: block;
  height: 100px;
  width: 100px;
  position: absolute;
  right: 0;
  top: 0;
`;

const Label = styled.span`
  position: absolute;
  color: #fff;
  top: 38%;
  left: 62%;
  transform: translate(-50%, -50%) rotate(45deg);
  display: inline-block;
  font-size: 20px;
`;

const StyledRibbonSVG = styled(RibbonSVG)`
  fill: ${props => props.fill || '#000'};
`;

export default Ribbon;
