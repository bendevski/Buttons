import React from 'react';

export default function Box(props){
    return (
    <div className="Box">
        <p>You have clicked: {props.num}</p>
    </div>
    )
}