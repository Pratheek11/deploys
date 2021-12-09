import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import programming from '../img/programming.svg';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const ref = useRef();
  useEffect(() => {
    gsap.from(ref.current, {
      duration: 1.5,
      y: "30",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play pause resume reverse",
      },
    });
  }, []);

  return (
    <Container ref={ref}>
      <Tag>{`< about>`}</Tag>
      <br />
      <p>Hello,</p>
      <p>
        I love to be a part of any real world projects. A new coding challenge
        always get's me and makes to learn new things. I love to develope new
        web applications using "React" and passionate about software development
        in java.
      </p>
      <br />
      <p>
        Hmmm, that all about me.<span>✌</span>
      </p>
      <br />
      <Tag>{`</about>`}</Tag>
      <img src={programming} alt="svg" className="svg"/>
    </Container>
  );
}

export default About;

const Container = styled.div`
  width: 98%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1%;
  pointer-events: none;

  p {
    width: 95%;
    font-size: 20px;
  }

  .svg {
    position: absolute;
    top: 10%;
    right: 0%;
    z-index: -1;
    height: 90%;
    width: 90%;
    opacity: 0.1;
  }

  @media only screen and (max-width: 620px) {
    p {
      font-size: 17px;
    }
  }
  @media only screen and (max-width: 540px) {
    p {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 420px) {
    margin: 2%;
    p {
      margin: 5%;
      width: 90%;
      font-size: 12px;
    }
    .svg {
      height: 80%;
      width: 80%;
      opacity: 0.09;
    }
  }
  @media only screen and (max-width: 320px) {
    margin: 2%;
    height: 60vh;
    p {
      margin: 5%;
      font-size: 10px;
    }
  }
`;
const Tag = styled.div`
  font-size: 23px;
  font-weight: bold;
  @media only screen and (max-width: 620px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 17px;
  }
`;
