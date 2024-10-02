import React from 'react';

function Tabbutton(props) {
    return (
        <div>
            <button onClick={props.onSelect}>{props.children}</button>
        </div>
    );
}

export default Tabbutton;
