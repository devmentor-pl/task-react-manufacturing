import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
   --color-main-background: #1A1A20; 
   --color-navbar-background: rgba(26, 26, 32, 0.55);
   --backdrop-bg-color: rgba(0, 0, 0, 0.5);
   --cv-container-bg-color: white;


   --border-radius: 10px;

   --font-main-white: #fff;
   --font-main-gray: #A3A3A2;
   --font-main-black: #1A1A20;

   --main-color-blue: #0F8B8D;
   --main-color-dark: #05494A;

   --icons-carousel-backgroud: #6fb9bb;
   --project-description-background: #272726;


   --icon-color-white: invert(100%) sepia(49%) saturate(2%) hue-rotate(110deg) brightness(108%) contrast(100%);
   --icon-color-gray: invert(69%) sepia(11%) saturate(0%) hue-rotate(136deg)
      brightness(94%) contrast(93%);
   --icon-color-blue: invert(30%) sepia(75%) saturate(2068%) hue-rotate(159deg) brightness(92%) contrast(88%);

   --transition: all 0.5s;

   --max-width: 1700px;
}
html{
   scroll-behavior: smooth; 
}

body{
   background-color: var(--color-main-background);
   color: var(--font-main-gray);
}

`;

export default GlobalStyles;
