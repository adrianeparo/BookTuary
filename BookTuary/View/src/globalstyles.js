import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    width: 100vw;
    background: radial-gradient(158.72% 142.06% at 100.9% 100%, #404588 0%, #404588 2.85%, #333666 22.73%, #121111 71.97%, #131213 100%);
  }


`;

export default GlobalStyle;