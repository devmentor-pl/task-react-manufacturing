import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLogo = styled(Link)`
  text-transform: uppercase;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.textLogo}rem;
  font-weight: 800;

  &::before {
    content: "wearhouse®";
  }

  @media (min-width: 400px) {
    font-size: ${({ theme }) => theme.fontSize.textCart}rem;
  }

  @media (max-width: 800px) {
    &::before {
      content: "wh®";
    }
  }
`;

export const HamburgerIcon = styled.div`
  position: relative;
  width: 25px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: black;
    border-radius: 2px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  span:nth-child(2) {
    width: 60%;
    align-self: center;
  }

  ${({ $active }) =>
    $active &&
    `
    span:nth-child(1) {
    transform: translateY(8px) rotate(45deg); 
  }
    span:nth-child(2) {
    opacity: 0; 
  }

    span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg); 
  }
  `}

  ${({ $hideOnLarge }) =>
    $hideOnLarge &&
    `
    @media (min-width: 800px) {
    display:none}
  `}
`;

export const OverlayMenu = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: start;
  top: 100px;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  color: white;
  height: ${({ $isOpen }) => ($isOpen ? "100vh" : "0")};
  overflow: hidden;
  overflow-y: hidden;
  transition: height 0.5s ease;
  z-index: 900;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const SearchOverlayMenu = styled(OverlayMenu)`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 60%;
  padding: 5rem;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  height: 50px;
  display: flex;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 500px;
  border: none;
  border-bottom: 1px solid #222;
  outline: none;
  font-size: 45px;
  font-size: ${({ theme }) => theme.fontSize.textItem}rem;
`;

export const StyledLink = styled(Link)`
  border: none;
  display: flex;
`;

export const Icon = styled.img`
  width: 1.25rem;
`;
