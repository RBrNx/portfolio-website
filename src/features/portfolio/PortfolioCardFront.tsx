import { lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';
import Button from '../../library/components/Button';

interface PortfolioCardProps {
  id: string;
  title: string;
  description: string;
  headerImageUrl: string;
  onClick: React.MouseEventHandler;
}

const PortfolioCardFront = ({ id, title, description, headerImageUrl, onClick }: PortfolioCardProps) => (
  <Container id={id}>
    <Header>
      <img src={headerImageUrl} alt='Portfolio item' />
    </Header>
    <Body>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button onClick={onClick}>Learn More</Button>
    </Body>
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-rows: 250px auto;
  background: ${props => lighten(0.05, props.theme.background)};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 100%;
  color: ${props => props.theme.body};
`;

const Header = styled.div`
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  margin-bottom: 30px;
  flex: 1;
`;

export default PortfolioCardFront;
