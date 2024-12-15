import { Link } from "react-router-dom";
import styled from "styled-components";

export const ImageBackground = styled.div`
  background-image: ${({ $heroimg }) => `url(${$heroimg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgb(245, 230, 224);
  width: 100%;
  height: 400px;
  display: flex;

  @media (min-width: 1100px) {
    height: 420px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.textHero}rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 0.5rem;

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

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.textSmall}rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.7rem;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.normal}rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1500px) {
    font-size: ${({ theme }) => theme.fontSize.textCategory}rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.812rem;
  margin-bottom: 1rem;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.normal}rem;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSize.textSmall}rem;
  text-transform: uppercase;
  font-weight: 500;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.normal}rem;
  }

  @media (min-width: 1500px) {
    font-size: ${({ theme }) => theme.fontSize.textCategory}rem;
  }
`;

export const LineText = styled.div`
  width: 2.5rem;
  height: 0.125rem;
  background-color: ${({ theme }) => theme.colors.red};
`;

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.textSmall}rem;
  font-weight: 400;
  position: relative;

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.text};
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 1.25rem;
    left: 0;
    width: 5.5rem;
    height: 0.125rem;
    transition: width 0.28s cubic-bezier(0.47, 0, 0.745, 0.715);
    background-color: currentColor;
  }

  &:hover:after {
    width: 7.1rem;
  }

  @media (min-width: 1500px) {
    font-size: ${({ theme }) => theme.fontSize.textCategory}rem;
    &:after {
      top: 2.25rem;
      width: 9.5rem;
    }
  }
`;

export const Image = styled.img`
  align-self: flex-end;
  max-height: 90%;

  @media (min-width: 1100px) {
    max-height: 400px;
  }
`;
