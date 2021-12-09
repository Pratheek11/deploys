import React, { useRef, useEffect }  from 'react'
import styled, {css} from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills =  () => {

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
        <Container>
            <h1>STUFF I KNOW</h1>
            <Cover ref={ref}>
                <Lang>
                    <h2>Java</h2>
                    <Bar><Progress percent="80%"/></Bar>
                </Lang>
                <Lang>
                    <h2>HTML</h2>
                    <Bar><Progress percent="80%"/></Bar>
                </Lang>
                <Lang>
                    <h2>CSS</h2>
                    <Bar><Progress percent="60%"/></Bar>
                </Lang>
                <Lang>
                    <h2>JAVASCRIPT</h2>
                    <Bar><Progress percent="60%"/></Bar>
                </Lang>
                <Lang>
                    <h2>REACT</h2>
                    <Bar><Progress percent="70%"/></Bar>
                </Lang>
                <Lang>
                    <h2>NODE</h2>
                    <Bar><Progress percent="60%"/></Bar>
                </Lang>
                <Lang>
                    <h2>MONGO DB</h2>
                    <Bar><Progress percent="50%"/></Bar>
                </Lang>
            </Cover>
        </Container>
    )
}

const Container = styled.div`
    height: auto;
    margin: 10px;
    text-align: center;

    h1 {
        pointer-events: none;
        padding-top: 10px;
        font-size: 25px;        
    }
`;

const Cover = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Lang = styled.div`
    margin: 50px;

    h2 {
        font-size: 20px;
    }
`;
const Bar = styled.div`
    width: 200px;
    height: 15px;
    border-radius: 4px;
    background-color: white;
`;
const Progress = styled.div`
    
    height: 100%;
    border-radius: 4px;
    background-color: #39ad48;
    ${(props) =>
        props.percent &&
        css`
        width: ${props.percent};
        `}
`;

export default Skills;