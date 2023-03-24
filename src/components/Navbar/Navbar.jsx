import React from 'react'
import { CartWidget } from '../CartWIdget/cartWidget'
import "./Navbar.css"

 export function Navbar(){
    return(
        <div className='nav'>
                <h2>Mirate <span> Algo</span></h2>
                <div>
                        <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Terror</a></li>
                                <li><a href="/">Comedia</a></li>
                                <li><a href="/">Ciencia Ficcion</a></li>               
                        </ul>
                        <CartWidget/>
                </div>
        </div>
    )
}



