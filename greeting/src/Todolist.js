import React, { useState } from "react";

const Todolist = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value.toUpperCase());
    };

    const addTodo = () => {
        
            setTodos([...todos, inputValue]);
            setInputValue('');
        
    };
    return (
        <div class="container">
            <h1>To Do List</h1>
            <input type="text" value={inputValue}  onChange={handleInputChange}/>         
            <button onClick={addTodo}>ADD</button>

            <h2>List</h2>
            <ul>
                {todos.map((entry, index) => (
                    <li key={index}>
                        {entry} 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todolist;
