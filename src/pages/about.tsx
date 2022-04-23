import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql, PageProps } from 'gatsby';
import DefaultLayout from '../layouts/Default';
import AboutTitle from '../features/about/Title';
import AboutSubtitle from '../features/about/Subtitle';
import Section from '../library/components/Section';
import SpecialityCard from '../features/about/SpecialityCard';
import { AllAboutDetailsQuery } from '../../graphql-types';
import TechnologyCard from '../features/about/TechnologyCard';
import ClydeArcImage from '../images/hero/clyde-arc.jpg';
import DukeOfWellingtonImage from '../images/hero/duke-of-wellington.jpg';
import GeorgeSquareImage from '../images/hero/george-square.jpg';
import HydroImage from '../images/hero/hydro.jpg';

const headerImages = [ClydeArcImage, DukeOfWellingtonImage, GeorgeSquareImage, HydroImage];

const AboutPage = ({ data }: PageProps<AllAboutDetailsQuery>) => {
  const [imageIndex, setImageIndex] = useState(0);
  const { nodes: specialities } = data?.allGraphCmsSpeciality || {};
  const { nodes: technologies } = data?.allGraphCmsTechnology || {};

  useEffect(() => {
    const imageTimer = setInterval(() => setImageIndex(index => (index + 1) % headerImages.length), 6000);

    return () => clearInterval(imageTimer);
  }, []);

  return (
    <DefaultLayout heroImage={headerImages[imageIndex]} heroTitle={AboutTitle} heroSubtitle={AboutSubtitle}>
      <Section title='My Specialities' subtitle='Here are the skills that I can bring to a work environment.'>
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
      <Section
        title='Tools and Technologies'
        subtitle='A guide to the tools and technologies that I have experience with.'
      >
        <GridContainer>
          {technologies?.map(technology => (
            <TechnologyCard
              key={technology.id}
              title={technology.title}
              description={technology.description.html}
              icon={technology.icon}
              backgroundColor={technology.backgroundColor.hex}
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
    allGraphCmsTechnology {
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
        backgroundColor {
          hex
        }
      }
    }
  }
`;

export default AboutPage;
