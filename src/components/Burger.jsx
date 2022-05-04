import React, { useState } from "react";
import styled from "styled-components";
import ListNav from "./ListNav";

const BurgerStyle = styled.div`
  display: none;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 75px;
  width: 2rem;
  z-index: 20;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  div {
    background-color: ${({ open }) =>
      open ? "rgb(255, 204, 0)" : "rgb(0, 117, 190)"};
    border-radius: 10px;
    height: 0.25rem;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerStyle open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyle>
      <ListNav open={open} />
    </>
  );
};

export default Burger;
