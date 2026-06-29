import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledRecipeArticle, { SimilarGrid } from './RecipeArticle.styled';
import RecipeCard from '../RecipeCard/RecipeCard';
import { fetchSimilar, selectSimilar } from '../../store/similarSlice';

const similarImage = (recipe) => `https://img.spoonacular.com/recipes/${recipe.id}-312x231.jpg`;

export default function RecipeArticle({ recipe }) {
  const dispatch = useDispatch();
  const similar = useSelector(selectSimilar);

  useEffect(() => {
    if (recipe?.id) dispatch(fetchSimilar({ id: recipe.id, number: 3 }));
  }, [dispatch, recipe?.id]);

  if (!recipe) return null;

  const steps = recipe.analyzedInstructions?.[0]?.steps ?? [];
  const ingredients = recipe.extendedIngredients ?? [];
  const tags = [...(recipe.diets ?? []), ...(recipe.dishTypes ?? [])];

  return (
    <StyledRecipeArticle.Article>
      <StyledRecipeArticle.ArticleHeader>
        {recipe.dishTypes?.[0] && (
          <StyledRecipeArticle.ArticleCategory>
            {recipe.dishTypes[0]}
          </StyledRecipeArticle.ArticleCategory>
        )}
        <StyledRecipeArticle.ArticleTitle>{recipe.title}</StyledRecipeArticle.ArticleTitle>

        <StyledRecipeArticle.MetaBar>
          {recipe.sourceName && (
            <StyledRecipeArticle.Author>
              <StyledRecipeArticle.Avatar />
              <StyledRecipeArticle.AuthorName>{recipe.sourceName}</StyledRecipeArticle.AuthorName>
            </StyledRecipeArticle.Author>
          )}
          {recipe.readyInMinutes && (
            <>
              <StyledRecipeArticle.MetaDot />
              <span>{recipe.readyInMinutes} min</span>
            </>
          )}
          {recipe.servings && (
            <>
              <StyledRecipeArticle.MetaDot />
              <span>{recipe.servings} servings</span>
            </>
          )}
        </StyledRecipeArticle.MetaBar>
      </StyledRecipeArticle.ArticleHeader>

      {recipe.image && (
        <StyledRecipeArticle.Cover>
          <img src={recipe.image} alt={recipe.title} />
        </StyledRecipeArticle.Cover>
      )}

      <StyledRecipeArticle.Facts>
        <StyledRecipeArticle.Fact>
          <StyledRecipeArticle.FactLabel>Ready in</StyledRecipeArticle.FactLabel>
          <StyledRecipeArticle.FactValue>
            {recipe.readyInMinutes ?? '—'} min
          </StyledRecipeArticle.FactValue>
        </StyledRecipeArticle.Fact>
        <StyledRecipeArticle.Fact>
          <StyledRecipeArticle.FactLabel>Servings</StyledRecipeArticle.FactLabel>
          <StyledRecipeArticle.FactValue>{recipe.servings ?? '—'}</StyledRecipeArticle.FactValue>
        </StyledRecipeArticle.Fact>
        <StyledRecipeArticle.Fact>
          <StyledRecipeArticle.FactLabel>Health</StyledRecipeArticle.FactLabel>
          <StyledRecipeArticle.FactValue>{recipe.healthScore ?? '—'}</StyledRecipeArticle.FactValue>
        </StyledRecipeArticle.Fact>
        <StyledRecipeArticle.Fact>
          <StyledRecipeArticle.FactLabel>Likes</StyledRecipeArticle.FactLabel>
          <StyledRecipeArticle.FactValue>
            {recipe.aggregateLikes ?? '—'}
          </StyledRecipeArticle.FactValue>
        </StyledRecipeArticle.Fact>
      </StyledRecipeArticle.Facts>

      {recipe.summary && (
        <StyledRecipeArticle.Block>
          <StyledRecipeArticle.BlockTitle>Overview</StyledRecipeArticle.BlockTitle>
          <StyledRecipeArticle.Prose dangerouslySetInnerHTML={{ __html: recipe.summary }} />
        </StyledRecipeArticle.Block>
      )}

      {ingredients.length > 0 && (
        <StyledRecipeArticle.Block>
          <StyledRecipeArticle.BlockTitle>Ingredients</StyledRecipeArticle.BlockTitle>
          <StyledRecipeArticle.IngredientList>
            {ingredients.map((ing, i) => (
              <StyledRecipeArticle.Ingredient key={ing.id ?? i}>
                {ing.original}
              </StyledRecipeArticle.Ingredient>
            ))}
          </StyledRecipeArticle.IngredientList>
        </StyledRecipeArticle.Block>
      )}

      {steps.length > 0 && (
        <StyledRecipeArticle.Block>
          <StyledRecipeArticle.BlockTitle>Method</StyledRecipeArticle.BlockTitle>
          <StyledRecipeArticle.StepList>
            {steps.map((s) => (
              <StyledRecipeArticle.Step key={s.number}>
                <StyledRecipeArticle.StepText>{s.step}</StyledRecipeArticle.StepText>
              </StyledRecipeArticle.Step>
            ))}
          </StyledRecipeArticle.StepList>
        </StyledRecipeArticle.Block>
      )}

      {tags.length > 0 && (
        <StyledRecipeArticle.Tags>
          {tags.map((tag) => (
            <StyledRecipeArticle.Tag key={tag}>{tag}</StyledRecipeArticle.Tag>
          ))}
        </StyledRecipeArticle.Tags>
      )}

      {similar.length > 0 && (
        <StyledRecipeArticle.Block>
          <StyledRecipeArticle.BlockTitle>You might also like</StyledRecipeArticle.BlockTitle>
          <SimilarGrid>
            {similar.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={{ ...recipe, image: similarImage(recipe) }} />
            ))}
          </SimilarGrid>
        </StyledRecipeArticle.Block>
      )}
    </StyledRecipeArticle.Article>
  );
}
