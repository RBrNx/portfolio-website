import React from 'react';
import styled from 'styled-components';
import { graphql, navigate } from 'gatsby';
import DefaultLayout from '../../layouts/Default';
import HomeHeaderImage from '../../images/hero/home-header.jpeg';
import PortfolioTitle from '../../features/portfolio/Title';
import PortfolioSubtitle from '../../features/portfolio/Subtitle';
import Section from '../../library/components/Section';
import PortfolioCardFront from '../../features/portfolio/PortfolioCardFront';

const IndexPage = ({ data }) => {
  const { nodes: portfolioItems } = data.allGraphCmsPortfolioItem;

  const onClick = ({ portfolioPath, id }) => {
    const origPortfolioItem = document.getElementById(id);
    const viewportOffset = origPortfolioItem.getBoundingClientRect();

    const initialModalStyle = {
      height: `${origPortfolioItem.clientHeight}px`,
      width: `${origPortfolioItem.clientWidth}px`,
      left: `${viewportOffset.left}px`,
      top: `${viewportOffset.top}px`,
    };

    navigate(portfolioPath, { state: { modal: true, initialModalStyle } });
  };

  return (
    <DefaultLayout heroImage={HomeHeaderImage} heroTitle={PortfolioTitle} heroSubtitle={PortfolioSubtitle}>
      <Section title='Portfolio' subtitle='Minigolf Games, Christmas Puzzle Events, A Wedding App and much more!'>
        <GridContainer>
          {portfolioItems?.map(item => (
            <PortfolioCardFront
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              headerImageUrl={item.carouselImages[0].url}
              onClick={() => onClick(item)}
            />
          ))}
        </GridContainer>
      </Section>
    </DefaultLayout>
  );
};

const GridContainer = styled.div`
  padding: 0 25px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  padding-bottom: 50px;
`;

export const query = graphql`
  query {
    allGraphCmsPortfolioItem {
      nodes {
        id
        title
        description
        carouselImages {
          id
          url
        }
        portfolioPath: gatsbyPath(filePath: "/portfolio/{graphCmsPortfolioItem.title}")
      }
    }
  }
`;

export default IndexPage;
