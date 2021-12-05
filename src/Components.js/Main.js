import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Body from "./Body";
import Profile from "./Profile";
import Topbar from "./Topbar";
import Projects from "./Projects";
import SingleProject from "./SingleProject";

function Main(props) {
  const [scroll, setScroll] = useState(false);
  const [dark, setDark] = useState(false);

  const darkF = () => {
    setDark(!dark);
  };

  useEffect(() => {
    // slide();

    function onScroll() {
      if (window.pageYOffset > 150) {
        setScroll(true);
      } else if (window.pageYOffset < 350) {
        setScroll(false);
      }
      // if (window.pageYOffset < 350) {
      //   setPage("home");
      // }
      // if (window.pageYOffset > 500) {
      //   setPage("About");
      // }
    }
    window.addEventListener("scroll", onScroll);

    return window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <Dark dark={dark}>
      <Topbar scroll={scroll} darkF={darkF} dark={dark} />
      <Cover>
        <Pr>
          <Profile />
        </Pr>
        <Container>
          <Switch>
            <Route path="/" exact>
              <Body />
              <About />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/projects/:id" exact component={SingleProject} />
          </Switch>
        </Container>
      </Cover>
    </Dark>
  );
}

export default Main;

const Dark = styled.div`
  background-color: #f3f3f3;
  color: #171717;
  ${(props) =>
    props.dark &&
    css`
      color: #f3f3f3;
      background-color: #2e2e2e;
    `}
`;

const PageContent = styled.div`
  position: fixed;
  top: 13%;
  left: 0%;
  height: 45px;
  width: auto;
  padding: 0px 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 0px 10px 10px 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Cover = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  max-width: 100%;
`;
const Pr = styled.div`
  position: fixed;
  flex: 1;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  flex: 2;

  @media only screen and (max-width: 640px) {
  }
`;
