import styled from "styled-components";
import { Link } from "react-router-dom";

export const Image = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 1rem;
  gap: 1rem;

  @media (min-width: 400px) {
    background-position: left top;
  }

  @media (min-width: 800px) {
    height: 50%;
    justify-content: center;
  }
`;

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  position: relative;
  margin-bottom: 6rem;

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.text};
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 1.2rem;
    left: 0;
    width: 0;
    height: 2px;
    transition: width 0.28s cubic-bezier(0.47, 0, 0.745, 0.715);
    background-color: currentColor;
  }

  &:hover:after {
    width: 32px;
  }

  @media (min-width: 800px) {
    margin-bottom: 0;
  }
`;

export const ImageFemale = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70%;
  flex-basis: 50%;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 1rem;
  gap: 1rem;

  @media (min-width: 400px) {
    background-position: left top;
  }

  @media (min-width: 800px) {
    background-position: 70% 20%;
    justify-content: center;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.textRow}rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 1500px) {
    font-size: 30px;
  }
`;

export const MainText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.textSmall}rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  margin-top: 5rem;

  @media (min-width: 800px) {
    margin-top: 0;
  }

  @media (min-width: 1500px) {
    font-size: 16px;
  }
`;
