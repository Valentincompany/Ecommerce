import Navbar from "../Navbar/Navbar"
import styled from "styled-components"

function Home (){
    return(
        <>
            <Navbar/>
        <HomeContainer>


            <h2>Hola! En este proyecto pronto habra peliculas para comprar</h2>

        </HomeContainer>
        </>
    )
}

export default Home


const HomeContainer = styled.nav`
h2{
    color: #ffffff;
    display: flex;
    justify-content: center;
    margin-left: 30%;
    position: fixed;
    top: 40%;
    width: 40%;
    padding: 35px;
    background-color : #02264a;
}
`

