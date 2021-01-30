import React from 'react';

import './styles.css';

const CardCategory = (props) => {
    return (
        <div className="category-card">
            <div className="category-card-image" style={{backgroundColor: props.color}}>
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="category-card-content">
                <h4>{props.title}</h4>
                <p>{props.numberCourses}</p>
            </div>
        </div>
    );
}

export default CardCategory;