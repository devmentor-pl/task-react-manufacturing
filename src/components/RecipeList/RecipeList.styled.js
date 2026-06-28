import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 28px;
  margin-top: 32px;
`;

export const StateMsg = styled.p`
  margin-top: 32px;
  text-align: center;
  color: var(--muted);
`;

export const Pager = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 36px;
`;

export const PageInfo = styled.span`
  color: var(--muted);
  font-size: 14px;
`;
