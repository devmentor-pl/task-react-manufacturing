import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hero from '../../components/Hero';
import RecipeCard from '../../components/RecipeCard';
import {
  Container,
  Section,
  SectionTitle,
  Eyebrow,
  Button,
} from '../../components/Common/common.styled';
import { recipesApi } from '../../store/recipesApi';

const Head = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export default function HomePage() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    let active = true;
    recipesApi
      .search({ number: 6, sort: 'popularity', addRecipeInformation: 'true' })
      .then((data) => {
        if (active) setFeatured(data?.results ?? []);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <Hero />

      <Section>
        <Container>
          <Head>
            <div>
              <Eyebrow>Featured</Eyebrow>
              <SectionTitle>Popular this week</SectionTitle>
            </div>
            <Button as={Link} to="/recipes" $variant="ghost" $size="sm">
              View all
            </Button>
          </Head>

          <Grid>
            {featured.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </Grid>

          <Center>
            <Button as={Link} to="/recipes" $variant="primary">
              Browse all recipes
            </Button>
          </Center>
        </Container>
      </Section>
    </>
  );
}
