import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 80%;

  @media (min-width: 600px) {
    object-position: 85%;
  }

  @media (min-width: 1100px) {
    height: 420px;
  }

  @media (min-width: 1700px) {
    object-position: left top;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 45%;
  left: 48%;
  width: 80%;
  transform: translate(-50%, -50%);
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    top: 55%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  gap: 1.25rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.normal}rem;
  font-weight: 500;
  line-height: 1.5rem;

  @media (min-width: 600px) {
    width: 60%;
  }

  @media (min-width: 1500px) {
    font-size: ${({ theme }) => theme.fontSize.textCategory}rem;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  margin-bottom: 2.25rem;
  font-size: 1.8rem;
  font-weight: 700;

  @media (min-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.textLarge}rem;
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.textBigger}rem;
  }

  @media (min-width: 1500px) {
    font-size: ${({ theme }) => theme.fontSize.textTitle}rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  padding: 0.13rem 0.7rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  position: relative;

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.text};
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 1.7rem;
    left: 0.7rem;
    width: 0;
    height: 0.18rem;
    transition: width 0.28s cubic-bezier(0.47, 0, 0.745, 0.715);
    background-color: currentColor;

    @media (min-width: 1500px) {
      top: 2.6rem;
    }
  }

  &:hover:after {
    width: 55%;
  }

  &.active:hover:after {
    width: 0;
  }
`;
