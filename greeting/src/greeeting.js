import React, { useState } from "react";

const Greeting = () => {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('Hi, Good Morning');

    const inputName = (e) => {
        const newName = e.target.value.toUpperCase();
        setName(newName);
        setGreeting(`Hi, Good Morning, ${newName}`);
    };

    return (
        <div class = "contanier">
            <h1>Greeting</h1>
            <input type="text" placeholder="Name to greet" value={name} onChange={inputName} />
            <p>{greeting}</p>
        </div>
    );
};

export default Greeting;
