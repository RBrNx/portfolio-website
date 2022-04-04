import { lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';
import Button from '../../library/components/Button';
import Ribbon from './Ribbon';

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  headerImageUrl: string;
  type: string;
  categories: string[];
  onClick?: React.MouseEventHandler;
}

interface BlogColourMap {
  [key: string]: string;
}

const blogTypeMap: BlogColourMap = {
  Blog: '#1D79FF',
  Tutorial: '#E25D03',
  Lab: '#c32626',
};

const BlogCard = ({ id, title, description, headerImageUrl, type, categories, onClick = () => {} }: BlogCardProps) => (
  <Container id={id}>
    <Header>
      <img src={headerImageUrl} alt='Blog header' />
    </Header>
    <Body>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CategoriesContainer>
        {categories.map(category => (
          <Category key={category}>{category}</Category>
        ))}
      </CategoriesContainer>
      <Button onClick={onClick}>Read</Button>
    </Body>
    <Ribbon label={type} fill={blogTypeMap[type]} />
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-rows: 250px auto;
  background: ${props => lighten(0.05, props.theme.background)};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;
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
  flex: 1;
`;

const CategoriesContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;

const Category = styled.span`
  background-color: ${props => lighten(0.1, props.theme.background)};
  border-radius: 5px;
  margin-right: 10px;
  padding: 5px;
`;

export default BlogCard;
