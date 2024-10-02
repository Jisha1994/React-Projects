

import React, { useState } from "react";

function InvestmentCalculator() 
{
    const [principal, setPrincipal] = useState(0);
    const [rate, setRate] = useState(0);
    const [years, setYears] = useState(0);
    const [frequency, setFrequency] = useState(1); 
    const [futureValue, setFutureValue] = useState(null);

    const calculateFutureValue = () => {
        const r = rate / 100;
        const n = frequency;
        const t = years;
        const future = principal * Math.pow((1 + r / n), n * t); 
        setFutureValue(future.toFixed(2));
    };
    const resetValues = () => {
        setPrincipal(0);
        setRate(0);
        setYears(0);
        setFrequency(1);
        setFutureValue(null);
    };

    return (
        <div class="container">
            <h1>INVESTMENT CALCULATOR</h1>
            
                <label>Initial Investment</label>
                <input
                    type="number" min="100" max="100000" step="100"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}/>                    
                <label>Annual Interest Rate (%)</label>
                <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}/>
                <label>Number of Years</label>
                <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}/>
                <label>Compound Frequency</label>
                <select value={frequency} onChange={(e) => setFrequency(Number(e.target.value))}>
                    <option value={1}>Annually</option>
                    <option value={4}>Quarterly</option>
                    <option value={2}>Semiannually</option>
                    <option value={12}>Monthly</option>
                </select>
        
            <button onClick={resetValues}>Reset</button>
            <button onClick={calculateFutureValue}>Calculate</button>
            {futureValue && (
                <h3>Future Value: ${futureValue}</h3>
            )}
        </div>
    );
}

export default InvestmentCalculator;
