import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
   --color-main-background: #1A1A20; 
   --color-navbar-background: #272726;

   --font-main-gray: #A3A3A2;
   --font-main-white: #DADADA;

   --main-color-blue: #0F8B8D;
   --main-color-dark: #05494A;

   --transition: all 0.5s;

   --max-width: 1700px;
}

body{
   background-color: var(--color-main-background);
   color: var(--font-main-gray);
}

`;

export default GlobalStyles;
