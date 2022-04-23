import React from 'react';
import styled from 'styled-components';
import { graphql, navigate, PageProps } from 'gatsby';
import { up } from 'styled-breakpoints';
import DefaultLayout from '../../layouts/Default';
import HomeHeaderImage from '../../images/hero/home-header.jpeg';
import PortfolioTitle from '../../features/portfolio/Title';
import PortfolioSubtitle from '../../features/portfolio/Subtitle';
import Section from '../../library/components/Section';
import PortfolioCardFront from '../../features/portfolio/PortfolioCardFront';
import { AllPortfolioItemsQuery, GraphCms_PortfolioItem } from '../../../graphql-types';

interface PortfolioItem extends GraphCms_PortfolioItem {
  portfolioPath: string;
}

const IndexPage = ({ data }: PageProps<AllPortfolioItemsQuery>) => {
  const { nodes: portfolioItems } = data?.allGraphCmsPortfolioItem || {};

  const onClick = ({ portfolioPath, id }: PortfolioItem) => {
    const origPortfolioItem = document.getElementById(id);
    const viewportOffset = origPortfolioItem?.getBoundingClientRect();

    const initialModalStyle = {
      height: `${origPortfolioItem?.clientHeight}px`,
      width: `${origPortfolioItem?.clientWidth}px`,
      left: `${viewportOffset?.left}px`,
      top: `${viewportOffset?.top}px`,
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
              onClick={() => onClick(item as PortfolioItem)}
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

  ${up('md')} {
    padding: 0 45px;
    grid-template-columns: repeat(2, 2fr);
  }

  ${up('lg')} {
    padding: 0 100px;
    grid-template-columns: repeat(3, 2fr);
  }

  ${up('xxl')} {
    padding: 0 175px;
    grid-template-columns: repeat(3, 2fr);
  }
`;

export const query = graphql`
  query AllPortfolioItems {
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
