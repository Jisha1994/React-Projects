import React, { useState } from 'react';
import Props from './props';
import { Propsdata } from './propsdata';
import Tabbutton from './button';
import './user.css'

function App() {
    const [buttonClicked, setButtonClicked] = useState(<Props {...Propsdata[0]} />);

    const handleSubmit = (Component) => {
        setButtonClicked(<Component />);
    };

    return (
        <>
            <center><h1>User Profile</h1></center>
            <div>
                <center><menu>{buttonClicked}</menu></center>
            </div>
            <center>
                <Tabbutton onSelect={() => handleSubmit(() => <Props {...Propsdata[1]} />)}>
                    Update Profile
                </Tabbutton>
            </center>
        </>
    );
}

export default App;
