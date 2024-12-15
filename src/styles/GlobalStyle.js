import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: ${({ theme }) => theme.fontSize.normal}rem;
    }

    
    li {
    list-style: none;
    }

    a {
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
    }
`;
