import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
   --color-main-background: #1A1A20; 
   --color-navbar-background: rgba(26, 26, 32, 0.55);
   --backdrop-bg-color: rgba(0, 0, 0, 0.5);
  --cv-container-bg-color: white;


   --border-radius: 10px;

   --font-main-gray: #A3A3A2;
   --font-main-black: #1A1A20;
   --font-main-white: #DADADA;

   --main-color-blue: #0F8B8D;
   --main-color-dark: #05494A;

   --icons-carousel-backgroud: #6fb9bb;


   --icon-color-white: invert(98%) sepia(1%) saturate(1395%) hue-rotate(183deg) brightness(110%) contrast(71%);
   --icon-color-gray: invert(69%) sepia(11%) saturate(0%) hue-rotate(136deg)
      brightness(94%) contrast(93%);
   --icon-color-blue: invert(30%) sepia(95%) saturate(3500%) hue-rotate(150deg)
        brightness(100%) contrast(97%);

   --transition: all 0.5s;

   --max-width: 1700px;
}

body{
   background-color: var(--color-main-background);
   color: var(--font-main-gray);
}

`;

export default GlobalStyles;
