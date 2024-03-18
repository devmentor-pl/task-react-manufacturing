import { css } from 'styled-components';

export const breakpoints = {
  mobile: '600px',
  tablet: '900px',
  desktop: '1200px',
};

export const media = {
  mobile: (...args) => css`
    @media (max-width: ${breakpoints.mobile}) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: ${breakpoints.tablet}) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (max-width: ${breakpoints.desktop}) {
      ${css(...args)}
    }
  `,
};
