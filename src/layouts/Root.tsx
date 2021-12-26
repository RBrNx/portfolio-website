import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Define what props.theme will look like
const theme = {
  background: '#1d1d1d',
  accent: '#c32626',
  heading: '#cacaca',
  body: '#b5b5b5',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyles />
  </ThemeProvider>
);

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${props => props.theme.background};
  }
`;

export default RootLayout;
