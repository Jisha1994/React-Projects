import React, { useState} from 'react';

const colors = ["red", "green", "yellow", "black", "blue"];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function RandomColor() {
    const [backgroundColor, setBackgroundColor] = useState(0);

    const changeBackgroundColor = () => {
        setBackgroundColor(getRandomColor());
    };

    return (
        <div style={{ backgroundColor }}>
            <button onClick={changeBackgroundColor}>Change Color</button>
        </div>
    );
}

export default RandomColor;
