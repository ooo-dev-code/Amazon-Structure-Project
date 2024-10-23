import React, { useState } from "react";
import styled from "styled-components";

function Home() {

  return (
    <Container>
      <Img_bloc>
        <img src= {"/src/images/Image1.jpg"} alt="" />
      </Img_bloc>
      <Bloc>
        <div className="flex-container">
          <div className="flexbox"><b>Television</b></div>
          <div className="flexbox"><b>Television</b></div>
          <div className="flexbox"><b>Television</b></div>
          <div className="flexbox"><b>Television</b></div>
          <div className="flexbox"><b>Television</b></div>
          <div className="flexbox"><b>Television</b></div>
        </div>
      </Bloc>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: grey;
`;

const Img_bloc = styled.div`
width: 100%;
height: 300px;
z-index = -1;
background-color: black;
`;

const Bloc = styled.div`

.flex-container {
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
}

.flexbox {
width: 250px;
height: 250px;
background-color: blue;
margin: 30px;
margin-top: 60px;
padding-left: 30px;
color: white;
font-size: 2.5rem;
}
`;

export default Home;
