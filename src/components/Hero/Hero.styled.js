import styled from 'styled-components';

export const Hero = styled.section`
  padding-block: clamp(48px, 7vw, 88px);
`;

export const HeroInner = styled.div`
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: clamp(20px, 5vw, 40px);
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: center;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroEyebrow = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 16px;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(32px, 5vw, 46px);
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: var(--text);
  max-width: 16ch;
`;

export const HeroText = styled.p`
  margin-top: 18px;
  max-width: 46ch;
  color: var(--muted);
  font-size: clamp(15px, 1.4vw, 16px);
  line-height: 1.6;
`;

export const HeroActions = styled.div`
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const HeroMedia = styled.div`
  aspect-ratio: 3 / 2;
  border-radius: 16px;
  overflow: hidden;
  background: var(--ph-taupe);
  border: 1px solid var(--border);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 880px) {
    order: -1;
  }
`;

const StyledHero = {
  Hero,
  HeroInner,
  HeroContent,
  HeroEyebrow,
  HeroTitle,
  HeroText,
  HeroActions,
  HeroMedia,
};

export default StyledHero;
