import React from 'react';
import './styles.css';

export default ({ src, className }) => (
    <div className= "two-col-container__img-container">
        <img className={className} src={src} alt={"Error loading SVG"} />
    </div>
)

