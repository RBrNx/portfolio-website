import React from 'react';
import styled from 'styled-components';

const THICKNESS = 3;
const PADDING = 0.7;

interface LinkButtonProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

interface LineProps {
  right?: boolean;
  top?: boolean;
  left?: boolean;
  bottom?: boolean;
}

const LinkButton = ({ className, href, children }: LinkButtonProps) => (
  <Link href={href} target='_blank' rel='noreferrer' className={className}>
    <ChildrenContainer>{children}</ChildrenContainer>
    <Line className='right' />
    <Line className='top' />
    <Line className='left' />
    <Line className='bottom' />
  </Link>
);

const Link = styled.a`
  color: white;
  padding: ${PADDING}em calc(${PADDING}em * 1.2);
  display: inline-block;
  border: ${THICKNESS}px solid transparent;
  position: relative;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 0.07em;
  width: auto;

  &:after {
    position: absolute;
    content: '';
    bottom: -${THICKNESS}px;
    left: calc(${PADDING}em * 1.2);
    right: calc(${PADDING}em * 1.2);
    height: ${THICKNESS}px;
    background: ${props => props.theme.accent};
    transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s,
      left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;
    transform-origin: left;
  }

  &:hover,
  &:active {
    &:after {
      transform: scale3d(0, 1, 1);
      right: -${THICKNESS}px;
      left: -${THICKNESS}px;
      transform-origin: right;
      transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01),
        left 0s 0.3s;
    }
  }
`;

const ChildrenContainer = styled.div`
  transform: translate3d(0, ${PADDING}em, 0);
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;

  ${Link}:hover & {
    transform: translate3d(0, 0, 0);
    transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
  }

  ${Link}:active & {
    transform: translate3d(0, 0, 0);
    transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
  }
`;

const Line = styled.span<LineProps>`
  position: absolute;
  background: ${props => props.theme.accent};

  &.right,
  &.left {
    width: ${THICKNESS}px;
    bottom: -${THICKNESS}px;
    top: -${THICKNESS}px;
    transform: scale3d(1, 0, 1);
  }

  &.top,
  &.bottom {
    height: ${THICKNESS}px;
    left: -${THICKNESS}px;
    right: -${THICKNESS}px;
    transform: scale3d(0, 1, 1);
  }

  &.right {
    right: -${THICKNESS}px;
    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
    transform-origin: top;
  }

  &.top {
    top: -${THICKNESS}px;
    transition: transform 0.08s linear 0.43s;
    transform-origin: left;
  }

  &.left {
    left: -${THICKNESS}px;
    transition: transform 0.08s linear 0.51s;
    transform-origin: bottom;
  }

  &.bottom {
    bottom: -${THICKNESS}px;
    transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);
    transform-origin: right;
  }

  ${Link}:hover &&, ${Link}:active && {
    transform: scale3d(1, 1, 1);

    &.right {
      transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;
      transform-origin: bottom;
    }

    &.top {
      transition: transform 0.08s linear 0.4s;
      transform-origin: right;
    }

    &.left {
      transition: transform 0.08s linear 0.48s;
      transform-origin: top;
    }

    &.bottom {
      transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
      transform-origin: left;
    }
  }
`;

export default LinkButton;
