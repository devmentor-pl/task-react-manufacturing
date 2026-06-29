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
  selectCachedItems,
} from '../../store/recipesSlice';

export default function RecipeList() {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectRecipesError);
  const hasMore = useSelector(selectHasMore);
  const page = useSelector(selectCurrentPage);
  const cachedRecipes = useSelector(selectCachedItems);

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

      {error && <StateMsg>Something went wrong: {error}</StateMsg>}
      {!error && !loading && recipes.length === 0 && <StateMsg>No results.</StateMsg>}

      <Grid>
        {cachedRecipes.length > 0
          ? cachedRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
          : recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
      </Grid>

      {loading && <StateMsg>Loading…</StateMsg>}

      {recipes.length > 0 && (
        <Pager>
          <Button type="button" $variant="ghost" onClick={goPrev} disabled={page <= 1}>
            ‹ Prev
          </Button>
          <PageInfo>Page {page}</PageInfo>
          <Button type="button" $variant="ghost" onClick={goNext} disabled={!hasMore}>
            Next ›
          </Button>
        </Pager>
      )}
    </Container>
  );
}
