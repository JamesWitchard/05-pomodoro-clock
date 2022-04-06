import React from 'react';

import "./Controls.css"

const Controls = (props) => {
    return (
        <div className="controls">
            <a
                href="#" id="start_stop"
                onClick={e => props.onPlay(e)}
            >
                <i className={props.timerRunning ? "fa fa-pause" : "fa fa-play"}/>
            </a>
            <a href="#" id="reset" onClick={props.resetClick}><i className="fa fa-refresh"/></a>
        </div>
    );
};

export default Controls;