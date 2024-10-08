import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';


const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  padding: '20px',
}));

const StyledBox = styled('div')(({ theme }) => ({
  width: '400px',
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  // // border: `0px solid ${theme.palette.divider}`,
  // borderRadius: '8px',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  marginLeft: '-1px', 
}));

function App() {
  const [theme, setTheme] = useState(lightTheme);

 
  const toggleToLight = () => {
    setTheme(lightTheme);
  };

  const toggleToDark = () => {
    setTheme(darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledContainer>
        <StyledBox>
          <Typography variant="h4">Светлая тема</Typography>
          <Button variant="contained" onClick={toggleToLight} style={{ marginTop: '20px' }}>
            Toggle Theme
          </Button>
        </StyledBox>
        <StyledBox>
          <Typography variant="h4">Темная тема</Typography>
          <Button variant="contained" onClick={toggleToDark} style={{ marginTop: '20px' }}>
            Toggle Theme
          </Button>
        </StyledBox>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;

