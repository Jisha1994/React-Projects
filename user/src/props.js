import React from 'react';

function Props(props) {
    return (
        <li>
            <ul><b>Name:</b> {props.name}</ul>
            <ul><b>Age:</b> {props.age}</ul>
            <ul><b>Location:</b> {props.loc}</ul>
        </li>
    );
}

export default Props;
