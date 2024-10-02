import { useState, useEffect } from "react";

function CountdownTimer() {
    const [time, setTime] = useState(0); 
    const [timeLeft, setTimeLeft] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const change = (event) => {
        setTime(Number(event.target.value)); 
    };

    const start = () => {
        setTimeLeft(time);
        setIsActive(true);
    };

    useEffect(() => {
        let timer;

        if (isActive && timeLeft > 0) 
            {
            timer = setTimeout(() => 
                {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0)
             {
            setIsActive(false); 
        }

        return () => clearTimeout(timer); 
    }, [isActive, timeLeft]);

    return (
        <div>
            <h1>Countdown Timer</h1>
            <input type="number" value={time} onChange={change} />
            <button onClick={start}>Start</button>
            <p>Time Remaining: {timeLeft} seconds</p>
        </div>
    );
}

export default CountdownTimer;
