import React from 'react';
import styled from 'styled-components';
import { graphql, navigate, PageProps } from 'gatsby';
import { up } from 'styled-breakpoints';
import DefaultLayout from '../../layouts/Default';
import BlogHeaderImage from '../../images/hero/blog-header.jpg';
import BlogTitle from '../../features/blog/Title';
import BlogSubtitle from '../../features/blog/Subtitle';
import Section from '../../library/components/Section';
import { AllBlogItemsQuery, GraphCms_Blog } from '../../../graphql-types';
import BlogCard from '../../features/blog/BlogCard';

interface BlogItem extends GraphCms_Blog {
  blogPath: string;
}

const IndexPage = ({ data }: PageProps<AllBlogItemsQuery>) => {
  const { nodes: blogItems } = data?.allGraphCmsBlog || {};

  const onClick = ({ blogPath, id }: BlogItem) => {
    const origPortfolioItem = document.getElementById(id);
    const viewportOffset = origPortfolioItem?.getBoundingClientRect();

    const initialModalStyle = {
      height: `${origPortfolioItem?.clientHeight}px`,
      width: `${origPortfolioItem?.clientWidth}px`,
      left: `${viewportOffset?.left}px`,
      top: `${viewportOffset?.top}px`,
    };

    navigate(blogPath, { state: { modal: true, initialModalStyle } });
  };

  return (
    <DefaultLayout heroImage={BlogHeaderImage} heroTitle={BlogTitle} heroSubtitle={BlogSubtitle}>
      <Section title='Blogs, Tutorials and Labs.' subtitle='Check out my latest posts.'>
        <GridContainer>
          {blogItems?.map(item => (
            <BlogCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              headerImageUrl={item.headerImage.url}
              type={item.type}
              categories={item.categories}
              onClick={() => onClick(item as BlogItem)}
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
    padding-bottom: 50px;
  }

  ${up('lg')} {
    padding: 0 100px;
    grid-template-columns: repeat(3, 2fr);
    padding-bottom: 50px;
  }

  ${up('xxl')} {
    padding: 0 175px;
    grid-template-columns: repeat(3, 2fr);
    padding-bottom: 50px;
  }
`;

export const query = graphql`
  query AllBlogItems {
    allGraphCmsBlog {
      nodes {
        id
        title
        description
        headerImage {
          id
          url
        }
        type
        categories
        blogPath: gatsbyPath(filePath: "/blog/{graphCmsBlog.title}")
      }
    }
  }
`;

export default IndexPage;
