import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    background-color: rgb(0, 117, 190, 0.8);
    flex-flow: column nowrap;
    height: 50vh;
    position: fixed;
    padding-top: 1rem;
    right: 0;
    top: 0;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    width: 300px;

    li {
      color: rgb(255, 204, 0);
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About Us</li>
      <li>Docu</li>
      <li>Poke api</li>
      <li> i </li>
    </Ul>
  );
};

export default RightNav;
