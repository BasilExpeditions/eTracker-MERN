import React from 'react';

const PropComponent = (props) => {
    return (
        <div>
            <h1>Prop component</h1>
            <p>I am inside PropComponent <strong>{props.name}</strong></p>
        </div>
    )
}

export default PropComponent;