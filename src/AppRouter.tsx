import React from "react";
import { Route, Routes } from "react-router-dom";
import { Comments, ContactMe, Home, Pictures } from "./Pages";
import styled from "@emotion/styled";

const RouterWrapper = styled.div`
  margin-bottom: 50px;
`;

const AppRouter = () => (
  <RouterWrapper>
    <Routes>
      <Route path="/Comments" Component={Comments} />
      <Route path="/ContactMe" Component={ContactMe} />
      <Route path="/Pictures" Component={Pictures} />
      <Route path="/" Component={Home} />
    </Routes>
  </RouterWrapper>
);

export default AppRouter;
