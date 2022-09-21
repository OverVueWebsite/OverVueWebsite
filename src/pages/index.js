import React from "react";
import { Hero, Body, Footer } from "../containers";
import { Navbar } from "../components";
import styled from "styled-components";
import "../styles/styles.css";

export default function Homepage() {
  return (
    <App id="App">
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </App>
  );
}

const App = styled.div`
  display: flex;
  flex-direction: column;
`
