import React from 'react';

import { Link } from 'react-router-dom';
import StyledRecipeCard from './RecipeCard.styled';

const toRating = (score) => (typeof score === 'number' ? (score / 20).toFixed(1) : null);

export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  const { id, title, image } = recipe;
  const category = recipe.dishTypes?.[0] || recipe.cuisines?.[0];
  const time = recipe.readyInMinutes ? `${recipe.readyInMinutes} min` : null;
  const rating = toRating(recipe.spoonacularScore ?? recipe.healthScore);

  return (
    <StyledRecipeCard.Card as={Link} to={`/recipe/${id}`}>
      <StyledRecipeCard.CardMedia>
        {category && <StyledRecipeCard.CardBadge>{category}</StyledRecipeCard.CardBadge>}
        {image && <img src={image} alt={title} loading="lazy" />}
      </StyledRecipeCard.CardMedia>

      <StyledRecipeCard.CardBody>
        <StyledRecipeCard.CardTitle>{title}</StyledRecipeCard.CardTitle>
        <StyledRecipeCard.CardMeta>
          {time && <StyledRecipeCard.CardTime>{time}</StyledRecipeCard.CardTime>}
          {rating && <StyledRecipeCard.CardRating>★ {rating}</StyledRecipeCard.CardRating>}
        </StyledRecipeCard.CardMeta>
      </StyledRecipeCard.CardBody>
    </StyledRecipeCard.Card>
  );
}
