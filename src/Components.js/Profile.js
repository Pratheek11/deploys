import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { gsap } from "gsap";

function Profile() {
  const ref = useRef();
  const slide = () => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 400 },
      {
        duration: 2.5,
        opacity: 1,
        y: 0,
        ease: "Power2.easeOut",
      }
    );
  };
  useEffect(() => {
    slide();
  }, []);
  return (
    <Container ref={ref}>
      <a href="https://github.com/Pratheek11" target="_blank">
        <AiFillGithub className="logo" size={25} />
      </a>
      <a href="mailto:pratheek1101@gmail.com" target="_blank">
        <HiOutlineMail className="logo" size={25} />
      </a>
      <a href="https://www.linkedin.com/in/pratheek-achar-9a290a1b1" target="_blank">
        <AiFillLinkedin className="logo" size={26} />
      </a>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10px;

  .logo {
    cursor: pointer;
  }

  a {
    color: inherit;
  }
`;
