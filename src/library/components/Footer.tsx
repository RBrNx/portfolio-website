import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Button from './Button';

const Footer = () => (
  <FooterContainer>
    <Name>Conor Watson</Name>
    <Chat>Want to chat about something?</Chat>
    <StyledButton onClick={() => window.open('mailto:conor.watson94@gmail.com', '_blank')}>Contact Me</StyledButton>
    <SocialContainer>
      <a href='https://github.com/RBrNx' target='_blank' aria-label='Vist my Github' rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href='https://stackoverflow.com/users/4237014/conor-watson'
        target='_blank'
        aria-label='Vist my StackOverflow'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faStackOverflow} />
      </a>
      <a
        href='https://www.linkedin.com/in/conor-watson-8847665b/'
        target='_blank'
        aria-label='Vist my LinkedIn'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </SocialContainer>
    <Blurb>
      <span>Developed with love and beer in Glasgow</span>
      <span>💻 ❤️ 🍺 </span>
    </Blurb>
    <Copyright>Copyright Conor Watson {new Date().getFullYear()} ©</Copyright>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background-color: ${props => darken(0.05, props.theme.background)};
  padding: 50px 0;
  text-align: center;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.div`
  font-family: 'Fjalla One', sans-serif;
  font-size: 30px;
  margin-bottom: 20px;
  color: ${props => props.theme.heading};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;

  &::before,
  &::after {
    display: inline-block;
    content: '';
    height: 2px;
    background-color: ${props => props.theme.body};
    width: 20%;
    margin-right: 50px;
    margin-left: 50px;
  }
`;

const Chat = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 30px;
`;

const SocialContainer = styled.div`
  padding: 0 20%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  a {
    margin: 0 20px;
    font-size: 24px;
    cursor: pointer;
    color: #b3b3b3;

    &:hover {
      color: ${props => props.theme.accent};
    }
  }
`;

const Blurb = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 16px;
`;

const Copyright = styled.div`
  font-size: 12px;
`;

export default Footer;
