import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  :root {
    /* kolory */
    --bg: #16130F;
    --surface: #1E1A15;
    --surface-2: #262019;
    --border: #322D27;
    --border-strong: #403A33;
    --text: #F2EDE4;
    --muted: #9C9286;
    --dim: #6E665B;
    --gold: #C9A14A;
    --gold-strong: #D9B968;
    --sage: #8B9A6B;

    /* tonacje placeholderów na zdjęcia */
    --ph-taupe: #6B5E4E;
    --ph-sage: #5E6B57;
    --ph-clay: #7A5E50;

    /* promienie */
    --r-card: 14px;
    --r-btn: 9px;
    --r-chip: 6px;
    --r-pill: 8px;
    --r-input: 10px;

    /* layout */
    --container: 1240px;
    --container-narrow: 820px;
    --nav-h: 84px;

    /* typografia + ruch */
    --font: 'Montserrat', system-ui, -apple-system, sans-serif;
    --ease: 160ms ease;
  }

  *, *::before, *::after { box-sizing: border-box; }
  * { margin: 0; }

  html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font);
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  img, svg, video { display: block; max-width: 100%; }
  img { height: auto; }

  a { color: inherit; text-decoration: none; }

  button {
    font: inherit;
    color: inherit;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }

  ul, ol { list-style: none; padding: 0; }

  input, select, textarea, button { font-family: inherit; }

  h1, h2, h3, h4 { line-height: 1.15; font-weight: 700; }

  ::selection { background: var(--gold); color: var(--bg); }

  :focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }

  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 8px; }
`;

export default GlobalStyle;
