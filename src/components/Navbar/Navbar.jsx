import React from 'react'

import styled from "styled-components"

function Navbar(){
    return(
        <>
            <NavContainer>
                <h2>Mirate <span> Algo</span></h2>
                <div>
                        <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Terror</a></li>
                                <li><a href="/">Comedia</a></li>
                                <li><a href="/">Ciencia Ficcion</a></li>               
                        </ul> 
                        <h1>🛒0</h1>
                </div>
            </NavContainer>
        </>
    )
}

export default Navbar

const NavContainer = styled.nav`
* {
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}
h2{
    color: white;
    font-weight: 400;
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    padding: .5rem;
    background-color : #065795;

    span{
        font-weight: bold;
        margin-left: 0.5rem;
    }
}
ul{
    position: fixed;
    top: 0;
    width: 100%;
    list-style: none;
    margin-left: 2rem;
    justify-content: center;
    display: flex;
    font-size: 25px;
}
li{
    margin-right: 1rem;
    cursor: pointer;
}
a{
    color: white;

}
h1{
    text-align: right;
    justify-content: center;
    padding-right: 20px;
    padding-top: 5px;
    position: fixed;
    top: 0;
    width: 100%;
    font-size: 30px;
    cursor: pointer;

}
`