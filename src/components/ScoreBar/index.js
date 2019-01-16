import React from "react";

function ScoreBar(props){
    return (
        <div>Current Score: {props.currentScore} | High Score: {props.highScore}</div>
    )
}

export default ScoreBar;
