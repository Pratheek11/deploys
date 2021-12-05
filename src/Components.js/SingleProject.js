import React, { useEffect, useRef } from "react";
import data from "../Data/projects.json";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { gsap } from "gsap";

function SingleProject({ match }) {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
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
    gsap.fromTo(
      ref3.current,
      { opacity: 0 },
      { duration: 1, opacity: 1, ease: "Power2.easeIn", delay: 0.5 }
    );
  };
  useEffect(() => {
    slide();
  }, []);

  const item = data.find((el) => el.id == match.params.id);

  return (
    <Container>
      <Cover>
        <div ref={ref}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
        <Rep ref={ref2}>
          <a href={item.repository} target="_blank">
            <AiFillGithub className="logo" size={25} />
            <p>repository</p>
          </a>
        </Rep>
      </Cover>
      <Sample ref={ref3}>
        {item.img.map((el) => {
          return <img className="imge" src={el} alt={item.name} />;
        })}
      </Sample>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 80px;
  min-height: 90vh;
  max-width: 100%;
  overflow-x: hidden;
`;
const Cover = styled.div`
  padding: 20px;
  max-width: 100%;
  img {
    height: 450px;
    width: 650px;
  }
`;
const Rep = styled.div`
  width: 110px;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: space-around;
    text-decoration: none;
    color: black;
  }
  a:hover {
    border-bottom: 2px solid black;
  }
`;
const Sample = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  .imge {
    object-fit: contain;
    width: 100%;
    height: 250px;
    margin-right: 50px;
    transition: transform 450ms;
  }
`;
export default SingleProject;
