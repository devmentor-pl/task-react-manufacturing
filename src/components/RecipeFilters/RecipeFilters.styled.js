import styled, { css } from 'styled-components';

export const FiltersBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ToolbarRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
`;

export const ToolbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Search = styled.div`
  position: relative;
  flex: 1;
  min-width: 220px;
  max-width: 440px;

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    color: var(--muted);
    pointer-events: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-input);
  color: var(--text);
  font-size: 14px;
  padding: 12px 16px 12px 44px;
  transition: border-color var(--ease);

  &::placeholder {
    color: var(--dim);
  }
  &:hover {
    border-color: var(--border-strong);
  }
  &:focus-visible {
    outline: 2px solid var(--gold);
    outline-offset: 2px;
  }
`;

export const SortField = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  font-size: 14px;
  white-space: nowrap;
`;

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  background: var(--surface)
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' stroke='%239C9286' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'><polyline points='6 9 12 15 18 9'/></svg>")
    no-repeat right 14px center;
  border: 1px solid var(--border);
  border-radius: var(--r-input);
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
  padding: 12px 40px 12px 16px;
  cursor: pointer;
  transition: border-color var(--ease);

  &:hover {
    border-color: var(--border-strong);
  }
  &:focus-visible {
    outline: 2px solid var(--gold);
    outline-offset: 2px;
  }

  option {
    background: var(--surface);
    color: var(--text);
  }
`;

export const ResultCount = styled.span`
  color: var(--muted);
  font-size: 14px;
`;

export const PillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Pill = styled.button`
  font-size: 13px;
  font-weight: 500;
  padding: 10px 18px;
  border-radius: var(--r-pill);
  transition:
    background var(--ease),
    color var(--ease),
    border-color var(--ease);

  ${({ $active }) =>
    $active
      ? css`
          background: var(--gold);
          color: var(--bg);
        `
      : css`
          background: var(--surface);
          color: var(--muted);
          border: 1px solid var(--border);
          &:hover {
            color: var(--text);
            border-color: var(--border-strong);
          }
        `}
`;

const StyledRecipeFilters = {
  FiltersBar,
  ToolbarRow,
  ToolbarRight,
  Search,
  SearchInput,
  SortField,
  Select,
  ResultCount,
  PillList,
  Pill,
};

export default StyledRecipeFilters;
