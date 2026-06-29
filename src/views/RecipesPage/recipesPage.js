import React from 'react';

import styled from 'styled-components';
import RecipeList from '../../components/RecipeList';
import { Container, Eyebrow } from '../../components/Common/common.styled';

const Head = styled.div`
  padding-block: clamp(28px, 5vw, 48px) 8px;
`;

const Title = styled.h1`
  margin-top: 10px;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text);
`;

const Lead = styled.p`
  margin-top: 12px;
  max-width: 60ch;
  color: var(--muted);
`;

export default function RecipesPage() {
  return (
    <>
      <Container>
        <Head>
          <Eyebrow>Recipes</Eyebrow>
          <Title>All Recipes</Title>
          <Lead>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore.
          </Lead>
        </Head>
      </Container>

      <RecipeList />
    </>
  );
}
