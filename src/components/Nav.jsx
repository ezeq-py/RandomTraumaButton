import React from 'react'
import "./nav.css"
import "./main.css"

function Nav() {
    return (
        <div>
            <nav className="nav">
                <ul>
                    <li>Meet the creators</li>
                    <li>Buy us a coffe</li>
                    <li>Submit your trauma</li>
                </ul>
            </nav>
            <div className="descomprimir">
                <a href="https://www.youtube.com/watch?v=3cyS6wMVCqI">Descomprimir acá</a>
            </div>
        </div>
    )
}

export default Nav