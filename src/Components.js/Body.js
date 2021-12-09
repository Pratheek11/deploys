import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { GiSunglasses } from "react-icons/gi";
import dp from "../img/dp1.jpeg";
import { gsap } from "gsap";


function Body() {
  const ref = useRef();
  const ref2 = useRef();
  const slide = () => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      { duration: 0.8, opacity: 1, y: 0, ease: "Power2.easeOut", delay: 0.25 }
    );
    gsap.fromTo(
      ref2.current,
      { opacity: 0, x: 20 },
      { duration: 0.7, opacity: 1, x: 0, ease: "Power2.easeIn", delay: 0.25 }
    );
  };
  useEffect(() => {
    slide();
  }, []);
  return (
    <Container>
      <Contact>
        <div ref={ref}>
          <h2>I'm Pratheek,</h2>
          <p>
            A Software Development Enthusiast & <br></br> Fun Front-End
            Developer.{" "}
            <span>
              <GiSunglasses size={30} />
            </span>
          </p>
        </div>
        {/* <CgProfile size={280} /> */}
        <img ref={ref2} src={dp} alt="DP" className="dp" />
        
      </Contact>
    </Container>
  );
}

export default Body;

const Container = styled.div`
  width: 98%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8% 1% 0% 1%;
  @media only screen and (max-width: 420px) {
    height: 90vh;
  }
`;

const Contact = styled.div`
  display: flex;
  height: 60vh;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  h2 {
    font-size: 23px;
  }
  p {
    font-size: 20px;
  }
  .dp {
    height: 310px;
    clip-path: circle(98px at 100px 130px);
  }
  @media only screen and (max-width: 540px) {
    .dp {
      height: 250px;
      clip-path: circle(70px at 85px 100px);
    }
  }
  @media only screen and (max-width: 680px) {
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 17px;
    }
    .dp {
      height: 250px;
      clip-path: circle(90px at 95px 110px);
    }
  }
  @media only screen and (max-width: 420px) {
    flex-direction: column;
    height: 70vh;
    justify-content: space-evenly;
    align-items: center;
    h2 {
      font-size: 17px;
    }
    p {
      font-size: 14px;
    }
    .dp {
      height: 250px;
      clip-path: circle(60px at 80px 90px);
    }
  }
  @media only screen and (max-width: 321px) {
    flex-direction: column;
    height: 70vh;
    justify-content: space-evenly;
    align-items: center;
    h2 {
      font-size: 17px;
    }
    p {
      font-size: 14px;
    }
    .dp {
      height: 250px;
      clip-path: circle(60px at 80px 80px);
    }
  }
`;
