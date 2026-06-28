import styled from 'styled-components';
import { lineClamp } from './common.styled';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-card);
  overflow: hidden;
  transition:
    border-color var(--ease),
    transform var(--ease);

  &:hover {
    border-color: var(--border-strong);
    transform: translateY(-3px);
  }
`;

export const CardMedia = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  background: var(--ph-taupe);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardBadge = styled.span`
  position: absolute;
  top: 14px;
  left: 14px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 5px 11px;
  border-radius: var(--r-chip);
  background: rgba(22, 19, 15, 0.72);
  color: var(--text);
  backdrop-filter: blur(4px);
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  line-height: 1.35;
  color: var(--text);
  ${lineClamp(2)}
`;

export const CardMeta = styled.div`
  margin-top: auto;
  padding-top: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTime = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: var(--muted);
`;

export const CardRating = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
  color: var(--gold);
`;

const StyledRecipeCard = {
  Card,
  CardMedia,
  CardBadge,
  CardBody,
  CardTitle,
  CardMeta,
  CardTime,
  CardRating,
};

export default StyledRecipeCard;
