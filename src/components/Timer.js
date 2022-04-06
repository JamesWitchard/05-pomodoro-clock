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
                {props.timeMins < 10 ? "0" + props.timeMins : props.timeMins}
                :
                {props.timeSecs < 10 ? "0" + props.timeSecs : props.timeSecs}
            </label>
        </div>
    );
};

export default Timer;