import React, { useEffect, useRef } from "react";
import data from "../Data/projects.json";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { FaReact } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.min.css";
// import "owl.carousel/dist/assets/owl.theme.default.min.css";

function Projects() {
  const ref = useRef();
  const ref2 = useRef();
  const slide = () => {
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      { duration: 1.1, opacity: 1, ease: "Power2.easeIn" }
    );
    gsap.fromTo(
      ref2.current,
      { opacity: 0 },
      { duration: 1, opacity: 1, ease: "Power2.easeIn", delay: 0.5 }
    );
  };
  useEffect(() => {
    slide();
  }, []);
  return (
    <Container>
      <h2 ref={ref}>Projects</h2>
      <Cover ref={ref2}>
        {data.map((el) => {
          return (
            <NavLink
              key={el.id}
              to={"/projects/" + el.id}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Cards>
                <div className="img">
                  {el.framework == "React" ? <FaReact size={70} /> : ""}
                  {el.framework == "HTML, CSS, JS" ? (
                    <CgWebsite size={70} />
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <p>{el.name}</p>
                  <p>{el.framework}</p>
                </div>
              </Cards>
            </NavLink>
          );
        })}
      </Cover>
    </Container>
  );
}
const Container = styled.div`
  padding-top: 70px;
  min-height: 91vh;
  height: auto;
  max-width: 100%;
  text-align: center;

  h2 {
    pointer-events: none;
    padding-top: 10px;
  }
`;
const Cover = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media only screen and (max-width: 640px) {
    align-items: center;
    justify-content: center;
  }
  // @media only screen and (max-width: 280px) {
  //   margin: auto;
  // }
`;
const Cards = styled.div`
  height: 300px;
  width: 250px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 19px;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: background-color 0.5s ease-in;

  :hover {
    background-color: #d8d8d8;
  }
  .img {
    margin-top: 60px;
  }
  @media only screen and (max-width: 640px) {
  }
  @media only screen and (max-width: 320px) {
    height: 200px;
    width: 150px;
    font-size: 15px;
  }
`;

export default Projects;
