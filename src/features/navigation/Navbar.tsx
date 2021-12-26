import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Navbar = () => (
  <Nav>
    <NavLink to='/' activeClassName='active'>
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

const Nav = styled.nav`
  position: fixed;
  z-index: 99999;
  width: 100vw;
  font-family: 'Fjalla One', sans-serif;
  background: ${props => props.theme.background};
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
`;

export default Navbar;
