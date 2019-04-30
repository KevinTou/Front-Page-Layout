import React from "react";
import "./App.css";

// Component imports
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import MainContainer from "./components/main-container/MainContainer";
import Footer from "./components/footer/Footer";

// @material-ui/core imports
// import { CssBaseline } from "@material-ui/core";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// const theme = createMuiTheme();

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <MainContainer />
      <Footer />
    </>
  );
}

export default App;
