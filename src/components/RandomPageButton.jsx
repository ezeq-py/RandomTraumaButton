import React, { useState } from 'react';
import pagesData from "./pagesData.json"
import "./main.css"
import "./RandomPageButton.css"
import image from "../img/5895d2f1cba9841eabab607a.png"

const pages = pagesData

const RandomPageButton = () => {

    const [count, setCount] = useState(0);

    const ramdonPage = () => {
        const randomIndex = Math.floor(Math.random() * pages.length);
        const randomPage = pages[randomIndex].link;

        window.open(randomPage, '_blank');
    }

    const handleButtonClick = () => {
        ramdonPage();
        setCount((count) => count + 1)
    };

    return (
        <div>
            {/* <button classNameName='button' onClick={handleButtonClick}>
                hola jeje
            </button>
            <button>buscar</button>
            <p>Contador: {count}</p> */}

            <div className="main">
                <h1 className="main_title">Random Trauma Button</h1>
                <h2 className="main_text">The first button that reminds you of your chilhood internet trauma</h2>
                <button className="redondo" onClick={handleButtonClick}><img src={image} alt=""/></button>
            </div>

        </div>
    );
};

export default RandomPageButton;