import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import GlobalFonts from './fonts/GlobalFonts.js';
import GlobalStyles from './components/Styled/GlobalStyles.js';
import theme from './components/Styled/theme.js';

const root = createRoot(document.querySelector('#root'));
root.render(
  <>
    <Reset />
    <GlobalFonts />
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </>
);
