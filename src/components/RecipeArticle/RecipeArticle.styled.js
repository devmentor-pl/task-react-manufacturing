import styled from 'styled-components';
import { lineClamp } from '../Common/common.styled';

export const Article = styled.article`
  width: 100%;
  max-width: var(--container-narrow);
  margin-inline: auto;
  padding-inline: clamp(20px, 5vw, 40px);
  padding-block: clamp(32px, 5vw, 56px);
`;

export const ArticleHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ArticleCategory = styled.span`
  align-self: flex-start;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 5px 11px;
  border-radius: var(--r-chip);
  background: rgba(139, 154, 107, 0.16);
  color: var(--sage);
`;

export const ArticleTitle = styled.h1`
  font-size: clamp(28px, 4.5vw, 44px);
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: var(--text);
  max-width: 20ch;
`;

export const ArticleLead = styled.p`
  font-size: clamp(16px, 1.6vw, 18px);
  line-height: 1.6;
  color: var(--muted);
  max-width: 60ch;
`;

export const MetaBar = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding-block: 4px;
  color: var(--muted);
  font-size: 14px;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.span`
  flex: none;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--ph-sage);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AuthorName = styled.span`
  color: var(--text);
  font-weight: 600;
  font-size: 14px;
`;

export const MetaDot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--dim);
`;

export const Cover = styled.figure`
  margin-block: clamp(24px, 4vw, 36px);
  aspect-ratio: 16 / 9;
  border-radius: var(--r-card);
  overflow: hidden;
  background: var(--ph-taupe);
  border: 1px solid var(--border);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Facts = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--r-card);
  overflow: hidden;

  @media (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Fact = styled.div`
  background: var(--surface);
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FactLabel = styled.dt`
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--dim);
`;

export const FactValue = styled.dd`
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
`;

export const Block = styled.section`
  margin-top: clamp(32px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const BlockTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: var(--text);
`;

export const Prose = styled.div`
  color: var(--muted);
  font-size: 16px;
  line-height: 1.7;

  > * + * {
    margin-top: 1.1em;
  }

  h2 {
    color: var(--text);
    font-size: 22px;
    font-weight: 700;
    margin-top: 1.6em;
  }
  h3 {
    color: var(--text);
    font-size: 18px;
    font-weight: 600;
    margin-top: 1.4em;
  }
  p {
    color: var(--muted);
  }
  strong {
    color: var(--text);
    font-weight: 600;
  }

  a {
    color: var(--gold);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  ul,
  ol {
    padding-left: 1.2em;
  }
  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }
  li {
    margin-top: 0.4em;
  }

  blockquote {
    border-left: 2px solid var(--gold);
    padding-left: 16px;
    color: var(--text);
    font-style: italic;
  }

  img {
    border-radius: var(--r-card);
    margin-block: 1.4em;
  }
`;

/* Lista składników */
export const IngredientList = styled.ul`
  display: grid;
  gap: 10px;
`;

export const Ingredient = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 14px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text);
  font-size: 15px;

  &::before {
    content: '';
    flex: none;
    width: 8px;
    height: 8px;
    margin-top: 7px;
    border-radius: 50%;
    background: var(--gold);
  }
`;

export const StepList = styled.ol`
  display: grid;
  gap: 18px;
  counter-reset: step;
`;

export const Step = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: start;
  counter-increment: step;

  &::before {
    content: counter(step);
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: var(--surface-2);
    border: 1px solid var(--border);
    color: var(--gold);
    font-weight: 700;
    font-size: 14px;
  }
`;

export const StepText = styled.p`
  color: var(--muted);
  line-height: 1.7;
  padding-top: 5px;
`;

/* Tagi na dole artykułu */
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  padding: 7px 14px;
  border-radius: var(--r-pill);
  border: 1px solid var(--border);
  background: var(--surface);
`;

export const RelatedTitle = styled.h4`
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  ${lineClamp(2)}
`;

const StyledRecipeArticle = {
  Article,
  ArticleHeader,
  ArticleCategory,
  ArticleTitle,
  ArticleLead,
  MetaBar,
  Author,
  Avatar,
  AuthorName,
  MetaDot,
  Cover,
  Facts,
  Fact,
  FactLabel,
  FactValue,
  Block,
  BlockTitle,
  Prose,
  IngredientList,
  Ingredient,
  StepList,
  Step,
  StepText,
  Tags,
  Tag,
  RelatedTitle,
};

export default StyledRecipeArticle;

export const SimilarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;
