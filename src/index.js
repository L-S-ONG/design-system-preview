import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {SignUpModal, PrimaryButton, SecondaryButton, TertiaryButton} from "./components";
import { ThemeProvider } from "styled-components";
import {GlobalStyle, darkTheme, defaultTheme} from "./utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return(
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button 
        style={{margin: "0 16px 24px", padding: "8px", background: "none"}}
        onClick={()=> setUseDarkTheme(true)}
      >
        Dark Theme
      </button>
      <button 
        style={{margin: "0 16px 24px", padding: "8px", background: "none"}}
        onClick={()=> setUseDarkTheme(false)}
      >
        Default Theme
      </button>
      <button 
        style={{margin: "0 16px 24px", padding: "8px", background: "none"}}
        onClick={()=> setShowModal(!showModal)}
      >
        Toggle Modal
      </button>
      <div 
        style={{background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
        width: "100vw", height: "100vh", display: "block", alignItems: "center", justifyContent: "space-around"
      }}>
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        <br />
        <PrimaryButton>Hello World</PrimaryButton>
        <SecondaryButton>Goodbye World</SecondaryButton>
        <TertiaryButton>Hey World</TertiaryButton>
        <br /><br />
        <PrimaryButton modifiers={["small", "warning"]}>Hello World</PrimaryButton>
        <SecondaryButton modifiers={["large", "warning", "warningSecondary"]}>Goodbye World</SecondaryButton>
        <TertiaryButton modifiers={["warning", "warningTertiary"]}>Hey World</TertiaryButton>
        <br /><br />
        <PrimaryButton modifiers={["small", "error"]}>Hello World</PrimaryButton>
        <SecondaryButton modifiers={["large", "error", "errorSecondary"]}>Goodbye World</SecondaryButton>
        <TertiaryButton modifiers={["error", "errorTertiary"]}>Hey World</TertiaryButton>
        <br /><br />
        <PrimaryButton modifiers={["small", "success"]}>Hello World</PrimaryButton>
        <SecondaryButton modifiers={["large", "success", "successSecondary"]}>Goodbye World</SecondaryButton>
        <TertiaryButton modifiers={["success", "successTertiary"]}>Hey World</TertiaryButton>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
