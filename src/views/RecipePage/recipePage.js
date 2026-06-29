import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import RecipeArticle from '../../components/RecipeArticle';
import {
  fetchRecipeById,
  clearRecipe,
  selectRecipe,
  selectRecipeStatus,
  selectRecipeError,
} from '../../store/recipeSlice';

const State = styled.p`
  max-width: var(--container-narrow);
  margin: 64px auto;
  padding-inline: clamp(20px, 5vw, 40px);
  text-align: center;
  color: var(--muted);
`;

export default function RecipePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipe);
  const status = useSelector(selectRecipeStatus);
  const error = useSelector(selectRecipeError);

  useEffect(() => {
    if (id) dispatch(fetchRecipeById(id));
    return () => dispatch(clearRecipe());
  }, [dispatch, id]);

  if (status === 'idle' || status === 'loading') return <State>Ładowanie przepisu…</State>;
  if (status === 'failed') return <State>Nie udało się wczytać przepisu: {error}</State>;
  if (!recipe) return <State>Nie znaleziono przepisu.</State>;

  return <RecipeArticle recipe={recipe} />;
}
