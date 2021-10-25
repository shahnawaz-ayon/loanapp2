import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function Styled() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        
        <Button variant="primary" onClick={() => themeToggler()}>Change Theme</Button>
      </StyledApp>
    </ThemeProvider>
  );
}

export default Styled;