import { Global, css } from "@emotion/react";

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto";
    -webkit-font-smoothing: antialiased;
  }
`;

const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;
