import React from "react";
import styled from "styled-components";
import githubLogo from "../assets/logo/GitHub-Mark-120px-plus.png";
import linkedInLogo from "../assets/logo/linkedin.png";
// import { Button } from "../styles/Button";
// import { motion } from "framer-motion";
// import main from "../assets/logo/overvue_trans.png";

export const Footer = () => {
  return (
    <FooterEle>
      <Socials>
        <a className="social-link" href="https://github.com/open-source-labs/OverVue">
          <img alt="github logo" src={githubLogo}></img>
        </a>
        <a className="social-link" href="https://www.linkedin.com/company/overvue-7-0/">
          <img alt="linkedIn logo" src={linkedInLogo}></img>
        </a>
      </Socials>
      <h4>OverVue is licensed under the MIT License</h4>
      <h4 className="OSLabs-line">Overvue is an open source project developed under tech accelerator <a href="https://opensourcelabs.io/">&nbsp;OSLabs</a></h4>
    </FooterEle>
  )
}

const Socials = styled.div`
  display: flex;
  justify-content: center;
  a {
    margin: .5em;
    transition: all .2s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
  img {
    height: 2em;
  }
 `

const FooterEle = styled.div`
  // background-color: rgb(243, 245, 246);
  > * {
    margin: .5em;
  }
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  // margin-top: 10em;
  padding: 2.5em;

  h4 {
    color: grey;
    font-size: 1em;
  }

  .OSLabs-line {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 1em;
  }
`
