import React from 'react';

import './styles.css';
// Desestruturar um objeto
/*
    const {image, alt} = {
        image: "../imagens/test.png",
        alt: "É uma imagem"
    }
*/ 
const CardCourse = (props) => {
    return (
        <article>
            <img src={props.image} alt={props.alt}/>
            <h4>{props.children}</h4>
        </article>
    );
}

export default CardCourse;