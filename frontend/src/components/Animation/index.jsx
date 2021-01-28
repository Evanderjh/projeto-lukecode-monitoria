import React from 'react';

import './stylos.css';
const Animation = () => {
    //setTimeout ele executa uma lógica depois de um delay
    setTimeout(() => {
        document.getElementById('bg-animation').style = "display: none";
    }, 2000)
    
    return (
        <div className="bg-animation" id="bg-animation">
            <div className="animation">
                <h2>Luke Code</h2>
            </div>
        </div>
    );
}

export default Animation;