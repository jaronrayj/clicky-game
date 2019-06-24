import React from 'react';

function Score(props) {
    return(
        <>
        <h1>Memory Game</h1>
        <h3>Score: {props.score}</h3>
        <h3>Hi Score: {props.hiScore}</h3>
        </>
    )
}

export default Score;