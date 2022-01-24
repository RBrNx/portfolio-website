import React, { useState, useCallback, useEffect, useRef } from 'react';
import { graphql, navigate } from 'gatsby';
import Lightbox from 'react-image-lightbox';
import CardModal from '../../library/components/CardModal';
import PortfolioCardFront from '../../features/portfolio/PortfolioCardFront';
import PortfolioCardBack from '../../features/portfolio/PortfolioCardBack';
import { wrapAnchors } from '../../library/utils/DOMParser';

const PortfolioItem = ({ data, location }) => {
  const { initialModalStyle } = location?.state || {
    initialModalStyle: {
      height: '0px',
      width: '0px',
      left: '25%',
      top: '100%',
      transform: 'translateX(-50%)',
    },
  };
  const { id, title, description, carouselImages, about, techSheet, links } = data.graphCmsPortfolioItem;
  const origPortfolioItem = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const nextPhotoIndex = (photoIndex + 1) % carouselImages.length;
  const prevPhotoIndex = (photoIndex + carouselImages.length - 1) % carouselImages.length;

  const aboutHTML = wrapAnchors(about.html);

  useEffect(() => {
    setModalVisible(true);
    origPortfolioItem.current = document.getElementById(id);
    if (origPortfolioItem.current) origPortfolioItem.current.style.opacity = 0;
  }, []);

  const onModalClose = () => {
    setModalVisible(false);
  };

  const onFlipFinish = ({ isFlipped }) => {
    if (!isFlipped) {
      if (origPortfolioItem.current) origPortfolioItem.current.style.opacity = 1;
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
        onImageClicked={index => {
          setPhotoIndex(index);
          setLightboxVisible(true);
        }}
      />
    ),
    [],
  );

  return (
    <>
      <CardModal
        show={modalVisible}
        onClose={onModalClose}
        onFlipFinish={onFlipFinish}
        cardFront={CardFrontComponent}
        cardBack={CardBackComponent}
        style={initialModalStyle}
      />
      {lightboxVisible && (
        <Lightbox
          mainSrc={carouselImages[photoIndex].url}
          nextSrc={carouselImages[nextPhotoIndex].url}
          prevSrc={carouselImages[prevPhotoIndex].url}
          onCloseRequest={() => setLightboxVisible(false)}
          onMovePrevRequest={() => setPhotoIndex(prevPhotoIndex)}
          onMoveNextRequest={() => setPhotoIndex(nextPhotoIndex)}
        />
      )}
    </>
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
