import { NoResults, Text, Title } from "./NoResultsContainer.styled";

export const NoResultsContainer = () => {
  return (
    <NoResults>
      <Title>No results found</Title>
      <Text>We couldn't find any products matching your search.</Text>
    </NoResults>
  );
};
