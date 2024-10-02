
import './counter.css'
import  { useState } from "react";
function App () 
  {
	const [counter, setCounter] = useState(0);

	const handleClick1 = () => {	
		setCounter(counter + 1);
	};

	const handleClick2 = () => {
		setCounter(counter - 1);
	};

	return (
		<body>
			<h1>Counter App</h1>	
				{counter}
				<button onClick={handleClick1}>Increment</button>
				<button onClick={handleClick2}>Decrement</button>
        </body>
	);
	
};

export default App;
