import React, { useState, useCallback, useEffect, useRef } from 'react';
import { graphql, navigate } from 'gatsby';
import CardModal from '../../library/components/CardModal';
import PortfolioCardFront from '../../features/portfolio/PortfolioCardFront';
import PortfolioCardBack from '../../features/portfolio/PortfolioCardBack';
import { wrapAnchors } from '../../library/utils/DOMParser';

const PortfolioItem = ({ data, location }) => {
  const { initialModalStyle } = location.state;
  const { id, title, description, carouselImages, about, techSheet, links } = data.graphCmsPortfolioItem;
  const origPortfolioItem = useRef(document.getElementById(id));
  const [modalVisible, setModalVisible] = useState(false);

  const aboutHTML = wrapAnchors(about.html);

  useEffect(() => {
    setModalVisible(true);
    origPortfolioItem.current.style.opacity = 0;
  }, []);

  const onModalClose = () => {
    setModalVisible(false);
  };

  const onFlipFinish = ({ isFlipped }) => {
    if (!isFlipped) {
      origPortfolioItem.current.style.opacity = 1;
      navigate('/portfolio');
    }
  };
  const CardFrontComponent = useCallback(
    () => <PortfolioCardFront title={title} description={description} headerImageUrl={carouselImages[0].url} />,
    [],
  );

  const CardBackComponent = useCallback(
    () => (
      <PortfolioCardBack
        title={title}
        description={description}
        carouselImages={carouselImages}
        aboutProject={aboutHTML}
        techSheet={techSheet}
        links={links}
      />
    ),
    [],
  );

  return (
    <CardModal
      show={modalVisible}
      onClose={onModalClose}
      onFlipFinish={onFlipFinish}
      cardFront={CardFrontComponent}
      cardBack={CardBackComponent}
      style={initialModalStyle}
    />
  );
};

export default PortfolioItem;

export const query = graphql`
  query ($id: String!) {
    graphCmsPortfolioItem(id: { eq: $id }) {
      id
      title
      description
      about {
        html
      }
      carouselImages {
        id
        url
      }
      techSheet
      links {
        id
        title
        url
        type
      }
    }
  }
`;
