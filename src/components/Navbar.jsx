import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  display: flex;
  height: 55px;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;


  .home {
    padding: 10px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="home">

        Poke API
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar