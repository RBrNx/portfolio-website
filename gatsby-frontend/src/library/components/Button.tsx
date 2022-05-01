import React from 'react';
import styled from 'styled-components';

const Button = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
  className?: string;
}) => (
  <ButtonContainer onClick={onClick} className={className}>
    {children}
  </ButtonContainer>
);

const ButtonContainer = styled.div`
  color: ${props => props.theme.accent};
  text-decoration: none;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s ease all;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 14px 50px;
  border: 3px solid ${props => props.theme.accent};
  border-radius: 5px;
  position: relative;
  z-index: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);

  &:before {
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: ${props => props.theme.accent};
    z-index: -1;
    color: #fff;
  }
  &:hover {
    color: #fff;

    &:before {
      -webkit-transition: 0.3s all ease;
      transition: 0.3s all ease;
      left: 0;
      right: 0;
      opacity: 1;
    }
  }
  &:focus {
    color: #fff;

    &:before {
      transition: 0.3s all ease;
      left: 0;
      right: 0;
      opacity: 1;
    }
  }
`;

export default Button;
