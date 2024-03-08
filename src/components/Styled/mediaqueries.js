import { css } from 'styled-components';

const breakpoints = {
  small: '600px',
  medium: '900px',
  large: '1200px',
};

export const media = {
  mobile: (...args) => css`
    @media (max-width: ${breakpoints.small}) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: ${breakpoints.medium}) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (max-width: ${breakpoints.large}) {
      ${css(...args)}
    }
  `,
};
