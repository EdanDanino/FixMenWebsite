import styled from "@emotion/styled";
import AppRouter from "./AppRouter";
import { Footer, TopBar } from "./Components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./Shared";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Page = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Root>
        <TopBar />
        <Page>
          <AppRouter />
        </Page>
        <Footer />
      </Root>
    </BrowserRouter>
  );
};

export default App;
