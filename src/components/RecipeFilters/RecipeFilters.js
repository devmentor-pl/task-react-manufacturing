import React from 'react';

import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledRecipeFilters from './RecipeFilters.styled';
import { SearchIcon } from '../Common/icons';
import {
  fetchRecipes,
  setQuery,
  setFilter,
  setSort,
  setCachedRecipes,
  selectFilters,
  selectTotalResults,
  selectCachedItems,
} from '../../store/recipesSlice';

const CUISINES = ['All', 'Italian', 'Mexican', 'Asian', 'Mediterranean', 'American', 'French'];

const SORTS = [
  { value: 'popularity', label: 'Popular' },
  { value: 'healthiness', label: 'Healthiest' },
  { value: 'time', label: 'Quickest' },
  { value: 'price', label: 'Cheapest' },
  { value: 'random', label: 'Random' },
];

export default function RecipeFilters() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const total = useSelector(selectTotalResults);
  const cachedRecipes = useSelector(selectCachedItems);

  const [term, setTerm] = useState(filters.query);
  const debounce = useRef();

  const onSearch = (e) => {
    const value = e.target.value;
    setTerm(value);

    const filteredCache = cachedRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(String(value))
    );
    dispatch(setCachedRecipes(filteredCache));

    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      dispatch(setQuery(value));
      dispatch(fetchRecipes());
    }, 400);
  };
  useEffect(() => () => clearTimeout(debounce.current), []);

  const onCuisine = (label) => {
    const value = label === 'All' ? '' : label.toLowerCase();
    dispatch(setFilter({ key: 'cuisine', value }));
    dispatch(fetchRecipes());
  };

  const onSort = (e) => {
    dispatch(setSort({ sort: e.target.value }));
    dispatch(fetchRecipes());
  };

  const activeCuisine = filters.cuisine || 'all';

  return (
    <StyledRecipeFilters.FiltersBar>
      <StyledRecipeFilters.ToolbarRow>
        <StyledRecipeFilters.Search>
          <SearchIcon />
          <StyledRecipeFilters.SearchInput
            type="search"
            placeholder="Search recipes…"
            value={term}
            onChange={onSearch}
          />
        </StyledRecipeFilters.Search>

        <StyledRecipeFilters.ToolbarRight>
          <StyledRecipeFilters.ResultCount>{total} recipes</StyledRecipeFilters.ResultCount>
          <StyledRecipeFilters.SortField>
            Sort by:
            <StyledRecipeFilters.Select value={filters.sort} onChange={onSort}>
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </StyledRecipeFilters.Select>
          </StyledRecipeFilters.SortField>
        </StyledRecipeFilters.ToolbarRight>
      </StyledRecipeFilters.ToolbarRow>

      <StyledRecipeFilters.PillList>
        {CUISINES.map((label) => {
          const value = label === 'All' ? 'all' : label.toLowerCase();
          return (
            <StyledRecipeFilters.Pill
              key={label}
              type="button"
              $active={activeCuisine === value}
              onClick={() => onCuisine(label)}
            >
              {label}
            </StyledRecipeFilters.Pill>
          );
        })}
      </StyledRecipeFilters.PillList>
    </StyledRecipeFilters.FiltersBar>
  );
}
