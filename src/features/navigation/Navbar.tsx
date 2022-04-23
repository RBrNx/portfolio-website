import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Link } from 'gatsby';
import { rgba } from 'polished';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { useScrollLock } from '../../library/context/ScrollLock';

interface NavProps {
  backgroundOpacity: number;
  translateY: number;
}

const Navbar = () => {
  const [backgroundOpacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const { isScrollLocked } = useScrollLock();

  useScrollPosition(
    ({ currPos, prevPos }) => {
      if (currPos.y < prevPos.y && translateY > -85) {
        setTranslateY(-85);
        setOpacity(1);
      } else if (currPos.y > prevPos.y && translateY < 0) {
        setTranslateY(0);
      }

      if (currPos.y === 0) setOpacity(0);
    },
    [translateY],
  );

  useEffect(() => {
    if (isScrollLocked) setTranslateY(-85);
  }, [isScrollLocked]);

  return (
    <Nav backgroundOpacity={backgroundOpacity} translateY={translateY}>
      <NavLink to='/portfolio' activeClassName='active'>
        Portfolio
      </NavLink>
      <NavLink to='/about' activeClassName='active'>
        About
      </NavLink>
      <NavLink to='/blog' activeClassName='active'>
        Blog
      </NavLink>
      <NavLink to='/CV' activeClassName='active'>
        CV
      </NavLink>
    </Nav>
  );
};

const Nav = styled.nav.attrs<NavProps>(props => ({
  style: {
    background: rgba(props.theme.background, props.backgroundOpacity),
    transform: `translateY(${props.translateY}%)`,
  },
}))<NavProps>`
  position: fixed;
  z-index: 99999;
  width: 100vw;
  font-family: 'Fjalla One', sans-serif;
  transition: transform 200ms linear, background 200ms linear;
  transition-delay: 0ms;
  display: flex;
  flex-direction: row;
  justify-content: center;

  &.scrollTop {
    background: transparent;
  }
  &.hidden {
    transform: translateY(-85%);
  }
`;

const NavLink = styled(Link)`
  font-weight: bold;
  color: #b3b3b3;
  padding: 20px 15px;
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  cursor: pointer;

  &:hover,
  &.active {
    color: ${props => props.theme.accent};
  }

  ${up('xxl')} {
    padding: 20px 30px;
  }
`;

export default Navbar;
