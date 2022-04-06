import React from 'react';

import "./Controls.css"

const Controls = (props) => {
    return (
        <div className="controls">
            <button
                id="start_stop"
                onClick={e => props.onPlay(e)}
            >
                <i className={props.timerRunning ? "fa fa-pause" : "fa fa-play"}/>
            </button>
            <button id="reset" onClick={props.resetClick}><i className="fa fa-refresh"/></button>
        </div>
    );
};

export default Controls;