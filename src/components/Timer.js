import React from 'react';

import "./Timer.css"

const Timer = (props) => {
    return (
        <div className={`timer`}>
            <label id="timer-label" className={props.timeMins < 1 ? "warning" :
                (props.label === "Break" && props.timeMins >= props.timeTop) ? "calm" : ""}>
                {props.label}
            </label>
            <label id="time-left" className={props.timeMins < 1 ? "warning" :
                (props.label === "Break" && props.timeMins >= props.timeTop) ? "calm" : ""}>
                {props.timeMins.toString().padStart(2, "0")}
                :
                {props.timeSecs.toString().padStart(2, "0")}
            </label>
        </div>
    );
};

export default Timer;