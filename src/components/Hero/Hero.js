import React from 'react';

import { Link } from 'react-router-dom';
import StyledHero from './Hero.styled';
import { Button } from '../Common/common.styled';
import { ArrowIcon } from '../Common/icons';

export default function Hero({
  eyebrow = 'HOME COOKING',
  title = 'Cook something extraordinary tonight',
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  image,
}) {
  return (
    <StyledHero.Hero>
      <StyledHero.HeroInner>
        <StyledHero.HeroContent>
          <StyledHero.HeroEyebrow>{eyebrow}</StyledHero.HeroEyebrow>
          <StyledHero.HeroTitle>{title}</StyledHero.HeroTitle>
          <StyledHero.HeroText>{text}</StyledHero.HeroText>

          <StyledHero.HeroActions>
            <Button as={Link} to="/recipes" $variant="primary">
              Explore Recipes
              <ArrowIcon />
            </Button>
            <Button as={Link} to="/about" $variant="ghost">
              How It Works
            </Button>
          </StyledHero.HeroActions>
        </StyledHero.HeroContent>

        <StyledHero.HeroMedia>{image && <img src={image} alt="" />}</StyledHero.HeroMedia>
      </StyledHero.HeroInner>
    </StyledHero.Hero>
  );
}
