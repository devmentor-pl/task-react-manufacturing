import { Link } from "react-router-dom";
import HEART_ICON from "../../assets/heart.svg";
import HEART_FULL_ICON from "../../assets/heart-full.svg";
import styled from "styled-components";

export const ItemLink = styled(Link)`
  position: relative;
`;

export const Button = styled.button`
  border: none;
`;

export const Image = styled.img`
  width: 250px;
  height: 400px;
`;

export const Title = styled.h3`
  font-weight: 700;
  margin: 0.5rem 0;
`;

export const Heart = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  background-image: ${({ $isFavorite }) =>
    $isFavorite ? `url(${HEART_FULL_ICON})` : `url(${HEART_ICON})`};
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    background-image: url(${HEART_FULL_ICON});
  }
`;
