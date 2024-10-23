import React from 'react'
import styled from 'styled-components'

function Sell() {
  return (
    <Container>
        <MenuButton>
            <div className='Options'>
                <ul>
                    <li className='Toutes_Liste_Buttons' onClick={Apparition_Toutes_Liste}><b>Toutes</b></li>
                    <li>Monoprix</li>
                    <li>Meilleures_ventes</li>
                    <li>Ventes_Flash</li>
                    <li>Amazon_Basics</li>
                    <li>Amazon_Basics</li>
                    <li>Dernières_Nouveautés</li>
                    <li>Vendre_sur_Amazon</li>
                    <li>Idées_cadeaux</li>
                    <li>Livres</li>
                </ul>
                <nav>
                    HALLOWEEN
                </nav>
            </div>
            <div className="Toutes_Liste">
                <Container_Toutes_Liste>
                    <div>
                        Compte
                    </div>
                    <div onClick={Erase_List}>
                        X   
                    </div>
                </Container_Toutes_Liste>
            </div>
        </MenuButton>
    </Container>
  )
}

const Shadow = styled.div`
`;

const Container = styled.div`
width: 100%;
height: 30px;
background-color: rgb(0, 0, 100, 0.75);
}
`;

const Container_Toutes_Liste = styled.div`
width: 100%;
height: 30px;
color: white;
background-color: rgb(0, 0, 100, 0.75);
display: flex;
flex-wrap: nowrap;
justify-content: space-between;
flex-direction: row;
align-items: center;

div {
&:hover {
border: 1px solid white
}

}
}
`;

const MenuButton = styled.div`

width: 85px;

.Options {
display: flex;
flex-wrap: nowrap;
}

.Toutes_Liste {
position: fixed;
top: 0;
left: -300px;
z-index: 1;
border: 1px solid black;
background: white;
height: 100%;
width: 200px;
}

nav {
color: white;
margin-left: 50px;
padding-top: 2px;

&:hover {
border: 1px solid white
}
}

ul {
list-style: none;
margin-top: 0;
padding-left: 1px;
padding-top: 1px;
display: flex;
flex-wrap: nowrap;
}

li {
padding-left: 10px;
color: white;
font-size: 1rem;

&:hover {
border: 1px solid white;
}

}

`;

const Toutes_Liste = document.querySelector(".Toutes_Liste");

let Apparition_Toutes_Liste = () => {
    Toutes_Liste.style.transition = "all 0.5s ease-out";
    Toutes_Liste.style.left = "0px";
}

const Erase_List = () => {
    Toutes_Liste.style.left = "-300px";
}

export default Sell;
