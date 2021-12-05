import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { gsap } from "gsap";

function Topbar(props) {
  const [logo, setLogo] = useState(true);
  const logoF = () => {
    setLogo(!logo);
  };
  const ref = useRef();
  const ref2 = useRef();
  const slide = () => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, x: -20 },
      { duration: 1, opacity: 1, x: 0, ease: "Power2.easeIn" }
    );
    gsap.fromTo(
      ref2.current,
      { opacity: 0, x: 20 },
      { duration: 1, opacity: 1, x: 0, ease: "Power2.easeIn" }
    );
  };
  useEffect(() => {
    slide();
  }, []);

  return (
    <Container scroll={props.scroll} dark={props.dark}>
      <h2 ref={ref}>Profile</h2>
      <div className="menu" onClick={logoF}>
        <div ref={ref2}>
          <BiMenu className="menu" size={32} />
        </div>
        <div className={logo ? "sidebar" : "sidebar active"}>
          <GrClose size={28} onClick={logoF} className="menu" />
          <ul>
            <NavLink
              to="/"
              exact
              style={{ color: "black", textDecoration: "none" }}
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/projects"
              exact
              style={{ color: "black", textDecoration: "none" }}
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              <li>Projects</li>
            </NavLink>
            <li onClick={() => props.darkF()}>Dark Mode</li>
            <li>Download CV</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Topbar;

const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: #f3f3f3;
  z-index: 9999;
  color: black;
  transition: all 0.5s ease;

  ${(props) =>
    props.scroll &&
    css`
      color: black;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    `}
  ${(props) =>
    props.dark &&
    css`
      background-color: #dadadd;
    `}
  h2 {
    text-transform: uppercase;
    font-family: "Metropolis";
    font-size: 20px;
    font-weigth: 300;
    pointer-events: none;
    padding: 5px;
  }
  .menu {
    padding: 5px;
    cursor: pointer;
    // position: fixed;
    // top: 10%;
    // right: -5%;
  }
  .sidebar {
    list-style: none;
    position: absolute;
    top: 33%;
    right: -70%;
    height: auto;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    background-color: #dadadd;
    border-radius: 10px;
    color: black;
    transition: all 0.5s ease;
    z-index: 9999;
  }
  .active {
    right: 0.8%;
    transition: all 0.5s ease;
  }
  ul {
    list-style: none;
    text-align: center;
    width: 100%;
    font-size: 18px;
  }
  li {
    padding: 10px;
    transition: all 0.1s ease-out;
  }
  li:hover {
    color: white;
    margin: auto;
    border-radius: 10px;
    width: 80%;
    background: rgba(51, 51, 51, 0.5);
  }
  @media only screen and (max-width: 420px) {
    .sidebar {
      top: 30%;
    }
    ul {
      font-size: 15px;
    }
    .active {
      right: 2%;
      transition: all 0.5s ease;
    }
  }
`;
