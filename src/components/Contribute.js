import React from "react";
import styled from "styled-components";
// styling and functionality of writing, OverVue link below the developer card
const BottomDiv = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap');
  @media only screen and (max-width: 800px) {
    h2 {
    }
    h2::after {
      display: none;
    }
    .contribute {
      margin: 0em auto;
    }
  }
  height: 100%;
  justify-content: left;
  margin: 2rem;
  margin-top: 6rem;
  h2 {
    font-weight: 100;
    color: white;
    font-family: 'Inter', sans-serif;
  }
  h2::after {
    background: hsla(0, 0%, 56.5%, 0.5);
    content: "";
    display: block;
    height: 1px;
    margin: 1em auto;
    width: 50%;
  }
  i {
    font-size: 1.1em;
    margin: 0em 0em;
    margin-left: 0.5em;
  }
  .contribute {
    width: 200px;
    display: flex;
    margin: 2em auto;
    font-size: 1.1rem;
    padding: 10px;
    color: white;
    background-color: none;
    text-decoration: none;
    border-radius: 0.5rem;
    border: 1px solid white;
    background: #7ad8ae;
    font-family: 'Inter', sans-serif;
    transition: 200ms ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: rgb(255, 255, 255, 0.2);
    }
  }
  div {
    font-family: 'Inter', sans-serif;
    font-weight: 200;
  }
  div > a {
    display: inline;
    color: inherit;
    text-decoration: underline;
  }
`;

const Contribute = () => {
  return (
    <BottomDiv>
      <h2>Want to Contribute?</h2>
      <div>Visit our <a href="https://github.com/open-source-labs/OverVue">Github</a> and help make Vue prototyping better!</div>
      {/* <a className="contribute" href="https://github.com/open-source-labs/OverVue">
        <p>Github </p> <i className="fab fa-github" />
      </a> */}
    </BottomDiv>
  );
};

export default Contribute