import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipeFilters from '../RecipeFilters/RecipeFilters';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Container, Button } from '../Common/common.styled';
import { Grid, StateMsg, Pager, PageInfo } from './RecipeList.styled';
import {
  fetchRecipes,
  nextPage,
  prevPage,
  selectRecipes,
  selectIsLoading,
  selectRecipesError,
  selectHasMore,
  selectCurrentPage,
} from '../../store/recipesSlice';

export default function RecipeList() {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectRecipesError);
  const hasMore = useSelector(selectHasMore);
  const page = useSelector(selectCurrentPage);

  useEffect(() => {
    if (recipes.length === 0) dispatch(fetchRecipes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const goNext = () => {
    dispatch(nextPage());
    dispatch(fetchRecipes());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const goPrev = () => {
    dispatch(prevPage());
    dispatch(fetchRecipes());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <RecipeFilters />

      {error && <StateMsg>Coś poszło nie tak: {error}</StateMsg>}
      {!error && !loading && recipes.length === 0 && (
        <StateMsg>Brak przepisów dla tych filtrów.</StateMsg>
      )}

      <Grid>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Grid>

      {loading && <StateMsg>Ładowanie…</StateMsg>}

      {recipes.length > 0 && (
        <Pager>
          <Button type="button" $variant="ghost" onClick={goPrev} disabled={page <= 1}>
            ‹ Prev
          </Button>
          <PageInfo>Strona {page}</PageInfo>
          <Button type="button" $variant="ghost" onClick={goNext} disabled={!hasMore}>
            Next ›
          </Button>
        </Pager>
      )}
    </Container>
  );
}
