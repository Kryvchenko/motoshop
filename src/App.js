import React from "react";
import { Footer } from "./containers/Footer/Footer";
import { Header } from "./containers/Header/Header";
import { Main } from "./containers/Main/Main";
import "./grid.css";
import "./index.css";

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
