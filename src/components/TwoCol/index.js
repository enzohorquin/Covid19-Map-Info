import React from 'react';
import Svg from '../Svg';
import './styles.css'
export default (props) => {

    return (
            <div className="row-container two-col-container">
                <div className="two-col-container__text-container">
                    <h2 className="h1-header h1-header--blue">{props.header}</h2>
                        <p className="two-col-container__text-container__para para">{props.info}</p>
                        <Svg className={props.styles}  src={props.src}/>
                </div>
            </div>
    );

}