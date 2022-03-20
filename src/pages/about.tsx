import React from 'react';
import styled from 'styled-components';
import { graphql, PageProps } from 'gatsby';
import DefaultLayout from '../layouts/Default';
import HomeHeaderImage from '../images/hero/home-header.jpeg';
import PortfolioTitle from '../features/portfolio/Title';
import PortfolioSubtitle from '../features/portfolio/Subtitle';
import Section from '../library/components/Section';
import SpecialityCard from '../features/about/SpecialityCard';
import { AllAboutDetailsQuery } from '../../graphql-types';

const AboutPage = ({ data }: PageProps<AllAboutDetailsQuery>) => {
  const { nodes: specialities } = data?.allGraphCmsSpeciality || {};

  return (
    <DefaultLayout heroImage={HomeHeaderImage} heroTitle={PortfolioTitle} heroSubtitle={PortfolioSubtitle}>
      <Section title='My Specialities'>
        <GridContainer>
          {specialities?.map(speciality => (
            <SpecialityCard
              key={speciality.id}
              title={speciality.title}
              description={speciality.description.html}
              icon={speciality.icon}
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
  query AllAboutDetails {
    allGraphCmsSpeciality {
      nodes {
        id
        title
        description {
          html
        }
        icon {
          id
          url
        }
      }
    }
  }
`;

export default AboutPage;
