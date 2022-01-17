/* eslint-disable import/no-unresolved */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import LinkButton from '../../library/components/LinkButton';

interface PortfolioCardBackProps {
  title: string;
  description: string;
  techSheet: string[];
  aboutProject: string;
  carouselImages: any[];
  links: any[];
}

const PortfolioCardBack = ({
  title,
  description,
  techSheet,
  carouselImages,
  aboutProject,
  links,
}: PortfolioCardBackProps) => (
  <Container>
    <Title>{title}</Title>
    <Subtitle>{description}</Subtitle>
    <CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination]}
        centeredSlides
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {carouselImages.map(image => (
          <SwiperSlide className='tester' key={image.id}>
            <CarouselImage src={image.url} alt='Carousel' />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
    <DescriptionContainer>
      <SectionTitle>About this project</SectionTitle>
      <div dangerouslySetInnerHTML={{ __html: aboutProject }} />
    </DescriptionContainer>
    <TechSheetContainer>
      <SectionTitle>Technical Sheet</SectionTitle>
      <Subtitle>Code technologies and Skills used in this project</Subtitle>
      <ul className='list'>
        {techSheet.map(tech => (
          <TechItem key={tech}>{tech}</TechItem>
        ))}
      </ul>
    </TechSheetContainer>
    <LinksContainer>
      {links.map(link => (
        <StyledLinkButton key={link.id} href={link.url}>
          <StyledIcon icon={link.type ? ['fab', link.type] : 'external-link-alt'} />
          {link.title}
        </StyledLinkButton>
      ))}
    </LinksContainer>
  </Container>
);

const Container = styled.div`
  background: ${props => lighten(0.05, props.theme.background)};
  height: 100%;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
`;

const Title = styled.div`
  font-family: 'Fjalla One', sans-serif;
  font-size: 45px;
  text-transform: uppercase;
  color: ${props => props.theme.heading};
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: ${props => props.theme.body};
  font-style: italic;
`;

const CarouselContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  min-height: 300px;

  --swiper-navigation-size: 20px;

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${props => props.theme.body};
  }

  .swiper-pagination-bullet-active {
    background: ${props => props.theme.accent};
  }
`;

const CarouselImage = styled.img`
  max-height: 300px;
`;

const DescriptionContainer = styled.div`
  line-height: 1.3em;
  color: ${props => props.theme.body};
  font-size: 18px;
  margin-bottom: 15px;

  .fancyLink {
    position: relative;
    white-space: pre;

    &:hover {
      &:before,
      &:after {
        width: 100%;
      }

      a {
        color: ${props => props.theme.background};
      }
    }

    a {
      color: ${props => props.theme.heading};
      text-decoration: none;
      font-weight: 900;
      position: relative;
      z-index: 2;
      transition: color 0.325s cubic-bezier(0.65, 0.2, 0, 1);
    }

    &:before {
      content: '';
      display: block;
      height: 50%;
      background-color: lightgray;
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 0%;
      transition: width 0.325s cubic-bezier(0.65, 0.2, 0, 1);
    }

    &:after {
      content: '';
      display: block;
      height: 50%;
      background-color: lightgray;
      position: absolute;
      z-index: 1;
      bottom: 0;
      right: 0;
      width: 0%;
      transition: width 0.325s cubic-bezier(0.65, 0.2, 0, 1);
    }
  }
`;

const SectionTitle = styled.div`
  font-family: 'Fjalla One', sans-serif;
  font-size: 32px;
  padding: 0px;
  text-align: left;
  margin-bottom: 15px;
  text-transform: uppercase;
  color: ${props => props.theme.heading};
`;

const TechSheetContainer = styled.div`
  color: ${props => props.theme.body};
  font-size: 18px;
`;

const TechItem = styled.li`
  line-height: 1.5em;
  margin-bottom: 5px;
`;

const LinksContainer = styled.div`
  margin-bottom: 40px;
`;

const StyledLinkButton = styled(LinkButton)`
  margin-bottom: 10px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export default PortfolioCardBack;
