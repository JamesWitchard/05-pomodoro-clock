import React from 'react';

import "./Counter.css"

const Counter = (props) => {
    return (
        <div className="counter">
            <h2 id={`${props.label.toString().toLowerCase()}-label`}>{props.label} Length</h2>
            <div className="buttons">
                <button id={`${props.label.toString().toLowerCase()}-decrement`}><i className="fa fa-arrow-down" /></button>
                <label id={`${props.label.toString().toLowerCase()}-length`}>5</label>
                <button id={`${props.label.toString().toLowerCase()}-increment`}><i className="fa fa-arrow-up"/></button>
            </div>
        </div>
    );
};

export default Counter;