import React from "react";
import styled from "styled-components";

function Search_Bar() {
  return (
    <Container>
      <Logo>
        <img src="/src/images/Amazon logo.jpg" />
      </Logo>
      <Emplacement>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-geo-alt"
          viewBox="0 0 16 16"
        >
          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
        <Location>
          <div>Update location</div>

          <nav>Delivering to</nav>
        </Location>
      </Emplacement>
      <Search>
      <button>Categories</button>
      <input type="search"/>
      <button className="search-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
        </Search>
        <Panier>
        Panier
        </Panier>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  width: 100%;
  min-height: 80px;
  position: relative;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const Logo = styled.div`

    grid-column: 1 / 6;
    grid-row: 1;

  img {
    width: 150px;
    height: 50px;
    padding: 10px;
    margin: 10px;

    &:hover {
  border: 2px solid white; 
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  transition: all 0.25s ease-out;
  }
  }
`;

const Emplacement = styled.div`
  grid-column: 2 / 6;
  grid-row: 1;

  background-color: black;
  color: white;
  width: 135px;
  padding-top: 0px;
  margin-top: 0px;
  height: 80px;
  display: grid;
  grid-template-columns: 25px 25px;
  grid-template-rows: 25px 25px 25px;
  grid-gap: 0px;
  grid-auto-rows: minmax(100px, auto);

  svg {
  grid-column: 1 / 2;
  grid-row: 3;
  }

  &:hover {
  border: 2px solid white; 
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  transition: all 0.25s ease-out;
  }
`;

const Location = styled.div`

  grid-column: 2 / 2;
  grid-row: 2;

  display: grid;
  grid-template-rows: 10px 50px;  
  grid-template-columns:110px;  
  grid-gap: 15px;
  grid-auto-rows: minmax(10px, 10px);

  div {
  grid-column: 1;
  grid-row: 2 / 2;
  }
  nav {
  grid-column: 1;
  grid-row: 1 / 2;
  opacity: 30%;
  }
`;

const Search = styled.div`

grid-column: 3 / 6;
grid-row: 1;

margin-top: 40px;
margin-left: 30px;

button {
background-color: lightgrey;
}

.search-button {
background-color: orange;
}

input {
width: 126px;
  &:hover {
    .search-button:hover {
    background-color: lightgrey;
    }
  }
}

`;

const Idioma = styled.div``;

const Account = styled.div``;

const Return = styled.div``;

const Panier = styled.div`
grid-columns: 6 / 6

display: flex;
flex: 1;

color: white;
margin-top: 40px;

width: 70px;
height: 20px;

 &:hover {
  border: 2px solid white; 
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  transition: all 0.25s ease-out;
  }
`;

export default Search_Bar;
