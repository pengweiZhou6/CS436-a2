import img from './UBC.jpg';
import React from "react";
import styled from "styled-components";


function AboutMe() {
    return (
        <Wrapper>
        <div className="Flex">
            <div className="card-container">
                <div className="card">
                    <div className="side"><img src="me.jpg" alt="Pengwei Zhou" width={150} height={152}/></div>
                    <div className="side back">
                        <div className="centered">Pengwei Zhou</div>
                    </div>
                </div>
            </div>
            <div className="intro">Hi! Here is my personal website project. I build my web app by MERN.
            </div>
            <a href="https://play.na.leagueoflegends.com/en_US" target="_blank">My favourite game is League of
                Legend</a>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aR-KAldshAE" frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>
        </div>

        </Wrapper>

    );
}

const Wrapper = styled.div`
    margin: 0;
    background: url(${img}) no-repeat center center fixed;
    display: flex;
    height: 1000px;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    div.Flex {
    margin: 1%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    
    
    }
    
    div.card-container {
    margin-top: 1%;
    margin-bottom: 5%;
    height: 150px;
    perspective: 600px;
    position: relative;
    width: 150px;
    
    }
    
    div.card {
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: all 1s ease-in-out;
    width: 100%;
    &:hover {
      transform: rotateY(180deg);
    }
    div.side {
    backface-visibility: hidden;
    background: #98FB98;
    height: 100%;
    position: absolute;
    width: 100%;
    }
    div.back {
    background: #111111;
    text-align:center;
    color: whitesmoke;
    transform: rotateY(180deg);
    }
        div.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
    }


`;

export default AboutMe;