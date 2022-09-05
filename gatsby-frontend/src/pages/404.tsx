import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import NotFoundTitle from '../features/404/Title';
import Button from '../library/components/Button';
import Navbar from '../features/navigation/Navbar';
import HeroHeader from '../library/components/HeroHeader';
import Footer from '../library/components/Footer';
import NotFoundImage from '../images/hero/404-header.jpeg';
import SEO from '../library/components/SEO';

const NotFoundPage = () => (
  <>
    <Navbar />
    <StyledHeroHeader image={NotFoundImage} title={NotFoundTitle} hideHeaderScrollButton>
      <ButtonContainer>
        <StyledButton onClick={() => navigate('/', { replace: true })}>Go home</StyledButton>
      </ButtonContainer>
    </StyledHeroHeader>
    <Footer />
  </>
);

const StyledHeroHeader = styled(HeroHeader)`
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 40px;
`;

export const Head = () => <SEO />;

export default NotFoundPage;
