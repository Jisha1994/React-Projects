import React,{useState} from "react";

function LoanCalculator() 
{
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [history, setHistory] = useState([]);

const calculateMonthlyPayment = () => 
    {
    const r = rate / 100 / 12; 
    const n = years * 12; 
    const m = (principal * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
    const formattedPayment = m.toFixed(2);
    setMonthlyPayment(formattedPayment);

    const newHistory = 
    {
    principal,
    rate,
    years,
    monthlyPayment: m.toFixed(2),
    };
    setHistory([...history, newHistory]);
    };

const resetValues = () => 
    {
    setPrincipal(0);
    setRate(0);
    setYears(0);
    setMonthlyPayment(null);
    };

return (
      <div className="container">
      <h1>LOAN CALCULATOR</h1>     
      <label>Loan Amount (Principal)</label>
      <input
        type="number" min="100" max="100000" step="100"
        value={principal}
        onChange={(e) => setPrincipal(Number(e.target.value))}/>                    
      <label>Annual Interest Rate (%)</label>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))} />
      <label>Loan Duration (Years)</label>
      <input
        type="number"
        value={years}
        onChange={(e) => setYears(Number(e.target.value))} />
     
      <button onClick={resetValues}>Reset</button>
      <button onClick={calculateMonthlyPayment}>Calculate</button>

      {monthlyPayment && (
          <h3>Monthly Payment: ${monthlyPayment}</h3>
      )}

      <h2>Calculation History</h2>
      <ul>
          {history.map((entry, index) => (
              <li key={index}>
                  ${entry.principal} at {entry.rate}% for {entry.years} years: Monthly Payment: ${entry.monthlyPayment}
              </li>
          ))}
      </ul>
  </div>
);
}

export default LoanCalculator;

